const { mergeDeep } = require('./utils');
const companyResolvers = require('./companies/companyResolvers');
const companyTypeResolvers = require('./companyTypes/companyTypeResolvers');
const membershipResolvers = require('./memberships/membershipResolvers');

module.exports = mergeDeep(companyResolvers, companyTypeResolvers, membershipResolvers);
