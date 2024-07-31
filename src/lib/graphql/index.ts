import { ApolloLink, HttpLink, NormalizedCacheObject } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support'

export function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL
  })

  return new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    name: 'Quatu-store-template',
    version: '0.1',
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink
  })
}
