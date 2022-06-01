module.exports = {
  Query: {
    async companyTypes(_, __, { models }) {
      return db.companyTypes;
      //return ctx.models.companyTypes.findMany();
    }
  }
};
