const Transaction = require('../models/Transaction');

exports.create = async (req, res, next) => {
  try {
    const { amount, type, accountId } = req.body;
    const transaction = await Transaction.create({ amount, type, accountId });
    res.status(201).json(transaction);
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) { next(err); }
};

// get one transaction
exports.getOne = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Not found' });
    res.json(transaction);
  } catch (err) { next(err); }
};
