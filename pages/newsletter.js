import Head from 'next/head';
import NewsletterForm from '../components/NewsletterForm/NewsletterForm';
import Styles from '../styles/newsletter.module.css';

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>H Society - Newsletter</title>
      </Head>
      <main className={Styles.container}>
        <NewsletterForm />
      </main>
    </>
  );
}
