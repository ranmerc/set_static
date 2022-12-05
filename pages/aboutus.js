import Head from 'next/head';
import Styles from '../styles/aboutus.module.css';
import PageHeading from '../components/PageHeading/PageHeading';
import Image from 'next/image';
import vitLogo from '../public/VIT_logo.png';
import hSocietyLogo from '../public/club_logo.png';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>H Society - About Us</title>
      </Head>
      <main className={Styles.container}>
        <PageHeading className={Styles.heading}>ABOUT US</PageHeading>
        <div className={Styles.paraContainer}>
          <p>
            The primary goal of VIT Vellore&apos;s student-led H Society is to
            spark and nurture students&apos; interest in ethical hacking and
            hacktivism.
          </p>
          <p>
            Our main tasks and responsibilities include leading seminars and
            webinars on demand-related subjects, abilities, and tools that will
            benefit the VIT Vellore student fraternity&apos;s ability to master
            various hacking tools.
          </p>
          <p>
            These abilities will eventually be useful to them both in their
            field-specific postings and in their regular employment lives. Such
            activities as Certification Drives, Competency Builder Events, Case
            Study Competitions, Quiz Competitions, and Online Treasure Hunts are
            organized by us.
          </p>
        </div>
        <div className={Styles.imageContainer}>
          <Image
            src={vitLogo}
            width={125}
            height={125}
            alt="VIT Vellore logo"
          />
          <Image
            width={130}
            height={140}
            src={hSocietyLogo}
            alt="H Society logo"
          />
        </div>
      </main>
    </>
  );
}
