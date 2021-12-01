import {
  ApolloClient,
  InMemoryCache, split
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createUploadLink } from 'apollo-upload-client';

const webSocketLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_BASE_URL
});

const GRAPHQL_URL = `${process.env.REACT_APP_BASE_URL}/graphql`;

const client = new ApolloClient({
  link: split((operation) => {
    return operation.operationName === "statusWatch"
  }, webSocketLink, createUploadLink({ uri: GRAPHQL_URL })),

  cache: new InMemoryCache()
})

export default client;