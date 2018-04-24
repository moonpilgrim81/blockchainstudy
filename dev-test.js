/*
const Block  = require('./block');
const testBlock = Block.mineBlock(Block.genesis(),'foo');
console.log(testBlock.toString());
*/

/*
const Blockchain = require('./app/blockchain')
const bc = new Blockchain();

for (let i=0 ; i<10 ; i++){
    console.log(bc.addBlock(`foo ${i}`).toString());

}
*/

const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());
