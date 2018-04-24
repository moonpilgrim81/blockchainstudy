const ChainUtil = require('./chain-util');

class Transaction {
    constructor() {
        this.id = ChainUtil.genTranId();
        this.input = null ;
        this.ouputs = [];
    }
    //generate outdata with sender and recipient data
    static  newTransaction(sWallet, recipient, amount){
        const transaction = new this();
        if (amount > sWallet.balance) {
                console.log(`Ammount: ${amount} exceeds balace.`);
                return;
        }

        transaction.ouputs.push(...[
            {amount: sWallet.balance - amount, address: sWallet.publicKey },
            {amount, address: recipient}
        ])
        Transaction.signTransaction(transaction,sWallet);
        return transaction;

    }
    //generate input data with signature (ransaction outputs)
    static signTransaction(transaction, sWallet) {
        transaction.input = {
            timestamp: Date.now(),
            ammount: sWallet.balance,
            address: sWallet.publicKey,
            signature: sWallet.sign(ChainUtil.hash(transaction.ouputs))
        }
    }
    // to verify transaction
    static verifyTransaction(transaction){
        return ChainUtil.verfiySignature(
            transaction.input.address,
            transaction.input.signature,
            ChainUtil.hash(transaction.ouputs)
        );
    }
}

module.exports = Transaction;