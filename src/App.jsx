import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import getApolloClient from './apolloClient';

export default function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client);
      setLoading(false);
    });
  }, []);

  return <Layout client={client} loading={loading} />;
}
