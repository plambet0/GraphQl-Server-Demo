// const db = {
//   "companies":
//   [
//       {
//           "id": 1,
//           "name": "Strypes LTD",
//           "company_type_id": 5
//       },
//       {
//           "id": 2,
//           "name": "Axxon LTD",
//           "company_type_id": 5
//       },
//       {
//           "id": 3,
//           "name": "FlatRock LTD",
//           "company_type_id": 6
//       }
//   ],
//   "companyTypes":
//   [
//       {
//           "id": 5,
//           "name": "IT Company"
//       },
//       {
//           "id": 6,
//           "name": "Trading Company"
//       },
//       {
//           "id": 7,
//           "name": "Service Company"
//       }
//   ]
// };

module.exports = {
  Query: {
    async companies(_, __, { models }) {
      return await models.Companies.findMany();
    },
    company(_, { id }, ctx) {
      return models.Companies.findOne({ id });
    }
  },
  Company: {
    company_type({ company_type_id }) {
      return { id: company_type_id, name: 'hard_coded_company_type_name' };
    }
  }
};
