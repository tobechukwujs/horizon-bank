const User = require('./User');
const Account = require('./Account');
const Transaction = require('./Transaction');
const Transfer = require('./Transfer');
const Beneficiary = require('./Beneficiary');

// Account <-> User
Account.belongsTo(User, { foreignKey: 'userId' }); 
User.hasMany(Account, { foreignKey: 'userId' });  

// Transaction <-> Account
Transaction.belongsTo(Account);
Account.hasMany(Transaction);

// Transfer <-> Account 
Transfer.belongsTo(Account, { as: 'fromAccount', foreignKey: 'fromAccountId' });

// Beneficiary <-> User
Beneficiary.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Beneficiary, { foreignKey: 'userId' });


module.exports = {
  User,
  Account,
  Transaction,
  Transfer,
  Beneficiary
};
