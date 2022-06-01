const Sequelize = require('sequelize');
const sequelize = require('../db/db').sequelize;

const Companies = sequelize.define(
  'companies', //The name from the database
  {
    name: {
      type: Sequelize.TEXT
    },
    company_type_id: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Companies;
