import React, { FC } from 'react';

export default function App(
  { Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> },
) {
  return (
    <main>
      <head>
        <meta name='viewport' content='width=device-width' />
        <link rel='stylesheet' href='./style/index.css' />
        <link rel="stylesheet" href="./style/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer"  />
      </head>

      <Page {...pageProps} />
    </main>
  );
}
