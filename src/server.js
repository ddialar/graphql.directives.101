import * as path        from 'path';
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

import * as directives  from './graphql/directives';
import * as resolvers   from './graphql/resolvers';

const typeDefs = importSchema(path.join(__dirname, 'graphql/schema.graphql'));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: directives.AuthDirective
    },
    context: ({ req }) => ({
        token: req.headers.authorization
    }),
    playground: true,
    introspection: true
});

server
    .listen({ port: 3500 })
    .then(({ url }) => { console.log(`[INFO ] - Server ready at ${url}`); })
    .catch((error) => { console.log(`[ERROR] - There was an error: ${error.message}`); });

