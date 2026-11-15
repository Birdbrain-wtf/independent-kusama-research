// For nodes that keep only recent blocks: counts back from the head until the node stops answering or the time budget ends.
// Usage: node parachain-tail.mjs <paraId> <rpc> <name> <budget in hours>
import { ApiPromise, WsProvider } from '@polkadot/api';
const [,,id,url,name,hrs]=process.argv;
const prov=new WsProvider(url,false,{},30000);prov.on('error',()=>{});await prov.connect();
const api=await ApiPromise.create({provider:prov,noInitWarn:true});
const INH=new Set(['timestamp','parachainSystem','authorInherent','parachainInherent','randomnessCollectiveFlip','randomness','session']);
const props=await api.rpc.system.properties();
const head=(await api.rpc.chain.getHeader(await api.rpc.chain.getFinalizedHead())).number.toNumber();
const ts=b=>{const t=b.block.extrinsics.find(x=>x.method.section==='timestamp');return t?Number(t.method.args[0].toString()):null};
let user=0,signed=0,n=head,blocks=0,tH=null,tL=null;const signers=new Set(),pal={};
const limit=Date.now()+Number(hrs||0.03)*36e5;
for(;n>0&&Date.now()<limit;n--){let b;try{b=await api.rpc.chain.getBlock(await api.rpc.chain.getBlockHash(n));}catch{break}
 const t=ts(b);if(!tH)tH=t;tL=t;blocks++;for(const x of b.block.extrinsics){const s=x.method.section;if(!x.isSigned&&INH.has(s))continue;user++;const k=s+'.'+x.method.method;pal[k]=(pal[k]||0)+1;if(x.isSigned){signed++;signers.add(x.signer.toString());}}}
const r={paraId:+id,name,rpc:url,symbol:props.tokenSymbol.toJSON()?.[0],spec:api.runtimeVersion.specName.toString()+'/'+api.runtimeVersion.specVersion.toNumber(),status:'tail',head,head_at:tH&&new Date(tH).toISOString(),oldest_at:tL&&new Date(tL).toISOString(),hours:tL&&((tH-tL)/36e5),blocks,user_tx:user,signed,distinct_signers:signers.size,top_calls:Object.entries(pal).sort((a,b)=>b[1]-a[1]).slice(0,6)};
console.log(JSON.stringify(r,null,1));process.exit(0);
