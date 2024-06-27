const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', itemRoutes);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = app;
