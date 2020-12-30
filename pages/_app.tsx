import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'src/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { init } from 'src/utils/init';

import 'src/styles/index.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default MyApp;
