module.exports = {
  Query: {
    async companies(_, __, { models }) {
      return await models.Companies.findMany();
    },
    company(_, { id }, { models }) {
      return models.Companies.findOne({ id });
    }
  },
  Company: {
    company_type({ company_type_id }) {
      return { id: company_type_id, name: 'hard_coded_company_type_name' };
    }
  }
};
