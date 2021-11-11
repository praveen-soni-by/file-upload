import { createUploadLink } from 'apollo-upload-client'
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


const URL = "http://localhost:8080/graphql";


const client = new ApolloClient({
  link: createUploadLink({ uri: URL }),
  cache: new InMemoryCache()
})

export default client;
