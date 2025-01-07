const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validate user credentials
  const token = jwt.sign({ email }, 'SECRET_KEY');
  res.json({ token });
});

module.exports = router;
