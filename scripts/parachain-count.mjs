// Counts every block in 24 hours on one chain. Usage: END_MS=<window end, ms> node parachain-count.mjs <paraId> <rpc> <name> Decoding can misread a chain with its own transaction format, as on Kreivo, so check any non-zero failed count and any surprising call.
import { ApiPromise, WsProvider } from '@polkadot/api';
const [,,idArg,url,name]=process.argv; const id=Number(idArg);
const INH=new Set(['timestamp','parachainSystem','authorInherent','parachainInherent','randomnessCollectiveFlip','randomness','session']);
const prov=new WsProvider(url,false,{},60000); prov.on('error',()=>{}); await prov.connect();
const api=await ApiPromise.create({provider:prov,noInitWarn:true});
const props=await api.rpc.system.properties();
const ts=b=>{const t=b.block.extrinsics.find(x=>x.method.section==='timestamp');return t?Number(t.method.args[0].toString()):null};
const get=async n=>api.rpc.chain.getBlock(await api.rpc.chain.getBlockHash(n));
const head=(await api.rpc.chain.getHeader(await api.rpc.chain.getFinalizedHead())).number.toNumber();
const tHead=ts(await get(head));
const END=Number(process.env.END_MS), START=END-864e5;
if(tHead<END){ console.log(JSON.stringify({paraId:id,name,status:'head before window end',head,head_at:new Date(tHead).toISOString(),symbol:props.tokenSymbol.toJSON()?.[0]}));process.exit(0);}
async function find(t){let lo=Math.max(1,head-Number(process.env.BACK||90000)),hi=head;while(lo<hi){const m=Math.floor((lo+hi)/2);let v;try{v=ts(await get(m));}catch{v=null}if(v===null||v<t)lo=m+1;else hi=m;}return lo;}
const a=await find(START), z=await find(END);
const nums=[];for(let i=a;i<z;i++)nums.push(i);
const undecoded=[];let ok=0,fail=0,tot=0,user=0,signed=0;const signers=new Set();const pal={};const zero=[];let idx=0;
await Promise.all(Array.from({length:Number(process.env.C||24)},async()=>{while(idx<nums.length){const n=nums[idx++];for(let t=0;t<3;t++){try{const b=await get(n);
 for(const x of b.block.extrinsics){tot++;const s=x.method.section;if(!x.isSigned&&INH.has(s))continue;user++;const k=s+'.'+x.method.method;pal[k]=(pal[k]||0)+1;if(x.isSigned){signed++;signers.add(x.signer.toString());}}
 ok++;break;}catch(e){if(t===2){fail++;undecoded.push(n);}}}}}));
const r={paraId:id,name,rpc:url,symbol:props.tokenSymbol.toJSON()?.[0],spec:api.runtimeVersion.specName.toString()+'/'+api.runtimeVersion.specVersion.toNumber(),window_start:new Date(START).toISOString(),window_end:new Date(END).toISOString(),first_block:a,last_block:z-1,blocks:nums.length,read:ok,failed:fail,extrinsics:tot,user_tx:user,signed,distinct_signers:signers.size,top_calls:Object.entries(pal).sort((x,y)=>y[1]-x[1]).slice(0,8),undecoded_blocks:undecoded,warning:fail?'Blocks here failed to decode. A failure may be a real transaction: recount from raw bytes with kreivo-history.mjs':undefined,status:'counted'};
console.log(JSON.stringify(r,null,1));process.exit(0);
