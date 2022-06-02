const Sequelize = require('sequelize');
const sequelize = require('../db/db').sequelize;

const MarketActivities = sequelize.define(
  'market_activities',
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

module.exports = MarketActivities;
