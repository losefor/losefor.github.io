import React from "react";
import Layout from "../src/components/Layout";

import "../src/sass/main.scss";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
