import Head from 'next/head';
import Styles from '../styles/aboutus.module.css';
import PageHeading from '../components/PageHeading/PageHeading';
import Image from 'next/image';
import iimrLogo from '../public/IIM-Rohtak2.png';
import organonLogo from '../public/bulbdp_lowres.png';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Organon - About Us</title>
      </Head>
      <main className={Styles.container}>
        <PageHeading className={Styles.heading}>ABOUT US</PageHeading>
        <div className={Styles.paraContainer}>
          <p>
            Analytics club is a student driven initiative of IIM-Rohtak, whose
            basic idea is to generate and cultivate student interest in
            analytics.
          </p>
          <p>
            Our primary roles and responsibilities include conducting seminars
            and webinars covering on-demand topics, skills and tools that will
            help the IM Rohtak student&apos;s fraternity gain expertise over
            various analytics tools.
          </p>
          <p>
            Eventually these skills will help them during placements and even
            during day-to-day work life in their respective fields. We organize
            events such as Certification Drive, Competency Builder Events, Case
            Study Competitions, Quiz Competitions and Online Treasure Hunt.
          </p>
        </div>
        <div className={Styles.imageContainer}>
          <Image
            src={iimrLogo}
            width={130}
            height={124}
            alt="Indian Institute of Management Rohtak logo"
          />
          <Image
            width={130}
            height={140}
            src={organonLogo}
            alt="Organon logo"
          />
        </div>
      </main>
    </>
  );
}
