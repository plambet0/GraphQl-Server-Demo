const Sequelize = require('sequelize');
const sequelize = require('../db/db').sequelize;

const Memberships = sequelize.define(
  'memberships',
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

module.exports = Memberships;
