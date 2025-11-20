const Beneficiary = require('../models/Beneficiary');
exports.create = async (req, res, next) => {
  try {
    const { accountNumber, name } = req.body;
    const beneficiary = await Beneficiary.create({
      accountNumber,
      name,
      userId: req.userId    
    });
    res.status(201).json(beneficiary);
  } catch (err) { next(err); }
};
