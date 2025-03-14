const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock database
const users = [];

// Signup Route
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (users.find((user) => user.email === email)) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully.' });
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
