const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth'); // Ensure this file exists!

router.post('/', auth, transactionController.create);
router.get('/', auth, transactionController.list);     
router.get('/:id', auth, transactionController.getOne); 

module.exports = router;
