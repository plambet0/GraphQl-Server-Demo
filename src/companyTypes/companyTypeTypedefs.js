const gql = require('graphql-tag');

module.exports = gql`
  type CompanyType {
    id: ID!
    name: String!
  }

  extend type Query {
    companyTypes: [CompanyType]!
  }

`;
