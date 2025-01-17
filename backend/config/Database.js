const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'belanja',
});

module.exports = db;
