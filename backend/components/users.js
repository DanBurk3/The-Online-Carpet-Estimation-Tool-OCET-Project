const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../database');
require('dotenv').config();

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    // Check if email is already assinged to user account.
    connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, users) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (users.length > 0) return res.status(400).json({ error: 'Email already registered' });
        //encript pasword using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        // Add new user 
        connection.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hashedPassword],
            (err) => {
            if (err) return res.status(500).json({ error: 'Registration failed' });
            res.status(201).json({ message: 'User registered successfully' });
            });
    });
});

// Login User
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    //check for user 
    connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, users) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (users.length === 0) return res.status(401).json({ error: 'Invalid email or password' });
        // compair passwords 
        const user = users[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid email or password' });
        //generate JWT token 
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    });
});

router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected profile page', user: req.user });
});

module.exports = router;
