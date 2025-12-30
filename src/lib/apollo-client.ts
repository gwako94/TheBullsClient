import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:4000/graphql',
  credentials: 'include',
});

const errorLink = onError((errorResponse: any) => {
  if (errorResponse.graphQLErrors) {
    errorResponse.graphQLErrors.forEach(({ message, locations, path }: any) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (errorResponse.networkError) {
    console.error(`[Network error]: ${errorResponse.networkError}`);
  }
});

export function makeClient() {
  return new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}
