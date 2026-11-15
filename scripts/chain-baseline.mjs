// Read staking pay from the chain, so nobody has to take our word for it.
// Usage: node chain-baseline.mjs <usd-per-token> [kusama|polkadot]
import { ApiPromise, WsProvider } from '@polkadot/api';

const NETWORKS = {
  kusama: { rpc: 'wss://asset-hub-kusama-rpc.n.dwellir.com', decimals: 12, symbol: 'KSM', erasPerYear: 1460 },
  polkadot: { rpc: 'wss://asset-hub-polkadot-rpc.n.dwellir.com', decimals: 10, symbol: 'DOT', erasPerYear: 365 },
};
const price = Number(process.argv[2]);
const net = NETWORKS[process.argv[3] ?? 'kusama'];
if (!price || !net) { console.error('usage: chain-baseline.mjs <usd-per-token> [kusama|polkadot]'); process.exit(1); }

const unit = 10 ** net.decimals;
const api = await ApiPromise.create({ provider: new WsProvider(net.rpc, 2500, {}, 170000), noInitWarn: true });
const q = api.query;
const header = await api.rpc.chain.getHeader();
const era = q.staking.activeEra ? (await q.staking.activeEra()).toJSON().index : null;
const ref = era - 1;

const prefs = await q.staking.erasValidatorPrefs.entries(ref);
const commission = Object.fromEntries(prefs.map(([k, v]) => [k.args[1].toString(), v.commission.toNumber() / 1e9]));
const sorted = Object.values(commission).sort((a, b) => a - b);
const pct = (p) => sorted[Math.floor(sorted.length * p)];

const rewards = [];
for (let e = era - 8; e < era; e++) rewards.push(Number((await q.staking.erasValidatorReward(e)).toString()) / unit);
const eraReward = rewards.reduce((a, b) => a + b, 0) / rewards.length;
const perYear = eraReward * net.erasPerYear;

const points = await q.staking.erasRewardPoints(ref);
const individual = points.individual.toJSON();
const total = Number(points.total);
let weighted = 0;
for (const [who, p] of Object.entries(individual)) weighted += (p / total) * (commission[who] ?? 0);

const seats = sorted.length;
// Polkadot's Ref 1909 set maximum commission to 0 and pays operators a separate self-stake incentive.
const incentiveRaw = q.staking.erasValidatorIncentiveBudget ? await q.staking.erasValidatorIncentiveBudget(ref) : null;
const incentivePerEra = incentiveRaw ? Number(incentiveRaw.toString()) / unit : 0;
const operatorPerYear = perYear * weighted + incentivePerEra * net.erasPerYear;
const supply = Number((await q.balances.totalIssuance()).toString()) / unit;
const staked = Number((await q.staking.erasTotalStake(ref)).toString()) / unit;
const perSeatMonthUsd = (perYear / seats) * price / 12;

console.log(JSON.stringify({
  network: process.argv[3] ?? 'kusama',
  read_at: new Date().toISOString(),
  asset_hub_block: header.number.toNumber(),
  era_read: ref,
  assumptions: { usd_per_token: price, eras_per_year: net.erasPerYear },
  seats,
  seats_with_points: Object.keys(individual).length,
  commission: { p10: pct(0.1), median: pct(0.5), p90: pct(0.9), points_weighted: +weighted.toFixed(4), seats_at_100pct: sorted.filter((c) => c >= 0.999).length },
  reward_per_era: +eraReward.toFixed(2),
  operator_incentive_per_era: +incentivePerEra.toFixed(2),
  reward_per_year: Math.round(perYear),
  supply: Math.round(supply),
  staking_issuance_share_of_supply: +(perYear / supply).toFixed(4),
  staked: Math.round(staked),
  usd: {
    all_staking_pay_per_seat_month: Math.round(perSeatMonthUsd),
    operator_share_per_seat_month_at_median_commission: Math.round(perSeatMonthUsd * pct(0.5)),
    commission_pot_per_year: Math.round(perYear * weighted * price),
    operator_income_per_seat_month_average: Math.round((operatorPerYear / seats) * price / 12),
    staked_value: Math.round(staked * price),
    cost_to_control_a_third_of_stake: Math.round((staked * price) / 3),
  },
}, null, 2));
await api.disconnect();
