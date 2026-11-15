// Samples one chain's blocks from raw bytes, so no decoder can drop a block. Records extrinsics and event count per block. Usage: bun kreivo-history.mjs <from> <to> <step> <out.jsonl> [concurrency] with RPC=<archive endpoint>
import {appendFileSync,writeFileSync} from 'fs';
const [,,fromA,toA,stepA,out,concA]=process.argv;const from=+fromA,to=+toA,step=+stepA,C=+(concA||48);
const EV='0x26aa394eea5630e07c48ae0c9558cef70a98fdbe9ce6c55837576c60c7af3850',TS='0xf0c365c3cf59d671eb72da0e7a4113c49f1f0515f462cdcf84e0f1d6045dfcbb';
let w,id=0,p=new Map();
const open=()=>new Promise((res,rej)=>{w=new WebSocket(process.env.RPC);w.onopen=res;w.onerror=rej;w.onclose=()=>{for(const[,f]of p)f.rej(new Error('closed'));p.clear();w=null};w.onmessage=e=>{const d=JSON.parse(e.data);const f=p.get(d.id);if(f){p.delete(d.id);d.error?f.rej(new Error(d.error.message)):f.res(d.result)}}});
const call=(m,a)=>new Promise((res,rej)=>{const i=++id;p.set(i,{res,rej});w.send(JSON.stringify({jsonrpc:'2.0',id:i,method:m,params:a}))});
let opening=null;const ensure=async()=>{if(w&&w.readyState===1)return;opening??=open().finally(()=>opening=null);await opening};
writeFileSync(out,'');const nums=[];for(let n=from;n<=to;n+=step)nums.push(n);let idx=0,done=0,fail=0,tx=0,t0=Date.now();let buf=[];
const flush=()=>{if(buf.length){appendFileSync(out,buf.join('\n')+'\n');buf=[]}};
await Promise.all(Array.from({length:C},async()=>{while(idx<nums.length){const n=nums[idx++];let ok=false;for(let t=0;t<4&&!ok;t++){try{await ensure();const h=await call('chain_getBlockHash',[n]);const [b,e,s]=await Promise.all([call('chain_getBlock',[h]),call('state_getStorage',[EV,h]),call('state_getStorage',[TS,h])]);
 const x=b.block.extrinsics.length;const ev=e?Buffer.from(e.slice(2),'hex').readUInt32LE(0):null;const tm=s?Number(Buffer.from(s.slice(2),'hex').readBigUInt64LE(0)):null;
 const r={n,x,ev,t:tm};if(x>2)tx+=x-2;buf.push(JSON.stringify(r));ok=true;}catch(err){await new Promise(r=>setTimeout(r,300*(t+1)))}}
 if(!ok){fail++;buf.push(JSON.stringify({n,fail:1}))}done++;if(buf.length>500)flush();if(done%10000===0)console.log(done,'/',nums.length,'tx',tx,'fail',fail,Math.round(done/((Date.now()-t0)/1000))+'/s')}}));
flush();console.log('DONE',done,'tx',tx,'fail',fail,Math.round((Date.now()-t0)/1000)+'s');process.exit(0);
