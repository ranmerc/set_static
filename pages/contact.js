import Head from 'next/head';
import FacebookLinkIcon from '../components/icons/FacebookLinkIcon';
import InstagramLinkIcon from '../components/icons/InstagramLinkIcon';
import TwitterLinkIcon from '../components/icons/TwitterLinkIcon';
import LinkedinLinkIcon from '../components/icons/LinkedinLinkIcon';
import GmailLinkIcon from '../components/icons/GmailLinkIcon';
import IconList from '../components/IconList/IconList';
import PageHeading from '../components/PageHeading/PageHeading';
import ContactForm from '../components/ContactForm/ContactForm';
import Styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>H Society - Contact</title>
      </Head>
      <main className={Styles.mainContainer}>
        <div className={Styles.headingContainer}>
          <PageHeading>CONTACT</PageHeading>
          <p className={Styles.para}>
            Don&apos;t hesitate to reach out with the contact information below,
            or send a message using the form.
          </p>
        </div>
        <div className={Styles.iconContainer}>
          <h2 className={Styles.subHeading}>GET IN TOUCH</h2>
          <IconList
            iconArray={[
              GmailLinkIcon,
              LinkedinLinkIcon,
              InstagramLinkIcon,
              TwitterLinkIcon,
              FacebookLinkIcon,
            ]}
          />
        </div>

        <div className={Styles.formContainer}>
          <h2 className={Styles.subHeading}>SEND US A MESSAGE</h2>
          <ContactForm />
        </div>
      </main>
    </>
  );
}
