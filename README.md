# Research for an independent Kusama

This work coordinates input from interested parties to reach a publicly auditable strategy, spec, costing and maintenance plan for an independent Kusama. What would it cost, in what shape, and who would do the work? These are working files, published so people can correct them and add to them. Nothing here is a finding yet.

## The question

Kusama's holders have to decide where the network goes as Polkadot moves to [JAM](https://wiki.polkadot.com/learn/learn-jam-chain/). In August 2025 they passed [#573](https://kusama.subsquare.io/referenda/573), which asks for an independent Kusama on a small JAM network of its own. In 2026 the [JAM Prime proposal](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) offered another route: Kusama buys capacity on Polkadot's JAM network and retires its own validators. [#671](https://kusama.subsquare.io/referenda/671) to [#674](https://kusama.subsquare.io/referenda/674) put four versions of that to a vote, and all four were rejected on 3 November 2026. [#676](https://kusama.subsquare.io/referenda/676), which asked for the independent route to be scoped, priced and compared with JAM Prime, was rejected on 18 November. The work goes on here, because the question is still open whichever way holders lean.

Nobody has priced the independent route, and JAM Prime's price leaves out important costs. These files are an attempt to put both in one table.

## One plan, not separate threads

Kusama's future has been worked on in separate places: validator pay and the size of the set, the runtime and who maintains it, the system chains and their collators, the treasury and its bounties, and the story the network tells about itself. Each has mostly been argued on its own, by different people in different threads. An independent Kusama only works if they fit, so this repo puts them in one place and in one order:

1. **What the network is for.** The narrative, and who funds work towards it.
2. **What it has to run.** The spec: which chains and services, at what size.
3. **Who keeps it running.** Validators, collators, RPC, and the engineers who keep the runtime current.
4. **What that costs and how it's paid.** Issuance, outside revenue, and a KSM price nobody here sets.

A change at one step moves every step after it. A fund that backs projects needing coretime changes the spec, a smaller spec changes the engineering bill, and the bill sets how much issuance is needed. JAM Prime has the same links: its payment comes from the Kusama Vision fund, so what Kusama funds and how it pays for capacity are decided from one place there too.

## The narrative

Shape and cost depend on what the network is for, so there's a story to settle before there's a bill. Kusama Vision is [relaunching as the Cypherpunk Vision Fund](https://forum.polkadot.network/t/19053), and we use that as the working narrative without assuming it works. [#680](https://kusama.subsquare.io/referenda/680), deciding on 25 November, would replace the three Vision bounties with that one fund under five curators. One of its four priorities is giving people reasons to use, lock and build with KSM, JAM and coretime. That is the demand this costing hasn't found yet (line F3 in [`work-breakdown.csv`](work-breakdown.csv)), so the fund's choices feed straight into the spec and the bill. Polkadot and Kusama have carried many before it: Web3, Wood and Buterin, the multi-chain case for engineers, Edgeware's hedge for ETH holders, "Expect Chaos". [`narratives.md`](narratives.md) sorts them by kind and scale, sets out what each changes in the bill and asks for your version.

## Who we are

[Birdbrain](https://birdbrain.wtf) is an open-source lab working to reveal the collective intelligence inside distributed networks: what a network's people know, make and decide, recorded so that they can read it, question it and carry it with them. It began as a Kusama proposal in March 2025, [#506](https://kusama.subsquare.io/referenda/506), which never reached a decision, and we built it anyway. Its members hold their membership on [Kreivo](https://kreivo.com), can sign with passkeys on their own devices and work in [Murmur](https://github.com/Birdbrain-wtf/murmur), our open app.

This research is one test of that idea: can a network work out what it needs and what that costs, in the open, from what its own operators and contributors know? Birdbrain also proposed [#676](https://kusama.subsquare.io/referenda/676), one of the routes compared here, so we are not neutral.

Birdbrain is supported by [Decent Partners](https://www.decent.partners), which funds its members' deposits and uses this work in its own costing. Decent's interests, including its token holdings, are listed in the [first post of the #676 thread](https://forum.polkadot.network/t/19047). Check our numbers with that in mind.

## What the numbers say so far

So far we have only figures other people have stated, which we test here until input from the people who would do the work replaces them. All of them are assumptions. At the [JAM Prime paper's US$3,000](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), 96 seats cost US$3.46m a year. At the US$2,000 in [a design proposal for Polkadot](https://forum.polkadot.network/t/19231) for a [metanode](https://docs.polkadot.com/node-infrastructure/run-a-metanode/), which does more than validate, they cost US$2.30m. At [#573](https://kusama.subsquare.io/referenda/573)'s estimate of 2.4% issuance and [KSM at US$2.48](data/ksm-price-12-months-2026-11-25.json) on 25 November, issuance pays about US$1.1m (US$1.6m at the US$3.49 of our 4 November chain read). So on those inputs independence doesn't add up, even before engineering, stakers, migration or audit. The 96 seats are #573's 32 cores at [about 3 validators a core](https://forum.polkadot.network/t/18621), and [`assumptions.csv`](assumptions.csv) shows who sets each input.

The US$3,000 is a budget for one of JAM Prime's validators, and nobody has measured it on a JAM node. Its own table puts US$1,200 on hosting and bandwidth and US$1,800 on labour, tooling and margin. Its hardware line is anchored on a server rented today, and it says production JAM requirements still need validation. The first figure an operator has stated is [Robert Hambrock's US$300 to US$500 a month](https://forum.polkadot.network/t/proposal-discussion-adapting-kusama-to-demand-and-its-jam-future/17141/23) for renting good validator hardware, bandwidth included, on today's relay chain. That is well under the paper's US$1,200, but it covers no labour, and labour is most of the US$3,000. So the model now pays hardware for each seat and the labour once for each operator. That split is our assumption. Kusama today runs about [1.25 seats an operator](data/kusama-operators-2026-11-13.json), and at that rate, with JAM Prime's own figures, 96 seats cost US$3.05m a year. [`model-output.md`](model-output.md) shows the range. What a JAM seat needs in hardware is still open, and the people who test JAM implementations are best placed to say.

Engineering has no number yet. [`engineering.md`](engineering.md) sets out what others have stated and the tests that would produce one. Part of this research is identifying the jobs to be done and costing and resourcing each, which then sets the budget, requirements and talent needed. For scale, [keeping Polkadot connected to Ethereum and its L2s](https://polkadot.subsquare.io/referenda/1881) is a US$364,200 budget with 2 engineers, and [a team of 9 doing shared protocol work](https://polkadot.subsquare.io/referenda/1699) was funded at about US$1.63m a year. Neither is sized for Kusama, and neither assumes Kusama keeps that team or tool.

Those figures don't sit easily with the chain. [Kusama's 700 seats](data/kusama-2026-11-04.json) earn about US$554 a month in total staking pay, most of which passes to the people who stake with them. The operator's commission [averages about US$161 a seat](data/kusama-commission-spread-2026-11-04.json), but 61 seats charging 100% take a third of it. The middle seat gets about US$115, and the middle seat among the other 639 about US$105. Reward on a validator's own bonded stake adds about US$1. None of this counts income from other networks or programmes. Either a seat costs far less than the references, or operators are being subsidised or losing money. Pay alone can't tell us which, and that is what [the survey](survey-v1.md) is for. Robert Hambrock, who runs validators, [puts a seat's commission at about 24 KSM a month](https://forum.polkadot.network/t/proposal-discussion-adapting-kusama-to-demand-and-its-jam-future/17141/23) at the 15% minimum and says a rational operator with one seat is losing money. Most of Kusama's operators run one seat: 521 of 558 on our [13 November read](data/kusama-operators-2026-11-13.json). He also [expects most of them to drop out](https://forum.polkadot.network/t/proposal-discussion-adapting-kusama-to-demand-and-its-jam-future/17141/24) if the set is cut to 300.

JAM Prime has gaps too. [Its US$4.32m](https://github.com/sdfinst/publications/blob/da60fe67d9c8b13b04bf3af6dab5c49be0625fe1/content/articles/kusama-jam-prime-infrastructure-decision/index.md) rests on the same untested US$3,000, [leaves out protocol development and the return on bonded capital](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), and DOT DAO hasn't accepted it. It also needs DOT to hold its value. The payment comes from the Kusama Vision fund and is capped at 5,000,000 DOT, so [it only fits while DOT's 90-day average is at least US$0.864](https://github.com/sdfinst/publications/blob/da60fe67d9c8b13b04bf3af6dab5c49be0625fe1/content/articles/kusama-jam-prime-infrastructure-decision/index.md). That average was [US$1.02 on 13 November](data/dot-price-2026-11-13.json), but DOT was below the line on 16 of those 90 days, as low as US$0.75, and was about US$0.85 that day. If it stays there, the average crosses the line around 23 January 2027. Below the line, the package needs new terms and another KSM vote, or it buys less: at US$0.60, 5,000,000 DOT pays for 28 of the 40 core-years.

## What's here

| File | What it holds |
| --- | --- |
| [`narratives.md`](narratives.md) | The narrative in play, earlier ones by kind and scale, and what each changes in the bill |
| [`network-shapes.md`](network-shapes.md) | The choices that set the bill, the shapes being compared, and what each parachain carries and pays beside Asset Hub |
| [`assumptions.csv`](assumptions.csv) | Every input, who sets it and how far to trust it |
| [`model-output.md`](model-output.md) | What those inputs produce and the references being tested, generated by `scripts/model.mjs` |
| [`work-breakdown.csv`](work-breakdown.csv) | The work to scope, what each line is for, what could be inherited from Polkadot, and who could answer |
| [`engineering.md`](engineering.md) | The jobs, what others have stated for each, and the tests that would replace those with a Kusama figure |
| [`budget-table.csv`](budget-table.csv) | The comparison to fill in, mostly empty so far |
| [`operating-models.csv`](operating-models.csv) | Separate fleets, metanodes, consolidation and native services side by side |
| [`survey-v1.md`](survey-v1.md) | Validator cost survey |
| [`data/`](data/) | Chain, price, commit, parachain and operator reads from 4, 5 and 13 November 2026 |

Where a claim has no public source, the file says "none found". Tell us if you can do better.

## The papers

- **Independent Kusama paper:** [An independent Kusama on a reduced JAM, keeping its validators](https://github.com/Birdbrain-wtf/publications/blob/main/content/articles/independent-kusama-fifth-option/index.md), written by Birdbrain.
- **JAM Prime proposal paper:** [A proposal for a Kusama future on JAM Prime](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), by Emiel Sebastiaan and Arief Ernst of [SDFI](https://sdf.institute), including the US$3,000 benchmark in Appendix B. [Forum thread](https://forum.polkadot.network/t/18683).
- **JAM Prime decision paper:** [Kusama on JAM Prime: the infrastructure decision](https://github.com/sdfinst/publications/blob/da60fe67d9c8b13b04bf3af6dab5c49be0625fe1/content/articles/kusama-jam-prime-infrastructure-decision/index.md), from the same group, behind #671 to #674. [Forum thread](https://forum.polkadot.network/t/19044).

## Terms

- **JAM:** the protocol Polkadot plans to move to, which replaces the relay chain. It has not shipped.
- **Core:** a unit of JAM or relay chain capacity. More cores need more validators.
- **Seat:** one place in the active validator set.
- **System chains:** Kusama's five chains that do the network's own work: Asset Hub (balances, staking, governance), Bridge Hub (reaching other networks), People (identity), Coretime (selling capacity) and [Encointer](https://encointer.org) (community currencies and proof of personhood).
- **Collator:** a node that builds blocks for one of those chains. **RPC:** the public nodes that wallets and apps talk to.
- **[Metanode](https://docs.polkadot.com/node-infrastructure/run-a-metanode/):** a validator that also collates and serves RPC, in place of separately funded fleets. Polkadot's design, [in progress](https://forum.polkadot.network/t/18689).
- **[Parachain Service](https://github.com/paritytech/parachain-service):** Parity's software for carrying existing chains onto JAM.
- **[Technical Fellowship](https://wiki.polkadot.com/learn/learn-polkadot-technical-fellowship/):** the body of protocol developers that maintains the Polkadot and Kusama runtimes.
- **DOT DAO:** Polkadot's token holders, acting through governance. They would be the other side of a JAM Prime deal.
- **Issuance:** new KSM created each year, as a share of supply. It is the main way the network pays for itself today.

## How to read a number

Every number is an assumption until someone outside has checked it. Each input has one of four labels:

- **External:** nobody here sets it, such as the KSM price. Plans can respond to it, but it is never adjusted to make a route work.
- **Lever:** KSM holders can choose it, such as issuance or cores.
- **Limit:** it can only move as far as safety allows, such as validators per core.
- **Measure:** a true value exists and we read or estimate it, such as seat cost.

## Run it

```
node scripts/model.mjs --ksm_price=2.46 --issuance=4 --cores=8 --team_size=2 --engineer_cost=113004 --seat_cost=3000
node scripts/model.mjs --write    # regenerates model-output.md
```

The model has no dependencies. To read the chain yourself, run `npm install` in `scripts/`, then `node chain-baseline.mjs 3.49 kusama`, `node commission-spread.mjs 3.49 10233` and `node operators.mjs kusama`. To repeat the commit count, clone [`polkadot-fellows/runtimes`](https://github.com/polkadot-fellows/runtimes) and run `bash scripts/runtime-commits.sh <path to the clone>`.

## Give input

We want to hear from validators, collators, RPC providers, engineers, KSM holders and anyone else with an interest in how this turns out. Open an issue or a pull request, with a source if you have one. Disagreement is what this is for.

**Please don't post costs in an issue,** yours or another operator's, and nothing about what you plan to charge. Answers go to the survey, as a signed pull request into `answers/` or a private message, under its own rules. Views from people who don't run seats go in `perspectives/`, with your name on them.

Giving input makes nobody a member of anything, earns nothing and commits nobody to any work. Nothing here is a treasury request.

## Licence

Apache-2.0.
