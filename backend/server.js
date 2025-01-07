const express = require('express');
const connectDB = require('./database/connection');
const productRoutes = require('./api/product');
const vendorRoutes = require('./api/vendor');
const authRoutes = require('./auth/auth');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
