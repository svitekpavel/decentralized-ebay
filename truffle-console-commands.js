EcommerceStore.deployed().then(function (f) { f.addProductToStore('iphone X', 'phones', 'imageLink', 'descLink', 1536007648, web3.toWei(1, 'ether'), 0).then(function (f) { console.log(f) }) })
// truffle(development)> { tx: '0xf1fa0d904dd2a47884db245d744b7d3c49248f87748814cc5f1920a533fe4f64',
//   receipt:
//    { transactionHash: '0xf1fa0d904dd2a47884db245d744b7d3c49248f87748814cc5f1920a533fe4f64',
//      transactionIndex: 0,
//      blockHash: '0xe982e5c7d527f4669dee1d0b0098967e25c2ebc7ff3ffb13eed7d7430ef462f0',
//      blockNumber: 19,
//      gasUsed: 207349,
//      cumulativeGasUsed: 207349,
//      contractAddress: null,
//      logs: [],
//      status: '0x1',
//      logsBloom: '0x000000000000000000000000...' },
//   logs: [] }
//
// undefined

EcommerceStore.deployed().then(function (f) { f.productIndex.call().then(function (f) { console.log(f) }) })
// truffle(development)> BigNumber { s: 1, e: 0, c: [ 1 ] }
// In the line above, the productIndex is "c: [ 1 ]", not the initial "s"

EcommerceStore.deployed().then(function (f) { f.getProduct.call(1).then(function (f) { console.log(f) }) })
// truffle(development)> [ BigNumber { s: 1, e: 0, c: [ 1 ] },
//   'iphone X',
//   'phones',
//   'imageLink',
//   'descLink',
//   BigNumber { s: 1, e: 9, c: [ 1536007648 ] },
//   BigNumber { s: 1, e: 18, c: [ 10000 ] },
//   BigNumber { s: 1, e: 0, c: [ 0 ] },
//   '0x0000000000000000000000000000000000000000']

// Sample data
EcommerceStore.deployed().then(function (f) { f.addProductToStore('iPhone 8', 'phones', 'imageLink', 'descLink', 1536007648, web3.toWei(2.2, 'ether'), 0).then(function (f) { console.log(f) }) })
EcommerceStore.deployed().then(function (f) { f.addProductToStore('iPhone X', 'phones', 'imageLink', 'descLink', 1536007648, web3.toWei(2.5, 'ether'), 0).then(function (f) { console.log(f) }) })
EcommerceStore.deployed().then(function (f) { f.addProductToStore('Samsung Galaxy S6', 'phones', 'imageLink', 'descLink', 1536007648, web3.toWei(1.3, 'ether'), 0).then(function (f) { console.log(f) }) })

// Buy function
EcommerceStore.deployed().then(function (f) { f.buy(1, {value: web3.toWei(2.2, 'ether'), from: web3.eth.accounts[1] }).then(function (f) { console.log(f) }) })

// Check balance of the wallet. Default amount was 100 ETH, so it should be lower by product price
web3.eth.getBalance(web3.eth.accounts[1])

// Call getProduct and check buyer address
EcommerceStore.deployed().then(function (f) { f.getProduct.call(1).then(function (f) { console.log(f) }) })
