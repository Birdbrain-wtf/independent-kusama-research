// How commission is spread across seats in one era: the average, the middle seat, and the seats charging 100%.
// Usage: node commission-spread.mjs <usd-per-token> <era>
import { ApiPromise, WsProvider } from '@polkadot/api';

const price = Number(process.argv[2]);
const era = Number(process.argv[3]);
if (!price || !era) { console.error('usage: commission-spread.mjs <usd-per-token> <era>'); process.exit(1); }

const unit = 1e12;
const erasPerYear = 1460;
const api = await ApiPromise.create({ provider: new WsProvider('wss://asset-hub-kusama-rpc.n.dwellir.com', 2500, {}, 170000), noInitWarn: true });
const q = api.query;

const rewards = [];
for (let e = era - 7; e <= era; e++) rewards.push(Number((await q.staking.erasValidatorReward(e)).toString()) / unit);
const eraReward = rewards.reduce((a, b) => a + b, 0) / rewards.length;
const usdMonth = (ksmPerEra) => (ksmPerEra * erasPerYear * price) / 12;

const prefs = await q.staking.erasValidatorPrefs.entries(era);
const points = await q.staking.erasRewardPoints(era);
const individual = points.individual.toJSON();
const total = Number(points.total);
const overview = await q.staking.erasStakersOverview.entries(era);
const stake = Object.fromEntries(overview.map(([k, v]) => {
  const o = v.unwrap();
  return [k.args[1].toString(), { own: Number(o.own.toString()), total: Number(o.total.toString()) }];
}));

const seats = prefs.map(([k, v]) => {
  const who = k.args[1].toString();
  const rate = v.commission.toNumber() / 1e9;
  const pay = (eraReward * (individual[who] ?? 0)) / total;
  const s = stake[who];
  const ownShare = s?.total ? s.own / s.total : 0;
  return { rate, commission: usdMonth(pay * rate), ownStake: usdMonth(pay * (1 - rate) * ownShare) };
});

const sum = (a) => a.reduce((x, y) => x + y, 0);
const at = (a, p) => [...a].sort((x, y) => x - y)[Math.floor(a.length * p)];
const whole = (x) => Math.round(x);
const all = seats.map((s) => s.commission);
const full = seats.filter((s) => s.rate >= 0.999).map((s) => s.commission);
const rest = seats.filter((s) => s.rate < 0.999).map((s) => s.commission);

console.log(JSON.stringify({
  network: 'kusama',
  read_at: new Date().toISOString(),
  era_read: era,
  points_from: 'this one era; pay is the mean of the eight eras ending here',
  assumptions: { usd_per_token: price, eras_per_year: erasPerYear },
  usd_per_seat_month: {
    commission_mean: whole(sum(all) / all.length),
    commission_median: whole(at(all, 0.5)),
    commission_p10: whole(at(all, 0.1)),
    commission_p90: whole(at(all, 0.9)),
    reward_on_validator_own_stake_mean: +(sum(seats.map((s) => s.ownStake)) / seats.length).toFixed(2),
  },
  seats_at_100pct: {
    seats: full.length,
    share_of_all_commission: +(sum(full) / sum(all)).toFixed(4),
    commission_mean: whole(sum(full) / full.length),
  },
  other_seats: {
    seats: rest.length,
    commission_mean: whole(sum(rest) / rest.length),
    commission_median: whole(at(rest, 0.5)),
  },
}, null, 2));
await api.disconnect();
