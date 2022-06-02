const { mergeDeep } = require('./utils');
const companyResolvers = require('./companies/companyResolvers');
const companyTypeResolvers = require('./companyTypes/companyTypeResolvers');
const membershipResolvers = require('./memberships/membershipResolvers');
const marketActivityResolvers = require('./marketActivity/marketActivityResolvers');

module.exports = mergeDeep(companyResolvers, companyTypeResolvers, membershipResolvers, marketActivityResolvers);
