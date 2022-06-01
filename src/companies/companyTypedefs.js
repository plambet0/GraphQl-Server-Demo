const gql = require('graphql-tag');

module.exports = gql`
  type Company {
    id: ID!
    name: String!
    company_type: CompanyType
  }

  type Query {
    companies: [Company]!
    company(id: Int!): Company
  }
`;
