const Account = require('../models/Account');

exports.list = async (req, res, next) => {
  try {
    const accounts = await Account.findAll({ where: { userId: req.userId } });
    res.json(accounts);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { type, balance } = req.body;
    const account = await Account.create({
      userId: req.userId,   // MUST assign property
      type,
      balance
    });
    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const account = await Account.findOne({
      where: {
        id: req.params.id,
        userId: req.userId   
      }
    });
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json(account);
  } catch (err) {
    next(err);
  }
};

const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        accountId: req.params.id
      }
    });
    res.json(transactions);
  } catch (err) {
    next(err);
  }
};
