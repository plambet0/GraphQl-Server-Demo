const createModel = require('./models');
const companies = require('../companies/companyDbModel');

module.exports = {
  models: {
    Companies: createModel(companies)
  }
};
