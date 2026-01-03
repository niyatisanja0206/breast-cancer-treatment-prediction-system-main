const express = require('express');
const { registerUser, loginUser, logoutUser, getLoggedInUser } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', getLoggedInUser);

module.exports = router;
