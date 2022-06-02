require('dotenv').config();
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

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
