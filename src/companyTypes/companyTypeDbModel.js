const Sequelize = require('sequelize');
const sequelize = require('../db/db').sequelize;

const CompanyTypes = sequelize.define(
  'company_types',
  {
    name: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = CompanyTypes;
