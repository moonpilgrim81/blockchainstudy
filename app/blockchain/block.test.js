const Block = require('./block');
const {DIFFICULTY} = require('../../config');
describe('Block' , () => {
    let data, lastBlock, block;
    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock,data);
    });

    it('sets the `data` to match the input', () =>{
        expect(block.data).toEqual(data);
    });
    /*
    It('sets the `lastHash` to match the hash of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
    */

   it('generates a hash that matches the difficulty', () =>{
        //expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
        expect(block.hash.substring(0, block.diffculty)).toEqual('0'.repeat(diffculty.diffculty));
        console.log(block.toString());
    });

    it('lowers the difficulty for slowly minned blocks', () =>{
        expect(block.adjustDifficulty(block,block.timestamp+360000)).toEqual(block.diffculty-1);
        console.log(block.toString());
    });

    it('raises the difficulty for fast minned blocks', () =>{
        expect(block.adjustDifficulty(block,block.timestamp+1)).toEqual(block.diffculty+1);
        console.log(block.toString());
    });

});