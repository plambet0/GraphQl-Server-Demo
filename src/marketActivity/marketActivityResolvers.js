module.exports = {
  Query: {
    async marketActivities(_, __, { models }) {
      return await models.MarketActivities.findMany();
    }
  }
};
