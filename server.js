const express = require('express');
connectDB = require('./config/db');
const app = express();
const path = require('path');

// runs the entire function in db.js and connects us to mongoose and the mongo atlas database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// GET home route
app.get('/', (req, res) => res.json('Welcome to Pixit!');

////// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/map', require('./routes/map'));

// If there is an environment variable for hosted port, use it, otherwise use 8000 (development)
const PORT = process.env.PORT || 8000;

// Start server with PORT
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
