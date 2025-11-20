const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Account = require('../models/Account'); // import your Account model

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });

    // Automatically create a default account for the new user
    const account = await Account.create({
      userId: user.id,
      type: "savings", 
      balance: 0
    });

    res.status(201).json({ user, account });
  } catch (err) {
    next(err);
  }
};


exports.login = async (req, res, next) => {
  try {
    console.log("Login endpoint hit");
    const { email, password } = req.body;
    console.log("Email:", email);
    const user = await User.findOne({ where: { email } });
    console.log("User found:", user);
    if (!user) return res.status(401).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token }); 
  } catch (err) {
    console.error("Login error:", err);
    next(err);
  }
};

