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
    company_type({ company_type_id }, __, { loaders: { comppanyTypesLoader } }) {
      return comppanyTypesLoader.load(company_type_id);
    },
    membership({ membership_id }, __, {loaders: { membershipsLoader}}){
      return membershipsLoader.load(membership_id);
    }
  }
};
