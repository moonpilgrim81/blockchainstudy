const Block = require('./block');


class Blockchain {
    constructor(){
        this.chain = [Block.genesis()];
    }
    // add block to blockchain
    addBlock(data) {
        //const lastBlock = this.chain[this.chain.length-1];
        const block = Block.mineBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block);
        return block;
    }

    // validate block that it contains previous hashed block
    isValidChain(chain) {
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
        
        for (let i =1 ; i < chain.length; i ++){
            const block = chain[i];
            const lastBlock = chain[i-1];
            if (block.lastHash !== lastBlock.hash ||
             block.hash !== Block.blockHash(block)) {
                return false;
            }
        }
        return true;
    }

    //replace block if there is longer block data 
    replaceChain(newChain) {
        if (newChain.length <=  this.chain.length){
            console.log('Recived chain is not longer than the currenct Chain.');
            return;
        } else if (!this.isValidChain(newChain)) {
            console.log('Recived chain is valid.');
            return;
        }
        console.log('replacing blockchain with the new chain.');
        this.chain = newChain
    }

}

module.exports = Blockchain;