// Same count from raw blocks, for chains where old runtime types stall the decoder. A signed v4 extrinsic has version byte 0x84. Usage: node parachain-count-raw.mjs <paraId> <rpc> <name>
// The window is fixed: 4 November 2026 UTC. Change END and START to count another day.
const [,,id,url,name]=process.argv;const END=1793836800000,START=END-864e5;
const TS='0xf0c365c3cf59d671eb72da0e7a4113c49f1f0515f462cdcf84e0f1d6045dfcbb';
const w=new WebSocket(url);let i=0;const p={};
const c=(m,a=[])=>new Promise((r,j)=>{const k=++i;p[k]=[r,j];w.send(JSON.stringify({id:k,jsonrpc:'2.0',method:m,params:a}))});
w.onmessage=e=>{const d=JSON.parse(e.data);const q=p[d.id];if(!q)return;delete p[d.id];d.error?q[1](new Error(d.error.message)):q[0](d.result)};
await new Promise((r,j)=>{w.onopen=r;w.onerror=()=>j(new Error('ws'));setTimeout(()=>j(new Error('open t/o')),20000)});
const lenBytes=b=>{const m=b&3;return m===0?1:m===1?2:m===2?4:0};
const head=parseInt((await c('chain_getHeader',[await c('chain_getFinalizedHead')])).number,16);
const tsAt=async n=>{const h=await c('chain_getBlockHash',[n]);const s=await c('state_getStorage',[TS,h]);return Number(Buffer.from(s.slice(2),'hex').readBigUInt64LE(0))};
async function find(t){let lo=head-120000,hi=head;while(lo<hi){const m=Math.floor((lo+hi)/2);(await tsAt(m))<t?lo=m+1:hi=m}return lo}
const a=await find(START),z=await find(END);console.error('window',a,z,z-a);
let idx=a,ok=0,fail=0,tot=0,signed=0,unsignedExtra=0;const sg=new Set();const sigcalls={};const perBlockUnsigned={};
await Promise.all(Array.from({length:48},async()=>{while(idx<z){const n=idx++;for(let t=0;t<3;t++){try{const h=await c('chain_getBlockHash',[n]);const b=await c('chain_getBlock',[h]);let u=0;for(const x of b.block.extrinsics){tot++;const buf=Buffer.from(x.slice(2),'hex');const v=buf[lenBytes(buf[0])];if(v===0x84){signed++;const o=lenBytes(buf[0])+1;if(buf[o]===0)sg.add(buf.slice(o+1,o+33).toString('hex'));}else u++}perBlockUnsigned[u]=(perBlockUnsigned[u]||0)+1;ok++;break}catch(e){if(t===2)fail++}}}}));
const r={paraId:+id,name,rpc:url,window_start:new Date(START).toISOString(),window_end:new Date(END).toISOString(),first_block:a,last_block:z-1,blocks:z-a,read:ok,failed:fail,extrinsics:tot,signed,distinct_signers:sg.size,unsigned_per_block_histogram:perBlockUnsigned,status:'counted-raw'};
console.log(JSON.stringify(r,null,1));process.exit(0);
