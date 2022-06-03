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
    membership({ membership_id }, __, { loaders: { membershipsLoader } }) {
      return membershipsLoader.load(membership_id);
    },
    market_activity({ market_activity_id }, __, { loaders: { marketActivitiesLoader } }) {
      return marketActivitiesLoader.load(market_activity_id);
    }
  },
  Mutation: {
    async addCompany(_, { input }, { models }) {
      await validateMembership(input.membership_id, models);
      await validateCompanyType(input.company_type_id, models);
      await validateMarketActivity(input.market_activity_id, models);
      await validateCompany(input.name, models);
      const companyDto = await models.Companies.create({
        ...input
      });
      return companyDto;
    },
    async updateCompany(_, { id, input }, { models }) {
      const companyToUpdate = await models.Companies.findOne(id);
      if (!companyToUpdate) {
        throw new Error(`company with id ${id} not found`);
      }
      await validateCompanyType(input.company_type_id, models);
      await validateMarketActivity(input.market_activity_id, models);
      await validateCompany(input.name, models);
      const company = { ...companyToUpdate, ...input };
      await models.Companies.update(company, { id });
      return company;
    },
    async deleteCompany(_, { id }, { models }) {
      const companyToDelete = await models.Companies.findOne(id);
      if (!companyToDelete) {
        throw new Error(`there is no such company with id ${id} in the database`);
      } else {
        await models.Companies.delete({ id });
        return true;
      }
    }
  }
};

const validateCompanyType = async (id, models) => {
  const companyType = await models.CompanyTypes.findOne({ id });
  if (!companyType) {
    throw new Error(`market activity with id ${id} not found`);
  }
};

const validateMarketActivity = async (id, models) => {
  const mktActivity = await models.MarketActivities.findOne({ id });
  if (!mktActivity) {
    throw new Error(`market activity with id ${id} not found`);
  }
};

const validateMembership = async (id, models) => {
  const dbMembership = await models.Memberships.findOne({ id });
  if (!dbMembership) {
    throw new Error(`membership with id ${id} not found`);
  }
};

const validateCompany = async (name, models) => {
  const trimmedCompanyName = name.trim();
  const company = await models.Companies.findOneCaseInsensitive('name', trimmedCompanyName);
  if (company) {
    throw new Error(`company name: ${name} exist`);
  }
};
