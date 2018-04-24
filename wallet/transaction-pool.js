class TransactionPool {
    constructor() {
        this.transcations = [];
    }
    updateOrAddTransaction(transcation) {
        let transcationWithId = this.transcation.find(t => t.id === transcation.id) ; 

        if (transcationWithId) {
            this.transcations[this.transcations.indexOf[transcationWithId] = this.transcation];
        } else {
            this.transcations.push(transcation);
        }
    }
}


module.exports = TransactionPool;