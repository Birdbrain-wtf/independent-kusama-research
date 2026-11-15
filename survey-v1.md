# Validator cost survey, version 1

**Deadline: 23:59 UTC on Monday 16 November 2026.** Voting on [#676](https://kusama.subsquare.io/referenda/676) closes at about 23:30 UTC on Tuesday 17 November, and we want to publish what comes in before then. Answers after the deadline are still welcome.

## Who is asking
Birdbrain runs this survey. Birdbrain also proposed [#676](https://kusama.subsquare.io/referenda/676), one of the routes compared here, so we are not neutral. Seat cost matters on every route, JAM Prime included. Our interests are listed in the [first post of the #676 thread](https://forum.polkadot.network/t/19047).

Use what you actually spent over the last three months, in US dollars, for one Kusama seat. If you run several seats, give the average a seat, and put costs the whole operation carries however many seats it runs in question 12. An unpaid hour counts too, so tell us the hours.

The cost lines match [Appendix B of the JAM Prime proposal paper](https://github.com/sdfinst/publications/blob/a445bba7ab5a801e3b85168551dfa8b1e5021bc2/content/articles/proposal-kusama-future-jam-prime/index.md), so the answers can sit directly beside its US$3,000. The references today are that US$3,000 and the US$2,000 in [a design proposal for Polkadot](https://forum.polkadot.network/t/19231) for a [metanode](https://docs.polkadot.com/node-infrastructure/run-a-metanode/). Neither has been tested on Kusama.

## About your operation
1. How many Kusama seats do you run? 1, 2-5, 6-20, more than 20
2. Do you also run validators on other networks? Which?
3. Which region are the machines in?
4. Owned and colocated, rented dedicated, cloud, or at home?
5. Solo, small team, or company?

## What a seat cost you each month
6. Primary compute and storage
7. Extra bandwidth, backups, standby machines
8. Technical operations: hours a month, and whether those hours are paid
9. If paid, the hourly cost. If unpaid, the hourly figure you think is fair
10. Monitoring, security tooling, administration
11. Anything else, including what you set aside for failures
12. Costs the whole operation carries however many seats it runs: people, tooling, legal and accounting, each month
13. What share of these costs is shared with seats on other networks?
14. How sure are you? Figures from invoices, a rough estimate, or a guess

## What pays for it
15. Share of the seat's costs met by each: Kusama commission, reward on your own stake, income from other networks, a programme or sponsor, your own pocket, other
16. Over the last twelve months, did the seat cover its costs?

## What it would take
17. Which of these would you do on a JAM network? Keep today's machine, upgrade, replace, stop
18. Would you take part in a public test network? Unpaid, paid only, no
19. At what yearly hardware outlay would you stop?
20. Do you run collators or public RPC on Kusama today? What does each cost you a month?
21. Which would you run alongside your validator: Asset Hub, People, Coretime, Bridge Hub, Encointer or Kreivo collators, collators for any other chain we haven't named, or RPC? What monthly payment would you need for that set?
22. If Kusama consolidated its infrastructure onto fewer chains to fit demand and/or utility, would you run their collators and RPC with your validator?
23. If Kusama kept far fewer than today's 700 seats, would you stay in the running?
24. What should we have asked?

## Your answers
There are two ways to answer. Public and signed is better, because anyone can check it.

**Public: a pull request.**
1. Copy [`answers/TEMPLATE.md`](answers/TEMPLATE.md) to `answers/<your-name>.md` and fill it in.
2. Take its SHA-256 hash, for example `sha256sum answers/<your-name>.md`.
3. Sign that hash with your stash, or with an account whose on-chain identity names your validators. In [Polkadot.js Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.publicnode.com#/signing) that is Developer, then Sign and verify.
4. Put the account and the signature in `answers/<your-name>.sig`, one per line, and open a pull request with both files.

Anyone can then hash the file again and check the signature in the same tool. We merge a pull request once the signature checks out and the account is linked to a Kusama seat. A file you publish this way is public as soon as you open the pull request, so the five-operator rule below does not cover it.

**Private: a forum message.**
- Send your answers as a private message to [@birdbrain](https://forum.polkadot.network/u/birdbrain) on the Polkadot forum, and say whether they are **named** or **aggregate only**.
- Named answers can come straight away. Aggregate-only answers wait until two people outside Birdbrain and Decent hold them, so we cannot read them alone. If you want to answer that way, tell us and we will come back to you when they can.
- Only figures from at least five operators are published. Smaller groups are merged or left out.

When we publish, we say how many answers were public and signed and how many were private.

**For everyone**
- We ask for actual past costs. Please do not tell us what you plan to charge, or anything about another operator.
- You can withdraw until the results are published, and afterwards from any named listing. A merged pull request stays in the repository's history, so we can take your file out of the totals but cannot erase it.
- Taking part makes nobody a member of anything and earns nothing.
