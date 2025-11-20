const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Account = sequelize.define('Account', {
  balance: { type: DataTypes.FLOAT, defaultValue: 0 },
  type: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});


module.exports = Account;
