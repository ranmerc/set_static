import Header from '../components/Header/Header';
import Head from 'next/head';
import '../styles/globals.css';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/bulb.png" type="image/x-icon" />
      </Head>
      <div id="_container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
