
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('qbhtask', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Set to true to see SQL queries in the console
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
