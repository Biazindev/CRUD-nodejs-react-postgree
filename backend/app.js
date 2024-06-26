const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

// Sync Database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = app;
