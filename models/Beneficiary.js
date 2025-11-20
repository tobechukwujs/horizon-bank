const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Beneficiary = sequelize.define('Beneficiary', {
  accountNumber: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

module.exports = Beneficiary;
