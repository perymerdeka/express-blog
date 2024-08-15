
const router = require('express').Router();
const authController = require('../controller/authController');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.post('/reset-password', authController.resetPassword);


module.exports = router;