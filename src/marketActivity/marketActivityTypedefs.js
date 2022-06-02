const gql = require('graphql-tag');

module.exports = gql`
  type MarketActivity {
    id: ID!
    name: String!
  }

  extend type Query {
    marketActivities: [MarketActivity]!
  }
`;
