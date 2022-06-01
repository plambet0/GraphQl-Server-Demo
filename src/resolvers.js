const { mergeDeep } = require('./utils');
const companyResolvers = require('./companies/companyResolvers');

module.exports = mergeDeep(companyResolvers);
