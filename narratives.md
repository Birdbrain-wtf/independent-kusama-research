# Narratives

**State: draft for challenge. The readings here are ours, and nothing is tested yet.**

A narrative says who a network is for, why anyone would hold its token and what is worth paying for. That sets the shape, and the shape sets the bill. So the working order is narrative, then shape, then cost, with each able to send you back a step.

We don't choose one here. This file records the one in play, how earlier ones worked and how to test a new one. It is partly a lever: KSM holders can declare a narrative and fund it, but nobody can vote people into believing it.

## The one in play: cypherpunk

Kusama Vision is [relaunching as the Cypherpunk Vision Fund](https://forum.polkadot.network/t/19053), one bounty in place of three, focused on privacy, digital freedom, personal sovereignty, art and experiments. Kusama's Governance Coordinator [reports](https://forum.polkadot.network/t/where-does-kusama-go-from-here/18765/9) the likeliest directions as "privacy tools, private payments, censorship-resistant communication, ZK applications, digital freedom and all cypherpunk values". The [JAM Prime proposal paper](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) describes a "cypherpunk digital economy" in which KSM is currency, collateral and access instrument.

We use it as the working narrative because Kusama's own programme has adopted it, not because we've shown it works. It is also a reset. [Make Kusama Chaotic Again](https://forum.polkadot.network/t/11123) argued in December 2024 that Kusama "lacks a fundamentally unique narrative and theme which is independent from Polkadot", and the [same coordinator](https://forum.polkadot.network/t/18765) counts 17 parachains, down from 34 in 2025, with average core use around 27%. A narrative isn't demand, and that gap is what has to be tested.

## How we got here

| When | Story | Kind | Stated or implied | What it asked of people |
| --- | --- | --- | --- | --- |
| 2014 | [Ether sold for bitcoin](https://blog.ethereum.org/2014/07/22/launching-the-ether-sale), [over 25,000 BTC in two weeks](https://blog.ethereum.org/2014/08/08/ether-sale-a-statistical-overview) | Position: a bet | Implied | Bitcoin holders gave up BTC for a stake in the next idea |
| 2014 | [Web 3.0](https://gavwood.com/dappsweb3.html): a zero-trust system for a post-Snowden web | Belief | Stated | Accept that entrusting data to organisations is a broken model |
| 2016 | [The heterogeneous multi-chain](https://assets.polkadot.network/Polkadot-whitepaper.pdf): extensibility and scalability | Technical | Stated | Engineers judge the architecture on its merits |
| From 2016 | Wood and Buterin. Wood [left the Ethereum Foundation in January 2016](https://en.wikipedia.org/wiki/Gavin_Wood) and his whitepaper sets out to fix what it says present-day architectures get wrong | Side | Implied | Holders could treat a design disagreement as a side to take |
| 2019 | [Edgeware's lockdrop](https://github.com/hicommonwealth/edgeware-lockdrop/blob/master/README.md): lock ETH for 3, 6 or 12 months, or only signal a balance, to receive a new token, [with 90% of initial supply handed out this way](https://app.blockworks.com/projects/edgeware/about) | Position: a hedge | Implied | ETH holders kept their ETH and took a position in a network built on Polkadot's technology |
| 2019 | [Kusama, the canary](https://wiki.polkadot.com/general/kusama/kusama-getting-started/): "Expect Chaos", with KSM claimable by Polkadot sale participants | Identity and technical | Stated | Run real value on riskier code first |
| 2024 | [Make Kusama Chaotic Again](https://forum.polkadot.network/t/11123): home of the original cypherpunk movement | Belief and identity | Stated | Build and show up |
| 2025 | [#498](https://kusama.subsquare.io/referenda/498): 10 million DOT, and "an experiment-centric peer network of Polkadot" | Use | Stated | Holders drop the canary role |
| 2025 | [#573](https://kusama.subsquare.io/referenda/573): a lightweight and independent JAM | Technical and side | Stated | Holders choose separation |
| 2026 | [Cypherpunk Vision Fund](https://forum.polkadot.network/t/19053) and a [cypherpunk digital economy](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md) | Belief and use | Stated | Open |

"Bet", "hedge" and "side" are our words. None of those sources frames itself that way. The difference between the first two matters: a bet gives up one asset for another, and a hedge keeps the first and adds exposure to the second. They attract different holders with different patience.

## Six kinds

| Kind | Question it answers | Who it speaks to | How to test it |
| --- | --- | --- | --- |
| **Belief** | Why should this exist? | People who share the values | What do they do differently because of it? |
| **Side** | Who am I with, and against whom? | Holders and tribes | Does anyone still see a contest? |
| **Position** | What am I risking, and against what? | Holders of another token | Do they act, and do they stay? |
| **Technical** | What does it do better? | Engineers | Can it be measured against the alternative? |
| **Identity** | What kind of place is this? | Contributors | Do people turn up without being paid? |
| **Use** | What can I do with it today? | Users | Do people use it, and would they pay? |

A strong narrative usually combines several. Early Polkadot had belief, a technical case and an implied side, each speaking to a different audience. The cypherpunk narrative is strong on belief and identity so far, and it has yet to show use.

## Five scales

The same narrative says something different at each scale, and someone different decides it.

| Scale | The question | The cypherpunk reading | Who decides |
| --- | --- | --- | --- |
| **Industry** | What is wrong with the internet? | Surveillance and control | Nobody here |
| **Ecosystem** | How does this relate to Polkadot, Ethereum and Bitcoin? | Open. Privacy peers such as Zcash are [named in the forum](https://forum.polkadot.network/t/11123/43), and Polkadot is the host in one route and a peer in another | KSM holders, and DOT DAO where it is a party |
| **Network** | What is Kusama, and who controls it? | The fund's brief speaks of personal sovereignty, which raises the question of how independent the network itself needs to be | KSM holders |
| **Application** | What gets built first? | Private payments, ZK applications, censorship-resistant communication | The Vision programme and builders |
| **Token** | What is KSM for? | Currency, collateral and access in one proposal. Otherwise open | KSM holders |

## What it changes in the bill

| If the narrative says | Then ask | Where it lands |
| --- | --- | --- |
| Private by default | What does proof verification need, and does it run as a chain or a service? | The "What runs" decision in [`network-shapes.md`](network-shapes.md). Not yet an item in [`work-breakdown.csv`](work-breakdown.csv) |
| Censorship-resistant | How many independent operators is enough, and who are they? | Seats and pay in [`assumptions.csv`](assumptions.csv), the [survey](survey-v1.md) |
| Sovereign | Which dependencies can Kusama carry itself, and for how long? | Inheritance tests in [`engineering.md`](engineering.md) |
| Reaches other networks | Which ones, for what, and does it preserve privacy? | The bridging job in [`engineering.md`](engineering.md) |
| A cause worth working for | Does purpose change who takes up the package? | The package test in [`engineering.md`](engineering.md) |
| Legally exposed | What body, in what jurisdiction, can hold funds for privacy work? | The legal body line in [`assumptions.csv`](assumptions.csv) |

A narrative never changes the KSM price in this model. That stays [external](assumptions.csv). It can change who holds KSM and why, and we have no way to measure that yet.

## Give us a version

Whatever you think the narrative should be, cypherpunk or not, these are the questions that would make it testable:

1. Who is it for, by name or by type?
2. What would they do on Kusama next year that they can't do elsewhere?
3. Why would they hold KSM rather than only use it?
4. Which of the six kinds is it strongest in, and which is missing?
5. What would it need that isn't in [`work-breakdown.csv`](work-breakdown.csv)?
6. Does it still work if KSM's price doesn't rise?
7. What would show within a year that it isn't working?

Open an issue. We are [not neutral](README.md#who-we-are), so check our readings with that in mind.
