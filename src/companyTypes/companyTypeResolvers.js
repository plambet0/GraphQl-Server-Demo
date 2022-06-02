module.exports = {
  Query: {
    async companyTypes(_, __, { models }) {
      return await models.CompanyTypes.findMany();
    }
  }
};
