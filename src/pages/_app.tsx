import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NJEF 2025 Nouvelles Journées d'Echographie Foetale</title>
        <meta name="description" content="Created by Zaid" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
