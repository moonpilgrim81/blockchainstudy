
const TransactionPool = require('./transaction-pool');
const Transaction= require('./transaction');
const wallet= require('./wallet');

describe('and updating a transaction', () => {
  let tp,nextAmount, nextRecipient;
  beforeEach(() => {
    tp = new TransactionPool();
    nextAmount = 20;
    nextRecipient = 'n3xt-4ddr355';
    transaction = transaction.update(wallet, nextRecipient, nextAmount);
  });

  it(`subtracts the next amount from the sender’s output`, () => {
    expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
      .toEqual(wallet.balance - amount - nextAmount);
  });

  it('outputs an amount for the next recipient', () => {
    expect(transaction.outputs.find(output => output.address === nextRecipient).amount)
      .toEqual(nextAmount);
  });
});

