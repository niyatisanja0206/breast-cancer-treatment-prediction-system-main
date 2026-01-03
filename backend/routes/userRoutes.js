const express = require('express');
const { updateUserDetails, getUserDetails } = require('../controllers/userController');

const router = express.Router();

// PUT: Update user details (after login)
router.put('/update', updateUserDetails);

// GET: Fetch user details (after login)
router.get('/details', getUserDetails);

module.exports = router;

