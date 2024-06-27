const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', itemRoutes);

app.use(express.static(path.join(__dirname, 'ponto-track/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ponto-track/build', 'index.html'));
});

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
