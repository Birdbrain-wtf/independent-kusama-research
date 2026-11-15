// The current coretime sale, who holds a core now, and the renewal price recorded for each core.
// Usage: node coretime-sale.mjs [rpc]
import { ApiPromise, WsProvider } from '@polkadot/api';
const a = await ApiPromise.create({ provider: new WsProvider(process.argv[2] ?? 'wss://kusama-coretime-rpc.polkadot.io', 2500, {}, 60000), noInitWarn: true });
const sale = (await a.query.broker.saleInfo()).toJSON();
const held = {};
for (const [, v] of await a.query.broker.workload.entries()) for (const e of v.toJSON()) if (e.assignment.task != null) held[e.assignment.task] = (held[e.assignment.task] ?? 0) + 1;
const renewals = (await a.query.broker.potentialRenewals.entries())
  .map(([k, v]) => ({ when: k.args[0].when.toNumber(), price: Number(v.toJSON().price) / 1e12, tasks: (v.toJSON().completion.complete ?? []).map((x) => x.assignment.task) }))
  .filter((r) => r.when === sale.regionEnd);
console.log(JSON.stringify({ sale, held, renewals, sum: renewals.reduce((t, r) => t + r.price, 0) }, null, 1));
process.exit(0);
