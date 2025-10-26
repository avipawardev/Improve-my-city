const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const { validateRegister, validateLogin } = require('../middlewares/validateInput');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/profile', protect, getProfile);

module.exports = router;