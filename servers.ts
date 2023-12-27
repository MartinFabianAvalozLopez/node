import express from 'express';
import { Application } from 'express';
import { bookResolver } from './book resolvents'; 
import{ buildSchema } from "type-graphql"; 
import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';

export async function startServer() {
    const app: Application = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({ resolvers: [bookResolver]})
    });
    apolloServer.applyMiddleware({ app, path: "/graphql" });
    return app;
};