const gql = require('graphql-tag');

module.exports = gql`
  type Company {
    id: ID!
    name: String!
    company_type: CompanyType
    membership: Membership!
    market_activity: MarketActivity!
    member_index: Boolean!
    is_main_member: Boolean!
  }

  input AddCompanyInput {
    name: String!
    company_type_id: Int!
    market_activity_id: Int!
    membership_id: Int!
    member_index: Boolean!
    is_main_member: Boolean!
  }

  type MutationResult {
    success: Boolean!
    errors: [String]
    company: Company
  }

  type Query {
    companies: [Company]!
    company(id: Int!): Company
  }

  type Mutation {
    addCompany(input: AddCompanyInput!): Company!
  }
`;
