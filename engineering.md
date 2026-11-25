# What the engineering would cost

Engineering has no number yet, and we haven't assumed one. It stays out of every total until the tests below have been run.

Part of this research is working out what that number is made of, in this order:

1. Identify the jobs to be done.
2. Cost and resource each job: how much of it Kusama would inherit from Polkadot, what the rest takes, who can do it and what would bring them on.
3. Let that set the budget, the requirements and the talent needed.

So we cost jobs, not tools. The team or tool doing a job today is evidence about that job, and nothing here assumes Kusama keeps it. [`work-breakdown.csv`](work-breakdown.csv) says what every line is for.

## What other people have stated

These are budgets stated for other scopes. None of them is a Kusama team, and none is added to a total.

| The job | Who does it, and for whom | People | Cost a year | Per person a year | What the money buys | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Moving assets and messages between Polkadot and Ethereum, Base, Optimism and Arbitrum | Snowbridge, for Polkadot | 2 full-time, plus a part-time lead reviewer | US$364,200: US$250,000 engineering, US$50,000 company margin, US$64,200 infrastructure including US$35,000 of Ethereum gas | US$113,004, before the margin | Upkeep of a bridge that already exists, with the hours set out below. Its authors call the rates far below market. A bug bounty, message relayers and the front end are outside it | [Polkadot Ref 1881](https://polkadot.subsquare.io/referenda/1881) |
| Improving the protocol software Polkadot and Kusama share | Gossamer at ChainSafe, working with Parity, for Polkadot | 9 full-time | US$1.63m, from US$815,358 for six months | US$181,190 at US$94.37 an hour, with tooling, operations and taxes included | Seven areas of `polkadot-sdk`: approval-checking rewards, parachain upgrades, dependency size, browser light clients, speculative availability, chaos testing and DDoS protection, and smart contract tooling. Salaries stated as below US$150,000 | [Polkadot Ref 1699](https://polkadot.subsquare.io/referenda/1699) |
| Maintaining, reviewing and releasing the runtimes and protocol | Technical Fellowship, for Polkadot and Kusama together | 98 members, 32 of them rank 3 or above | At most about US$3.56m if every member were active | US$80,000 to US$200,000 at ranks 3 to 6 and above | We don't know who is active, and [some members are also paid elsewhere](https://forum.polkadot.network/t/2025-q3-polkadot-treasury-report/16001/6). Last monthly figure we found is US$92,080, for December 2024 | [Ref 1931](https://polkadot.subsquare.io/referenda/1931), [member list](https://collectives.subsquare.io/fellowship/members) read on 5 November 2026 (`data/fellowship-ranks-2026-11-05.json`), [2024 treasury report](https://forum.polkadot.network/t/2024-polkadot-treasury-report/11658) |
| Writing node software for JAM | A JAM client team | Not stated | Not stated | Above about US$60,000 to US$67,000 | One builder says about US$200,000 doesn't cover two senior engineers for 18 to 20 months. This is a floor at most | [Forum topic 16229](https://forum.polkadot.network/t/ensuring-jam-development-sustainability-is-it-time-for-a-dedicated-jam-bounty-program/16229) |

So the cash rates we can find run from about US$113,000 to US$181,000 a person, and the low end leaves out a 20% company margin that the high end's all-in rate includes. Team size is the wider gap. Keeping one connection to Ethereum takes 2 people and one team on shared protocol work takes 9, and neither says what Kusama needs. At 2.4% issuance and KSM at US$2.48 on 25 November, both assumptions, issuance pays about US$1.1m, so one team of that size and price would cost more than all of it. At the US$3.49 of our 4 November chain read it paid about US$1.6m.

## What a contributor weighs

The budgets above are cash, and cash is one part of what someone weighs up before taking on this work. Most of the package is Kusama's to design, so the cost per person is partly a choice and belongs with the levers in [`assumptions.csv`](assumptions.csv).

| Part of the package | Who sets it | What it costs, and who carries it |
| --- | --- | --- |
| Purpose: what the project is for, and whether someone wants to give it their time | The project, by what it does. It can't be declared | No budget line, and it can't be assumed |
| Salary | Kusama, within what people will accept | Cash from the pot, every year |
| Bonuses | Kusama | Cash from the pot, when earned |
| Token or equity upside | Kusama, or whichever body holds and grants it | No cash today. Holders carry it as dilution, and what it's worth depends on the outcome |
| What they could earn elsewhere | Other employers | Nothing directly. It's what the rest gets weighed against |

The references hint at this and no more. Snowbridge's authors call their engineering costs far below market rates, and some Fellowship members are also paid elsewhere. Neither source says why, so a low figure could mean purpose, other income or a rate that won't last. Upside can also lower the cash bill without lowering the cost, so any figure has to show both.

## One job worked through: reaching Ethereum

The job is moving assets and messages between Kusama and Ethereum, its L2s and other EVM networks. Snowbridge is how that happens today, and Kusama doesn't run it. The code sits in [Polkadot's Bridge Hub](https://github.com/polkadot-fellows/runtimes/tree/main/system-parachains/bridge-hubs/bridge-hub-polkadot), and [Kusama's Bridge Hub](https://github.com/polkadot-fellows/runtimes/tree/main/system-parachains/bridge-hubs/bridge-hub-kusama) has only the link to Polkadot. A transfer from Kusama crosses the [Polkadot-Kusama bridge](https://wiki.polkadot.com/learn/learn-dot-ksm-bridge/) first, and Polkadot's treasury funded Snowbridge's budget. So US$364,200 isn't a bill Kusama pays now, and it isn't one Kusama would automatically take on.

We found no written plan for this route once Kusama runs on its own JAM, and our own [paper](https://github.com/Birdbrain-wtf/publications/blob/main/content/articles/independent-kusama-fifth-option/index.md) doesn't address it. These are the ways of doing the job that we know of. Tell us about others.

| Route | Reaches | What you have to trust | State | Who pays today |
| --- | --- | --- | --- | --- |
| Stay on Polkadot's: the Polkadot-Kusama bridge, then Snowbridge | Ethereum. Whether Kusama also reaches Polkadot's L2 routes this way, we haven't checked | Light clients on chain, with no intermediary, and Polkadot continuing to run and fund both | Live | Polkadot's treasury for Snowbridge. [Relayer rewards](https://wiki.polkadot.com/learn/learn-dot-ksm-bridge/) come from the sending chain |
| Kusama runs its own light-client bridge | Whatever it builds | The same kind of on-chain verification, with Kusama carrying the upkeep | Not built, no proposal found | Nobody |
| [Hyperbridge](https://wiki.polkadot.com/learn/learn-bridges/) | Several networks, on the wiki's account | Proofs, through its own parachain and token | Live on Polkadot. Kusama use not checked | Not checked |
| A trusted reserve bridge, where an operator holds the assets and issues a copy on Kusama | Whatever the operator supports | The operator | Not examined | Whoever operates it |

These don't do the same job equally. The last asks you to trust an operator, in return for not carrying a light client. So the amount of trust people will accept is part of the job, and it needs setting first, along with which assets and networks matter and how much value crosses (item D3 in the work list, not yet measured).

Ref 1881 also shows what the work is for, in 3,750 hours. The last column is our first reading, so please correct it.

| Hours | What they are for | Would another route carry it? |
| --- | --- | --- |
| 700 | Following two Ethereum hard forks | Any route verifying Ethereum on chain |
| 600 | Nodes, test networks and an indexer | Yes, in some form |
| 450 | Keeping tools and tests in step with chain changes | Yes |
| 450 | About six runtime upgrades a year | Any route built into a runtime |
| 450 | Unforeseen requests | Yes |
| 400 | Incidents and security reports | Yes |
| 350 | Monitoring and fixing relayers | Most routes |
| 350 | Contracts on Ethereum, with their review and audit | Yes, with different contracts |

Reaching Polkadot is a separate job (item B8), and JAM Prime's [proposal paper](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) suggests that on a shared platform it may need no bridge at all, an opportunity it says is still to be explored.

## What Kusama's upkeep looks like today

We counted commits to [polkadot-fellows/runtimes](https://github.com/polkadot-fellows/runtimes), where Kusama's runtimes sit beside Polkadot's, for the 12 months to 5 November 2026. Run [`scripts/runtime-commits.sh`](scripts/runtime-commits.sh) to repeat it. The result is in [`data/runtime-commits-2026-11-05.json`](data/runtime-commits-2026-11-05.json).

| Commits that change code | Count |
| --- | --- |
| Touch Kusama paths only | 9 |
| Touch Kusama and other paths | 88 |
| Touch no Kusama path | 54 |

Nearly all the work on Kusama's runtimes is shared with Polkadot today, and 7 people wrote the 9 Kusama-only commits. A commit isn't a measure of effort, and the count leaves out `polkadot-sdk`, clients and everything JAM needs. It does show why the inheritance test matters most: if the shared work stays reusable, Kusama pays for little of it, and if Kusama diverges, an unknown share of those 88 commits becomes Kusama's to do.

## The tests

| Test | Question | How to run it in public | Who can answer | State |
| --- | --- | --- | --- | --- |
| Scope | What jobs exist, split into one-off and recurring? | Person-months for each line of [`work-breakdown.csv`](work-breakdown.csv), from the people who do that work today | Fellowship, JAM client teams, runtime engineers | Not started |
| Route | Which ways of doing each job exist, and what does each ask you to trust? | Options set side by side, as for Ethereum above | Whoever builds or uses them | One job drafted |
| Inheritance | Which work does Kusama get free, and for how long? | Licence and support terms for each dependency, and the commit count above extended to `polkadot-sdk` | Parity, Fellowship | First count only |
| Package | What would bring these people on and keep them: purpose, salary, bonuses and upside? What does each part cost, with taxes and tooling included, and who carries it? | Published budgets as above, what funded teams say drew them, then written quotes | Teams that have been funded, and the people themselves | Four cash references. Nothing yet on the rest |
| Capacity | Do enough people exist, and are they free? | Named people, by skill, with what else they are paid for | The people themselves | Not started |
| Continuity | What is the smallest group that can cover incidents and leave? | A named rota and how past incidents were handled | Fellowship, validators | Not started |

Team size is the output of these tests. A one-off migration team and a permanent maintenance team are separate lines.

## The same questions for JAM Prime

The [JAM Prime proposal paper](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) excludes protocol development from its US$3,000 benchmark, and JAM Prime offers a Fellowship mandate, subject to acceptance. Nobody has stated what that mandate costs or who pays. Every test above applies to that side too, and the results go in the same table.

## Correct it

If you do this work, tell us what we've missed: a line of work, a better reference or a wrong reading of the ones above. Please stick to published figures in issues. Nothing here asks for a quote or a commitment.
