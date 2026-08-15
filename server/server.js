// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const friendRoutes = require('./routes/friendRoutes');
const tripRoutes = require('./routes/tripRoutes');

const app = express();
app.use(cors({
    origin: ['https://split-mate-two.vercel.app', 'http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true,
  }));
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/trips', tripRoutes); 


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
