const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Transaction = sequelize.define('Transaction', {
  amount: { type: DataTypes.FLOAT, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Accounts', key: 'id' }
  }
});

module.exports = Transaction;
