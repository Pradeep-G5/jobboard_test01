const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase');

// Define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send('Job Board API');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});