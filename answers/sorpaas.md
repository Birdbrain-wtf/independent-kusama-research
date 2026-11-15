# Answers from `sorpaas`

We don't run any validator operations, so we unfortunately can't answer most of the questions, but we do want to provide a perspective from a developer's point of view.

The thing is, there are a lot of PoS networks with "much more dead" economics than Kusama, and they function just fine.

The key point is, an independent Kusama would pay its costs in KSM, not USD. And that gives you a lot of flexibility in the operations without caring about the actual validator costs in USD.

You can always run the network really cheap:

* You can do JAM variable validators. As little as 6 validators for 2 cores. Simplifying the consensus to PoA (because you only have 6 validators anyway). The whole network then costs practically very low and stays secure.
* You can choose not to run the full JAM. Polkadot likely can't utilize most of its cores, and so will Kusama. Running an empty node is cheap, and to prevent DoS, you can reduce max refine gas, etc. This will allow Kusama validators to run their operations in their homelab basement, much below the requirements of the targeted JAM node requirement. The whole network stays secure, because the limit is reduced. And as no professional operations needed, the costs stay practically very low.

The tradeoff between option 1 and option 2 is slight centralization but full sized JAM core vs real decentralization but much reduced core performance.
