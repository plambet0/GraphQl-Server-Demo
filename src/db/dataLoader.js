const DataLoader = require('dataloader');
const { sequelize } = require('./db');

async function batchCompanyTypes(CompanyTypes, keys) {
  const values = await CompanyTypes.findMany({
    id: keys
  });
  let result = {};
  values.forEach((c) => {
    result[c.id] = { ...c };
  });
  return keys.map((key) => result[key] || new Error(`No result for ${key}`));
}

async function batchMemberships(Memberships, keys) {
  const values = await Memberships.findMany({
    id: keys
  });
  let result = {};
  values.forEach((m) => {
    result[m.id] = { ...m };
  });
  return keys.map((key) => result[key] || new Error('No result for ${key}'));
}

module.exports = (models) => ({
  comppanyTypesLoader: new DataLoader((keys) => batchCompanyTypes(models.CompanyTypes, keys), {
    cacheKeyFn: (key) => key.toString()
  }),
  membershipsLoader: new DataLoader((keys) => batchMemberships(models.Memberships, keys), {
    cacheKeyFn: (key) => key.toString()
  })
});
