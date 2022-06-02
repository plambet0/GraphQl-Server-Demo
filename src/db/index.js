const createModel = require('./models');
const companies = require('../companies/companyDbModel');
const company_types = require('../companyTypes/companyTypeDbModel');
const memberships = require('../memberships/membershipDbModel');
const marketActivities = require('../marketActivity/marketActivityDbModel')

module.exports = {
  models: {
    Companies: createModel(companies),
    CompanyTypes: createModel(company_types),
    Memberships: createModel(memberships),
    MarketActivities: createModel(marketActivities)
  }
};
