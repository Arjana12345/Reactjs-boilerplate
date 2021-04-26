/*
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

*/

const typeDefs = gql`
type Query {
  person: String
}
`;


const resolvers = {
  Query: {
    person: () => 'It works'
  },
};



const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const fs = require ('fs')

const port = 4000;
const path = '/graphql'

const app = express()

//const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}))

//const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app, path })

app.listen(port, () => console.info(`Server started on port ${port}`));