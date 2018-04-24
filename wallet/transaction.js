const ChainUtil = require('./chain-util');

class Transaction {
    constructor() {
        this.id = ChainUtil.genTranId();
        this.input = null ;
        this.ouputs = [];
    }

    static  newTransaction(sWallet, recipent, amount){
        const transaction = new this();
        if (amount > sWallet.balance) {
                console.log(`Ammount: ${amount} exceeds balace.`);
                return;
        }

        transaction.ouputs.push(...[
            {amount: sWallet.balance - amount, address: sWallet.publicKey },
            {amount, address: recipent}
        ])
        Transaction.signTransaction(transaction,sWallet);
        return transaction;

    }

    static signTransaction(transaction, sWallet) {
        transaction.input = {
            timestamp: Date.now(),
            ammount: sWallet.balance,
            address: sWallet.publicKey,
            signature: sWallet.sign(ChainUtil.hash(transaction.ouputs))
        }
    }

    static verifyTransaction(transaction){
        return ChainUtil.verfiySignature(
            transaction.input.address,
            transaction.input.signature,
            ChainUtil.hash(transaction.ouputs)
        );
    }
}

module.exports = Transaction;