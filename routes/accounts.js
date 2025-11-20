const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const auth = require('../middleware/auth');

// List accounts for current user
router.get('/', auth, accountController.list);

// Get one account by ID 
router.get('/:id', auth, accountController.getOne);

// Get all transactions for an account
router.get('/:id/transactions', auth, accountController.getTransactions);


router.post('/', auth, accountController.create);

module.exports = router;
