# Network shapes

**State: draft for challenge. Nothing here is priced yet.**

You cannot price "an independent Kusama" until you say which one. The same network can carry five chains or one, with separate fleets or with validators doing everything, at 96 seats or 300. Each choice moves the bill. So shape and cost get worked out together: demand and a budget ceiling narrow the shapes, and rough costs narrow them again before anyone is asked for a firm quote.

Shapes are built from levers, the things KSM holders can choose. They are costed against things nobody here chooses, above all the KSM price. Every input and its label is in [`assumptions.csv`](assumptions.csv), and any figure below is an assumption until someone outside has checked it.

Shape also depends on what the network is for, which is what [`narratives.md`](narratives.md) covers.

## Five decisions

| Decision | Options | How hard to change | Whose work |
| --- | --- | --- | --- |
| **Base layer** | Own JAM or JAM Prime | Very hard | [#573](https://kusama.subsquare.io/referenda/573), [#676](https://kusama.subsquare.io/referenda/676), [#671](https://kusama.subsquare.io/referenda/671) to [#674](https://kusama.subsquare.io/referenda/674) |
| **What runs** | Five chains, some merged, or one, then native services | Each merge or split moves state | This work |
| **Who runs it** | Separate fleets, or validators who also collate and serve | Pay rule and operator tooling | Polkadot's [metanode work](https://forum.polkadot.network/t/18689), read across here |
| **How big** | Cores and validator seats | A governance parameter today. On JAM, possibly a node upgrade (item S8 in [`work-breakdown.csv`](work-breakdown.csv)) | [Robert Hambrock's reports](https://hambro.ch/kusama/set-reductions/coretime/), [Virto's reduction plan](https://forum.polkadot.network/t/17141) |
| **How it grows** | The order of steps, and what triggers each | Set in advance | This work |

A chain is one way of doing a job, so each one has to justify itself by the job. Asset Hub holds balances, staking and governance. Bridge Hub reaches other networks. People holds identity. Coretime sells capacity. Encointer runs community currencies and proof of personhood.

Set reductions and chain merges answer the same question at different layers. A reduction changes a number on chains that stay as they are. A merge rewrites what the chains are and moves their state, so it costs more and carries more risk. We use [Hambrock's proposed schedule](https://forum.polkadot.network/t/17141/10) for the size decision and do not repeat it.

## The shapes

| Shape | What runs | Who runs it | Day-one size |
| --- | --- | --- | --- |
| **A. Carry everything** | Five system chains as they are: Asset Hub, Bridge Hub, People, Coretime, Encointer | Validators, plus separately funded collators and RPC | Costed at 8 and 32 cores |
| **B. Metanode** | Five system chains as they are | Validators also collate and serve | Costed at 8 and 32 cores. Hardware a seat estimated at US$291-626 a month ([M12](assumptions.csv)) |
| **C. Consolidate, then scale** | Signposted, not designed: consolidate infrastructure to fit demand and/or utility, then scale up and out | Open | Follows demand and/or utility |
| **Reference: JAM Prime** | Five chains at 8 cores. "Reduced or consolidated" below 7. Other parachains, Kreivo included, get initial footprint and no guaranteed cores | Polkadot's validators. Collators not stated | 8 cores |

Native JAM services (shape D in [`operating-models.csv`](operating-models.csv)) stay on watch and are not costed. No Kusama design exists to price.

Anyone can propose another shape. One with a named sponsor gets costed.

These are not one-off choices. We treat this as a phased transition, where cores, seats, chains and who operates them change in steps from what Kusama uses today, so routes should be compared as sequences with each step costed.

## Kreivo

The five chains above are system chains. [Kreivo](https://kreivo.com), Virto's parachain, is not, but it belongs in this comparison. Its job is running communities: membership, governance and passkey sign-in. [The chain reports KSM as its token](data/kreivo-2026-11-05.json), and a membership costs about 0.30 KSM. [Across 2026](https://hambro.ch/kusama/set-reductions/coretime/) it has been the largest user of Kusama's cores, averaging 9.1 producing cores and peaking at 12.2 in March, though it used about 1 in the 28 days to 25 October. Producing overstates use, as set out below.

None of [JAM Prime's four options](https://github.com/sdfinst/publications/blob/da60fe67d9c8b13b04bf3af6dab5c49be0625fe1/content/articles/kusama-jam-prime-infrastructure-decision/index.md) guarantees it a core. At 8 cores, 1 is left "before further reservations", and KSM governance decides who gets it. At 6, 4 and 2, the system chains themselves have to be adapted to fit. What the paper offers parachains is initial footprint, which is not execution capacity, and two routes: buy separate coretime "where technically supported", or move to Polkadot "under its applicable access terms". [The earlier proposal](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) says the endowment should carry no standing commitment to non-system parachains. So a chain whose main token is KSM, and which has used more core-time than any other this year, stays only on terms nobody has written yet.

Shapes A and B don't settle this either. At 8 cores they face the same limit, and at 32 there is room on recent use. The route for non-system parachains is item S4 in [`work-breakdown.csv`](work-breakdown.csv), and it isn't written.

We have an interest here. Birdbrain's members hold their membership on Kreivo, and Birdbrain holds one of the 18 seats on its collective.

## The other parachains, with Asset Hub beside them

Kreivo isn't alone in this. JAM Prime offers every non-system parachain the same thing: initial footprint, no guaranteed core, and the same two routes at prices nobody has set. That doesn't mean they stop working. It means nobody has written the terms they would keep working on.

What differs is what each would be leaving. Most have their own token, and several began as the Kusama sibling of a Polkadot chain ([Karura and Acala](https://parachains.info/details/karura), [Shiden and Astar](https://parachains.info/details/shiden), [Basilisk and Hydration](https://docs.bsx.fi/parachains), [Quartz and Unique](https://unique.network/quartz/), [Amplitude and Pendulum](https://pendulumchain.org/amplitude)). [Bifrost](https://parachains.info/details/bifrost) runs on both already. For those teams, moving to Polkadot is a known kind of move, with their own token going with them. Kreivo has no token to take. It uses KSM and keeps its own origin, each community's included, so it depends on what happens to KSM as well as on finding somewhere to run.

The paper's count is already out of date. It lists [12 other parachains on 34 cores](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), from a September inventory, without naming them. [On 5 November](data/parachain-demand-2026-11-05.json) 10 held 21 cores, and 10 of those cores were one test parachain.

### What each chain carried

Every chain holding a core today, counted over one day, 4 November 2026 UTC. Core-time shares are [Hambrock's](https://hambro.ch/kusama/set-reductions/coretime/), for 2026 and for the 28 days to 25 October. Market caps are CoinGecko's, read on 5 November. All of this is measurement, none of it is a lever, and one day is thin.

| Chain | Token | Cores | Core-time, 2026 / 28 days | Transactions | Signers | Token market cap |
| --- | --- | --- | --- | --- | --- | --- |
| **Asset Hub** | KSM | 3, reserved | 7.8% / 12.0% | 1,940 | 276 | US$62.1m, all of KSM |
| Bridge Hub | KSM | 1, reserved | 2.8% / 4.0% | 3,680, all one relayer | 1 | |
| Coretime | KSM | 1, reserved | 2.8% / 4.0% | 4 | 2 | |
| People | KSM | 1, reserved | 2.8% / 4.0% | 3 | 2 | |
| Encointer | KSM | 1, reserved | 2.8% / 4.0% | 1 | 1 | |
| **Kreivo** | KSM | 1 | 25.1% / 4.0% | 14, all calls to one contract | 1 | |
| Karura | KAR | 1 | 2.8% / 4.0% | 514, of which 473 price-oracle feeds | 14 | US$1.09m |
| Shiden | SDN | 1 | 2.8% / 4.0% | 6 | 4 | US$0.47m |
| Curio | CGT | 1 | 2.7% / 3.9% | 0 | 0 | US$0.10m |
| Basilisk | BSX | 3 | 5.5% / 12.0% | 0 | 0 | US$0.25m, quote from June |
| Acurast Canary | cACU | 1 | 2.8% / 4.0% | 306 in 17 minutes, nearly all device heartbeats | 301 | No quote |
| Bifrost | BNC | 1 | 2.8% / 4.0% | 2 in 27 minutes | 1 | US$0.35m, shared with Polkadot's Bifrost |
| Quartz | QTZ | 1 | 0.3% / none | Not counted | | No usable quote |
| Amplitude | AMPE | 1 | 0.7% / none | Not counted | | No quote |
| YAP test parachain | | 10 | 22.8% / 36.1% | Not counted | | |

The Acurast and Bifrost nodes keep only recent blocks, so those two rows cover what they still held. Quartz and Amplitude's listed endpoints didn't connect. Eleven chains produced earlier in 2026 and little or nothing in those 28 days, Quartz and Amplitude among them, and the others are Moonriver, Robonomics, Kintsugi, Crust Shadow, Krest, DAO IPCI, Kabocha, Altair and Darwinia Crab. The last Moonriver block we could read is from 10 August, around [Moonbeam's move to Base](https://github.com/nuthatch-org/graph-support/issues/14), and MOVR still has a market cap of about US$12.5m, so a token's price says little about use of its chain.

Taken together, Kreivo, Karura, Shiden, Curio and Basilisk carried 534 transactions that day, and 473 were Karura's oracle feeds. That leaves 61 from everyone else, against 1,940 on Asset Hub. Acurast is the exception. If its 17 minutes hold across a day, that is about 26,000 heartbeats from its devices, more than every other chain here combined.

Asset Hub is the incumbent, and the Fellowship maintains it, yet it isn't busy either. Its largest calls were batches (910, not opened here), staking payouts (285), staking housekeeping (132) and election submissions (128). Direct balance transfers were 87. Its job is holding balances, staking and governance, so a transaction count understates it, which is why this needs state size and value held (item D1) as well.

### What they pay

[The current sale](data/parachain-demand-2026-11-05.json) sold 22 of the 132 cores offered, at the [1 KSM floor set in the runtime](https://github.com/polkadot-fellows/runtimes/blob/main/system-parachains/coretime/coretime-kusama/src/coretime.rs) and renewal prices up to about 1.6 KSM. Ten of the 22 went to the test parachain. So every parachain together paid 22 to 28.4 KSM for 28 days. At 13 sales a year and KSM at US$2.48 (25 November), an assumption the market sets, that is about US$700 to US$900 a year. Kreivo also spent [172.92 KSM on on-demand cores](https://hambro.ch/kusama/set-reductions/coretime/) in 2026, as the only buyer. System chains pay nothing, since their cores are reserved by governance.

A core-year costs about US$32 to US$52 at those prices. JAM Prime's reference is [US$108,000](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md). Neither figure is a market price: the floor is a setting KSM holders could change, and the US$108,000 rests on the untested US$3,000 a seat. But "buy separate coretime" is a very different offer at the second number than the first, and shapes A and B face the same question once they have to charge what a core costs.

### What this does and doesn't show

It cuts against us as well. Kreivo produced 41,877 blocks and carried 14 transactions on the day we counted, and Basilisk's 3 cores carried nothing. That supports [JAM Prime's position](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) that non-system hosting needs a demand case. It applies equally to independence: no shape here is paid for by today's parachains, so whichever one is chosen has to say who it is for.

One day badly misreads Kreivo, though. [Sampling its history](data/kreivo-history-2026-11-05.json) gives roughly 360,000 transactions from May to August 2026, about 200,000 of them in July. In the blocks we decoded, one key was creating accounts and moving small balances and a stablecoin. Even at that peak about 96% of blocks were empty, so its lead in core-time is still mostly block production, but the use was real. It had almost stopped by September. Then on 3 November, the day before our count, 461 batches in 49 minutes paid out about 115,000 accounts, most of which closed, to an account that also appears in that earlier account creation. So a large user was there and is now largely gone from the chain. The chain doesn't say why, and whatever it does elsewhere doesn't show here. Item S4 is where that user's answer would go.

It is one day. Encointer's activity clusters around its ceremonies, a day can miss a monthly job, and a transaction count says nothing about value moved. Item D4 in [`work-breakdown.csv`](work-breakdown.csv) replaces this with a rolling 28 days, and the [scripts](scripts/) are there so anyone can run another day and correct us. Parachain teams know their own demand better than a block count does, and item S4 is where their answers go.

## C is signposted, not specified

C marks one strategic route: consolidate infrastructure to fit demand and/or utility, then scale up and out. We are not proposing a design for it here, so it has no chain list, no size and no price.

A and B get costed now. C joins them only when someone proposes a design with a named sponsor. Until then it has no price, so it can't be compared with anything.

Any design for C would be costed over the same five years as a series of steps, cheapest first: more cores through elastic scaling, more validator seats, splitting a function back out, then adding new chains or services. Each step needs a price, a trigger and someone responsible. C wins only if consolidating plus the likely steps costs less than carrying five chains throughout.

## Questions any design for C has to answer

- **What can merge at all?** Parity [has said](https://forum.polkadot.network/t/10421/7) the plan is not to drop Bridge Hub, which tracks the other network's consensus. That was about the route in use then. Whether Kusama needs the chain depends on how it chooses to reach other networks, which [`engineering.md`](engineering.md) sets out. Encointer has its own community and may not belong in a merge.
- **What does it save?** Most system chains hold one core, but a producing core only needs one block a day. If those blocks are nearly empty, merging frees cores without adding much load. If they are not, the merged chain needs those cores back. Nobody has published this.
- **What does it stop inheriting?** Kusama's system runtimes sit in [`polkadot-fellows/runtimes`](https://github.com/polkadot-fellows/runtimes) beside Polkadot's. A merged Kusama chain would be Kusama's own to maintain. Fewer runtimes and more divergence pull the maintenance bill in opposite directions.
- **What is the blast radius?** One bad upgrade or heavy workload could touch balances, staking, governance, identity and coretime together.
- **When does it happen?** Merging before any move to JAM means one migration at a time, and JAM carries less. Kusama [moved balances, staking and governance to Asset Hub](https://wiki.polkadot.com/learn/how-to/asset-hub-migration) on 7 October 2025, so the method has a precedent, though Parity ran that one.

## This is not only a question for independence

[JAM Prime's decision paper](https://github.com/sdfinst/publications/blob/da60fe67d9c8b13b04bf3af6dab5c49be0625fe1/content/articles/kusama-jam-prime-infrastructure-decision/index.md) leaves consolidation for later at 8 cores. Its 6, 4 and 2 core options sit below its own 7-core baseline and ask the Fellowship to assess "resource sharing, changes in block production, consolidation and use of shared services". At the [US$108,000 a core-year](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), itself built on an untested US$3,000 a seat, each core a merge frees is worth real money on that path too. Any finding on merging should be published for both sides.

## What we measured first

From [Hambrock's coretime report](https://hambro.ch/kusama/set-reductions/coretime/), the 28 days to 25 October 2026:

- 25 cores were producing out of 140 provisioned.
- 9 of the 25 were one test parachain. Without it, 16 were producing: 7 for system chains, 9 for seven other parachains.
- Across 2026 the two largest users were Kreivo and that test parachain, averaging about 9 and 8 cores. The highest day outside the load tests was 47, in March.

Producing overstates use, because one block in a day counts. These are relay chain cores too, and JAM cores do not map one to one.
