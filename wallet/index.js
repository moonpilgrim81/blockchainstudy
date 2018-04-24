const { INTI_BALACE } = require('../config.js');
const ChainUtil = require('./chain-util');
class Wallet {
    constructor() {
        this.balance = INTI_BALACE;
        this.keyPair = ChainUtil.genKeyPair();;
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet -
            publickKey : ${this.publicKey.toString()}  
            keyPair : ${this.keyPair}
            balace : ${this.balance}`
    }

}

module.exports = Wallet;