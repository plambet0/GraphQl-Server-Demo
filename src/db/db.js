const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME, // dev db name
  process.env.DB_USER, // dev username
  process.env.DB_PASS, // dev password
  {
    dialect: 'postgres',
    host: process.env.DB_HOST, // dev host
    port: process.env.DB_PORT, // port
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    schema: process.env.DB_SCHEMA
  }
);

const Op = Sequelize.Op;
module.exports = {
  sequelize,
  Op
};