const Sequelize = require('sequelize');

const createModel = (table) => ({
  async findMany(filter, limit, orderBy) {
    let queryFilter = {};
    if (filter) {
      queryFilter['where'] = filter;
    }
    if (limit) {
      queryFilter['limit'] = limit;
    }
    if (orderBy) {
      queryFilter['order'] = [orderBy];
    }
    const result = await table.findAll(queryFilter);

    if (result.length > 0) {
      return result.map((r) => r.dataValues);
    }
    return result;
  },
  async findAll(filter) {
    const result = await table.findAll(filter);
    if (result.length > 0) {
      return result.map((r) => r.dataValues);
    }
    return result;
  },
  async findOne(filter) {
    // NO COMPANY have id = 0 
    if (!filter && filter !== 0) {
      throw new Error(`Missing filter in findOne`);
    }
    const result = await table.findOne({
      where: filter
    });

    if (result) return result.dataValues;
    return result;
  },
  async findOneCaseInsensitive(column, input) {
    if (!column || !input) {
      throw new Error(`Column name and input cannot be null-> column: ${column}, input: ${input}`);
    }
    const result = await table.findOne({
      where: {
        [column]: {
          [Sequelize.Op.iLike]: input
        }
      }
    });

    if (result) return result.dataValues;
    return result;
  },
  async findManyCaseInsensitive(column, input, id) {
    if (!column || !input) {
      throw new Error(`Column name and input cannot be null-> column: ${column}, input: ${input}`);
    }
    const result = await table.findAll({
      where: {
        [column]: {
          [Sequelize.Op.iLike]: input
        },
        ['id']: {
          [Sequelize.Op.not]: id
        }
      }
    });

    return result;
  },
  async create(input) {
    const result = await table.create(input);
    if (result) return result.dataValues;
    return result;
  },
  async createMany(input) {
    const result = await table.bulkCreate(input);
    if (result) return result.map((i) => i.dataValues);
    return [];
  },
  async update(input, filter) {
    if (!input || (!filter && filter !== 0)) {
      throw new Error(
        `Input and filter cannot be null-> input: ${JSON.stringify(
          input
        )}, filter: ${JSON.stringify(filter)}`
      );
    }
    const result = await table.update(input, {
      returning: true,
      where: filter
    });

    return result[1][0].dataValues;
  },
  async delete(filter) {
    const result = await this.findOne(filter);
    await table.destroy({
      where: filter
    });

    return result;
  }
});

module.exports = createModel;
