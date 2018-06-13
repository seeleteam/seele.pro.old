export default [
	{
		id: 1,
		question: '1. How does the neural consensus algorithm prevent double spending？',
		answer: 'The neural consensus algorithm converges to a few block producers after the first round of whole-network fast consensus. These block producers use the pBFT consensus algorithm to select the final block producer to validate the double spending and confirm transactions.  '
	},
	{
		id: 2,
		question: '2. How does neural consensus algorithm avoid some typical attacks, such as DOS and Sybil attacks？',
		answer: 'Unlike the DPoS, all nodes participate in consensus in our algorithm, which means that an attacker cannot succeed unless it can handle more than 1/3 or 1/2 of the nodes; Our algorithm weighs nodes based on the balance in their account. So, as long as a weighted fraction (over 1/2) of the nodes are honest, the Sybil attack can be avoided. If successful, the attacker must spend more than half the amount of money on the entire network node. The cost of such an attack will be very huge and outweighs the gains, making it meaningless.'
	},
	{
		id: 3,
		question: '3. The more nodes, the faster the consensus process. How does the neural consensus algorithm work?',
		answer: "The algorithm is inspired by the ideas of biological neural networks. For example, let's use the visual recognition within the brain. When the eye receives external light signals, billions of neurons in the brain are linked to identify the signal and determine what the signal represents. This procedure is essentially the consensus of billions of neurons. We propose a neural consensus algorithm that transforms the consensus problem into the processing of large-scale concurrent requests in asynchronous systems and the sorting of data in an environment. In brief, multiple nodes participate collaboratively and concurrently, cooperating in the shared partitioning. The higher the degree of participation, the faster the consensus convergence is reached."
	},
	{
		id: 4,
		question: '4. How does the neural consensus algorithm determine the block producer?',
		answer: 'During the first round of the block consensus process, a group of nodes is randomly selected as block producer candidates, according to the contribution of each node (received and processed consensus requests). Then the pBFT algorithm is used to choose the final node producer.'
	},
	{
		id: 5,
		question: '5. Can the neural consensus algorithm avoid fork, and if so, how?',
		answer: 'Fork can be avoided. The algorithm ensures that the final selected node producer is honest and that there is only one.'
	},
	{
		id: 6,
		question: '6. How is the genesis block produced?',
		answer: 'When a new chain is created, the system account initializes a transaction to generate the genesis block.'
	},
	{
		id: 7,
		question: '7. How is a child chain created in a heterogeneous forest network？',
		answer: 'There are three steps in this process: Firstly, the upper level chain registers information about chain account and transaction namespace. Secondly, consensus mechanism is negotiated with the upper level chain; Finally, the genesis block of the child chain is generated.'
	},
	{
		id: 8,
		question: '8. Do transactions within the child chain need to ask the upper level chain for consensus?',
		answer: 'No, this is not required. Only cross-chain transactions need to ask the upper level chain for consensus.'
	},
	{
		id: 9,
		question: '9. What is the relationship between Value Transfer Protocol (VTP) and TCP/UDP?',
		answer: 'Value Transfer Protocol (VTP) is based on the TCP / UDP protocol. It is specifically optimized for value transport in blockchain network, adding richer protocol control and semantic fields.'
	},
	{
		id: 10,
		question: '10. What is the relationship between Value HTTP (VHTTP) and HTTP？',
		answer: 'VHTTP is an application layer protocol, designed to leverage the Internet Protocol (HTTP) for the Value Internet, and facilitates asset registration, discovery and other services.'
	},
	{
		id: 11,
		question: '11. How do user nodes deploy QVIC protocol?',
		answer: "Users download our wallet or blockchain browser. There is no additional manual involvement for the user."
	},
	{
		id: 12,
		question: "12. Do we have miners？",
		answer: "No. We reward users based on their contribution, including the number of times consensus has been reached and the number of producing blocks."
	},
	{
		id: 13,
		question: "13. How does cross-chain communication work？",
		answer: "Cross-chain communication uses our cross-chain protocol stack, including Value Transport Protocol (VTP), Value HTTP (VHTTP) protocol and Unified Asset Identifier (UAI)."
	},
	{
		id: 14,
		question: "14. How is safety of computing and data exchange for inter-chain and cross-chain ensured?",
		answer: "A security sandbox is used that is based on trusted computing and verifiable computing to ensure the security of results and data exchange."
	},
	{
		id: 15,
		question: "15. How do I join?",
		answer: "Just download the client (wallet or browser) and register an account."
	},
	{
		id: 16,
		question: "16. How do I get token rewards?",
		answer: "You can get more tokens by staying online and improving network speed and connectivity."
	},
	{
		id: 17,
		question: "17. Do users need to download all blockchain data for consensus？",
		answer: "No. Only a light-weight dataset is necessary for consensus."
	},
	{
		id: 18,
		question: "18. How do I become a block producer?",
		answer: "There is no way to know who will be block producer. We randomly select based on the contribution to the consensus."
	},
	{
		id: 19,
		question: "19. Do we charge a transaction fee? If so, how is this charged?",
		answer: "Yes. Costs are calculated according to the transaction value and the current state of the network in order to maintain the trading efficiency and fairness for all users."
	},
	{
		id: 20,
		question: "20. What are the components of the transaction cost?",
		answer: "The computing, storage and network bandwidth resources; the weighted costs involved in the transaction; current network status. Users launch a transaction or run a smart contract. We evaluate the input/output size of data, CPU time, and memory occupation for it. The cost can be calculated based on these metrics. If current network is busy, which means too many transactions pending for process, the cumulative weight will be added into cost."
	},
	{
		id: 21,
		question: "21. How can a transaction be confirmed faster?",
		answer: "This is determined by our consensus algorithm. We do not provide the external interface and mechanism to encourage users to interfere with the speed of transaction confirmation in order to maintain the fairness of the whole network. For transactions that require faster confirmation, you can create a separate child chain for faster transaction confirmation, greater transaction concurrency, and lower transaction costs."
	},
	{
		id: 22,
		question: "22. What are the programming languages supported by Seele's smart contracts?",
		answer: "Our smart contracts are web-assembly like and also compatible with EVM. They provide a plug-in programming interface that integrates external libraries and resources to meet the diverse needs of different businesses models."
	},
	{
		id: 23,
		question: "23. Is there a test network for development and testing?",
		answer: "Yes, and it is free to use."
	},
	{
		id: 24,
		question: "24. What IDE/tools are used for development?",
		answer: "SeeleIDE is a powerful IDE for visualization, templating, intelligent contract development, testing and deployment."
	},
	{
		id: 25,
		question: "25. Is Seele's VM compatible with Ethereum and EOS?",
		answer: "Yes, and it is more powerful and more customizable. Developers can customize contract virtual machines to meet the specific needs of different businesses."
	},
	{
		id: 26,
		question: "26. What we can do？",
		answer: "Whatever Bitcoin and Ethereum can do, we can do: transaction and smart contract operation. IoTA can support million, tens of millions of IoT node applications, we can do, and do a better job, easy to support the deployment and consensus million level nodes. Create and customize child chains as needed, including consensus algorithms and governance structures to support and meet different types of business needs in different organizations."
	},
	{
		id: 27,
		question: "27. Is our token supply unlimited?",
		answer: "No. We only issue 1 billion Seele tokens."
	},
	{
		id: 28,
		question: "28. Why is Seele Blockchain 4.0?",
		answer: "1. We include several features of 3.0: faster consensus and transaction confirmation, high concurrency, cross-chain, better governance mechanisms, and so on.<br/>2. We add some improvements. We propose the fundamental protocol stacks for Value Internet and heterogeneous forest network to connect and communicate with our own chains and Bitcoin, Ethereum and other blockchain systems. In addtion, we propose a neural consensus algotithm where the higher the degree of participation, the faster the consensus convergence is reached.<br/>3. Our governance mechanism is innovative. It takes into account efficiency and fairness, co-existence of various consensus algorithms, and various token systems and decentralized exchange rate mechanism.<br/>4. Seele provides a complete ecosystem of bottom-up technologies, architecture and top-level applications, enabling all types of resources worldwide to trust each other for greater information exchange, business collaboration, and societal efficiency."
	},
	{
		id: 29,
		question: "29. Is Seele open source?",
		answer: "Yes. Seele adheres to the spirit of open-source, openness, cooperation and win-win and welcomes ideas and code contributions. GitHub: https://github.com/seeleteam."
	},
	{
		id: 30,
		question: "30. What is the benefit of using your platform if the procedure for child chain is much longer than setting set gas prices like Ethereum?",
		answer: "Child chain is for the purpose of resource isolation, faster transaction confirmation, lower fee, and meeting different business requirements."
	},
	{
		id: 31,
		question: "31. So how simple is it to create a separate child chain? Is it as easy as setting Gas like Ethereum?",
		answer: "Yes, you can refer to Question 7. The fee will be charged according to our evaluated cost. Generally users cannot change it."
	},
	{
		id: 32,
		question: "32. What's max tx/s for Seele?",
		answer: "Million TPS, but this may depend on different factors."
	},
	{
		id: 33,
		question: "33. Do we have a testnet? When will mainnet be available?",
		answer: "Yes, we have a testnet for test purpose. Mainnet will be available around 2018 Q3."
	},
	{
		id: 34,
		question: "34. We are trying to plan on building some cross-chain protocol to communicate with other blockchains such as Ethereum. Is it technologically possible to switch some existing projects that are already built on the smart contract of Ethereum to the Seele blockchain?",
		answer: "Yes, we can. We have plans to leverage some existing projects (such as Cosmos) and technical thoughts into our cross-chain protocol and Value Internet protocol stack to improve blockchain ecosystem. Currently, we're focusing on the fundamental level protocol instead of application level for cross-chain communication."
	},
	{
		id: 35,
		question: "35. Can all the child chains be mutually connected to each other directly? Or do all the connections need to go back to the main final top parent meta chain for communication?",
		answer: "Yes. Two child chains can connect directly if no consensus is needed for upper level chain."
	},
	{
		id: 36,
		question: "36. How is the meta blockchain idea advantageous compared to icon? Icon is an ecosystem to create and connect lots of blockchain. Connecting to the existing blockchain is a huge advantage. How does the heterogeneous forest network, which builds in a hierarchical blockchain, advantageous compared to icon?",
		answer: "You can just consider our meta blockchain as genesis blockchain to handle global consensus and global assert registration and as the parent chain for all child chains in one forest ecosystem. Based on meta blockchain, users can create different child chains to meet different requirements for business models, resource isolation, lower transaction fee, etc."
	},
	{
		id: 37,
		question: "37. Will it issue ERC20 token or IOU for temporary replacement?",
		answer: "Currently, it will issue the ERC20 token, which will be mapped when the main network is online. We will release more details later."
	},
	{
		id: 38,
		question: "38. When will Seele release code in GitHub?",
		answer: "We will open source code to GitHub 2018 Q1."
	},
	{
		id: 39,
		question: "39. Any plans to join with other cross chain projects?",
		answer: "Yes. But currently we're focusing on the fundamental level protocol instead of application level for cross-chain communication."
	},
	{
		id: 40,
		question: "40. If Seele integrates with the existing project in Ethereum, will the existing project have the same transaction speed and function as a new project launch on Seele, or is the existing project still limited by the speed and function because it is within Ethereum network?",
		answer: "Cross-chain protocol just builds a bridge to communicate with each other for transferring value and exchanging information instead of changing the architecture of existing blockchain, so the transaction confirmation speed and functions remain unchanged."
	},
	{
		id: 41,
		question: "41. Are the transaction speeds of different sub-blockchains mutually effective? Will the transaction speed of the chain affect the parent or child chain?",
		answer: "Different sub-blockchains are separated, which means resource isolation. Speed of the chain isn't affected by their parent or child chain, unless the child chain asks the parent chain for consensus."
	},
	{
		id: 42,
		question: "42. What is the max number of blockchain that can be created within Seele in theory? If it is unlimited in theory, what restricts the number of growth in the chain in real life practice?",
		answer: "It is unlimited in theory. In practice the number of chains depends on business requirement and our implemented data structure."
	},
	{
		id: 43,
		question: "43. In theory if Seele achieves 1 million TPS, will you consider to upgrading to more than 1 million TPS in the future?",
		answer: "Yes, we will keep improving and upgrading our consensus algorithm and architecture to be more scalable and hit higher TPS."
	},
	{
		id: 44,
		question: "44. How will Seele solve the storage problem?",
		answer: "Seele can leverage the storage capacity on-chain and off-chain, such as traditional databases and distributed file systems."
	},
	{
		id: 45,
		question: "45. What are the advantages of smart contract compared to what other competitors offer?",
		answer: "Advantages include JVM, layered protocols, pluggable support for EVM, Web Assembly, etc."
	},
	{
		id: 46,
		question: "46. How does Seele prevent the nodes from colluding?",
		answer: "Colluding is a type of attack, such as Sybil attack. Our consensus algorithm weighs nodes based on the balance in their account. So, as long as a weighted fraction (over 1/2) of the nodes are honest, the Sybil attack can be avoided. If successful, the attacker must spend more than half the amount of money on the entire network node. The cost of such an attack will be very huge and outweighs the gains, making it meaningless."
	},
	{
		id: 47,
		question: "47. Does the heterogeneous forest network have direct reference to the machine learning/deep learning algorithm? Will increased use of this feature connect and communicate faster as it is trained on more data?",
		answer: "Currently we don't have direct reference to machine learning and deep learning. We will try to introduce them into our heterogeneous forest network to improve its scalability and performance."
	},
	{
		id: 48,
		question: "48. Are all of Seele's concepts proven? Network and consensus are the biggest risk areas for me.",
		answer: "Our network and consensus are not only proven concepts but are also prototype verified in our test network. We're trying to test in larger scale network."
	},
	{
		id: 49,
		question: "49. Is the team really that strong? It looks good on a website, but when you dig deeper it's primarily academics.",
		answer: "A lot of our team members are experienced engineers and from Microsoft, Tencent, Baidu, etc."
	},
	{
		id: 50,
		question: "50. Do we know if their concept is viewed positively by the blockchain community?",
		answer: "Yes, we've had positive reviews about our whitepaper. Suggestions to improve our product are welcomed!"
	},
	{
		id: 51,
		question: "51. To become a node in the Seele Blockchain, what computer do I need? Do I need a strong CPU, strong GPU, or both? Or will anything decent with good internet will do?",
		answer: "A commodity computer will be enough to join us. The computation cost is lightweight."
	},
	{
		id: 52,
		question: "52. Can I run a master node with Seele?",
		answer: "No master nodes in Seele."
	},
	{
		id: 53,
		question: "53. Block builders are able to change the blockchain. Can you clarify the meaning of this? Does this mean upgrades and introduction of new features, or does it include modifying blocks?",
		answer: "No, block builders, or block producers, are elected by consensus procedures to pack transactions and add them to the blockchain. Block producers are not fixed and are randomly selected each round. Block producers just pack transactions and have no other function."
	},
]
