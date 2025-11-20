const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Transfer = sequelize.define('Transfer', {
  fromAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'fromAccountId',   
    references: { model: 'Accounts', key: 'id' }
  },
  toAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'toAccountId',
    references: { model: 'Accounts', key: 'id' }
  },
  amount: { type: DataTypes.FLOAT, allowNull: false }
}, {
  freezeTableName: true
});


module.exports = Transfer;
