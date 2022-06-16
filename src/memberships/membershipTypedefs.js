const gql = require('graphql-tag');

module.exports = gql`
  type Membership {
    id: ID!
    name: String!
  }

  extend type Query {
    memberships: [Membership]!
  }
`;
