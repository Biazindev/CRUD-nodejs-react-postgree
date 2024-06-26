const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')


const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Item;
