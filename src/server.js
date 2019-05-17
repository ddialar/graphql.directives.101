import * as path        from 'path';
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

import * as resolvers   from './graphql/resolvers';

const typeDefs = importSchema(path.join(__dirname, 'graphql/schema.graphql'));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
});

server
    .listen({ port: 3500 })
    .then(({ url }) => { console.log(`[INFO ] - Server ready at ${url}`); })
    .catch((error) => { console.log(`[ERROR] - There was an error: ${error.message}`); });

