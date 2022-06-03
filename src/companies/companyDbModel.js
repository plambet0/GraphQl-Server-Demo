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
    },
    membership_id: {
      type: Sequelize.INTEGER
    },
    market_activity_id: {
      type: Sequelize.INTEGER
    },
    is_main_member: {
      type: Sequelize.BOOLEAN
    },
    member_index: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Companies;
