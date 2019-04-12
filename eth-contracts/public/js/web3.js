

if(typeof web3 != 'undefined') {
    web3 = new Web3(web3.currentProvider) // what Metamask injected
    console.log(web3.currentProvider)
} else {
    // Instantiate and set Ganache as your provider
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/0be5128eea744d84b4f47d13a3de1f7f"));
}
// The default (top) wallet account from a list of test accounts

var accounts

loadAccounts()
function loadAccounts(){
    web3.eth.getAccounts(function (error, result) {
      if (error) console.log(error)
        accounts = result
        web3.eth.defaultAccount = accounts[0];
    })
  }

web3.eth.defaultAccount = web3.eth.accounts[0];

// The interface definition for your smart contract (the ABI)
var SolnSquareVerifier = web3.eth.contract(abi)
var solnSquareVerifier = SolnSquareVerifier.at('0x6D627D5e8dF24A57C444835E462bfF64fbF82246');
console.log(solnSquareVerifier)