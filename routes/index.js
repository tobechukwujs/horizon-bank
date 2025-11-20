const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/accounts', require('./accounts'));
router.use('/transfers', require('./transfers'));
router.use('/beneficiaries', require('./beneficiaries'));

module.exports = router;
