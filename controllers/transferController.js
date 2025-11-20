const Transfer = require('../models/Transfer');
const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

exports.create = async (req, res, next) => {
  try {
    const { fromAccountId, toAccountId, amount } = req.body;
    const fromAccount = await Account.findByPk(fromAccountId);
    const toAccount = await Account.findByPk(toAccountId);

    // Defensive coding: handle missing accounts
    if (!fromAccount) {
      return res.status(404).json({ message: `From account ${fromAccountId} does not exist.` });
    }
    if (!toAccount) {
      return res.status(404).json({ message: `To account ${toAccountId} does not exist.` });
    }

    if (fromAccount.balance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    await fromAccount.save();
    await toAccount.save();

    await Transaction.create({
      accountId: fromAccountId,
      type: 'debit',
      amount
    });

    await Transaction.create({
      accountId: toAccountId,
      type: 'credit',
      amount
    });

    const transfer = await Transfer.create({ fromAccountId, toAccountId, amount });

    res.status(201).json(transfer);
  } catch (err) {
    next(err);
  }
};

