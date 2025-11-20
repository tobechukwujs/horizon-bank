const User = require('../models/User');

exports.profile = async (req, res, next) => {
  try {
    console.log('Looking up userId:', req.userId);
    const user = await User.findByPk(req.userId);
    res.json({ user });
  } catch (err) {
    next(err);
  }
};
