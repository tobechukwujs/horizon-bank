const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const validateRegister = require('../middleware/validateRegister');
const auth = require('../middleware/auth'); // <-- add this line!

// Registration endpoint
router.post('/', validateRegister, authController.register);

// Add auth middleware to protect profile route
router.get('/me', auth, userController.profile);

router.get('/test', (req, res) => res.json({msg:"Hello"}));

module.exports = router;
