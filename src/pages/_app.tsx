import React from "react";
import Layout from "src/components/Layout";
import { AppProps } from "next/app";
import "src/app/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
