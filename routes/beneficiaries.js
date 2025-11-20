const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const beneficiaryController = require('../controllers/beneficiaryController');

router.post('/', authMiddleware, beneficiaryController.create);

module.exports = router;
