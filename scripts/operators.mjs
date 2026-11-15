// Group the active seats by operator, using on-chain identity on the People chain.
// A seat whose account is a sub-identity counts under its parent; a seat with no identity counts as its own operator.
// Usage: node operators.mjs [kusama|polkadot]
import { ApiPromise, WsProvider } from '@polkadot/api';

const NETWORKS = {
  kusama: { hub: 'wss://asset-hub-kusama-rpc.n.dwellir.com', people: 'wss://people-kusama-rpc.n.dwellir.com' },
  polkadot: { hub: 'wss://asset-hub-polkadot-rpc.n.dwellir.com', people: 'wss://people-polkadot-rpc.n.dwellir.com' },
};
const name = process.argv[2] ?? 'kusama';
const net = NETWORKS[name];
const connect = (url) => ApiPromise.create({ provider: new WsProvider(url, 2500, {}, 170000), noInitWarn: true });

const hub = await connect(net.hub);
const era = (await hub.query.staking.activeEra()).toJSON().index - 1;
const seats = (await hub.query.staking.erasValidatorPrefs.entries(era)).map(([k]) => k.args[1].toString());
await hub.disconnect();

const people = await connect(net.people);
const supers = await people.query.identity.superOf.multi(seats);
const parents = seats.map((s, i) => (supers[i].isSome ? supers[i].unwrap()[0].toString() : s));
const idOf = await people.query.identity.identityOf.multi([...new Set(parents)]);
const hasId = new Set([...new Set(parents)].filter((_, i) => idOf[i].isSome));
await people.disconnect();

const groups = {};
parents.forEach((p) => { groups[p] = (groups[p] ?? 0) + 1; });
const sizes = Object.values(groups).sort((a, b) => b - a);
const identified = Object.entries(groups).filter(([p]) => hasId.has(p));
const operators = sizes.length;
const singles = sizes.filter((n) => n === 1).length;
const bucket = (lo, hi) => sizes.filter((n) => n >= lo && n <= hi).reduce((a, b) => a + b, 0);

console.log(JSON.stringify({
  network: name,
  read_at: new Date().toISOString(),
  era_read: era,
  method: 'Seats grouped by identity parent on the People chain. Seats with no identity count as one operator each, so this undercounts grouping: an operator using unlinked accounts looks like several.',
  seats: seats.length,
  operators,
  seats_per_operator_mean: +(seats.length / operators).toFixed(2),
  single_seat_operators: singles,
  seats_by_operator_size: { one: bucket(1, 1), two_to_five: bucket(2, 5), six_to_ten: bucket(6, 10), over_ten: bucket(11, 1e9) },
  largest_operators_seats: sizes.slice(0, 10),
  operators_with_identity: identified.length,
  seats_with_no_identity: parents.filter((p) => !hasId.has(p)).length,
}, null, 2));
