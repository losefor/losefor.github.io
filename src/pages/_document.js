import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from '../src/components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {/* <Head/> */}
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Tajawal:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <title>Mento</title>
        </Head>

        <body>
          <Main />
          <NextScript />
          <Footer/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
