const { mergeDeep } = require('./utils');
const companyResolvers = require('./companies/companyResolvers');
const companyTypeResolvers = require('./companyTypes/companyTypeResolvers');

module.exports = mergeDeep(companyResolvers, companyTypeResolvers);
