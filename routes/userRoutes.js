const express = require('express');
const { register, login, forgotPassword } = require('../controller/userController');
const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.post('/resetpassword', forgotPassword);

module.exports = router;