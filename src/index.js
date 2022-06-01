//const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const db = require('./db');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { ...db };
  }
});

server.listen(4000).then(() => console.log('on port 4000'));
