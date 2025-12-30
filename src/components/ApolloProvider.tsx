'use client';

import { ApolloProvider as Provider } from '@apollo/client/react';
import { makeClient } from '@/lib/apollo-client';
import { useMemo } from 'react';

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  const client = useMemo(() => makeClient(), []);

  return <Provider client={client}>{children}</Provider>;
}
