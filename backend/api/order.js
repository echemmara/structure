const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get orders by user
router.get('/user/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

module.exports = router;
