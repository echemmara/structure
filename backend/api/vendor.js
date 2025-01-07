const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');

// Get vendor profile
router.get('/:id', async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);
  res.json(vendor);
});

// Register vendor
router.post('/register', async (req, res) => {
  const vendor = new Vendor(req.body);
  await vendor.save();
  res.json(vendor);
});

module.exports = router;
