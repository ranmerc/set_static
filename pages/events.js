import Head from 'next/head';
import EventCardList from '../components/EventCardList/EventCardList';
import Styles from '../styles/events.module.css';
import { getEventValues } from './api/get/events';

export default function Events({ upcomingEvents, pastEvents }) {
  return (
    <>
      <Head>
        <title>Organon - Events</title>
      </Head>
      <main className={Styles.container}>
        <section className={Styles.subContainer}>
          <h1 className={Styles.heading}>UPCOMING EVENTS</h1>
          <EventCardList events={upcomingEvents} />
        </section>
        <section className={Styles.subContainer}>
          <h1 className={Styles.heading}>PAST EVENTS</h1>
          <EventCardList events={pastEvents} />
        </section>
      </main>
    </>
  );
}

const eventMap = (event) => {
  return {
    name: event[0] ?? '',
    date: event[1].replace(/\//g, '.'),
    time: event[2] ?? '',
    location: event[3] ?? '',
    prize: event[4] ?? '',
    poster: event[5] ? event[5] : '/404.jpg',
    status: event[6],
    reg_link: event?.[7] ? event?.[7] : '#',
    mode: event?.[8] ?? 'Online',
  };
};

export async function getServerSideProps() {
  try {
    const events = await getEventValues();

    const upcomingEvents = events
      .filter((event) => {
        return event[6] === 'Upcoming';
      })
      .map(eventMap);

    const pastEvents = events
      .filter((event) => {
        return event[6] === 'Past';
      })
      .map(eventMap);

    return {
      props: {
        upcomingEvents,
        pastEvents,
      },
    };
  } catch (e) {
    console.log(e.message);

    return {
      props: {
        upcomingEvents: [],
        pastEvents: [],
      },
    };
  }
}
