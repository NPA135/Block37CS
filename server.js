const express = require('express');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/database');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and sync the database
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
});