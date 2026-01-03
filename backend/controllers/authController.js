const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signup Controller
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error in registerUser:", error); // full error log in terminal
        res.status(500).json({
            error: 'Server error',
            details: error.message
        })
    }
};

// Login Controller (Session-based)
const loginUser = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Store user data in session
        req.session.user = { userId: user._id, name: user.name };

        res.json({ message: 'Login successful', userId: user._id, name: user.name });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Logout Controller (Destroy session)
const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
};

// Get Logged In User (Session-based)
const getLoggedInUser = (req, res) => {
    if (req.session.user) {
        res.json({ name: req.session.user.name });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
};

module.exports = { 
    registerUser, 
    loginUser, 
    logoutUser,
    getLoggedInUser
};

