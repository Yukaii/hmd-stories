import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
