// Required Packages
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const dietChartRoutes = require('./routes/dietRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');

// Initialize Environment Variables
dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes); // Authentication Routes
app.use('/patients', patientRoutes); // Patient Routes
app.use('/pantry', pantryRoutes); // Pantry Routes
app.use('/diet-charts', dietChartRoutes); // Diet Chart Routes
app.use('/deliveries', deliveryRoutes); // Delivery Routes


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
