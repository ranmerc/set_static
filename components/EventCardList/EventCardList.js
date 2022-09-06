import EventCard from '../EventCard/EventCard';
import Styles from './EventCardList.module.css';

export default function EventCardList({ events }) {
  if (events.length === 0) {
    return <p className={Styles.error}>No events to show!</p>;
  }

  return (
    <>
      <ol className={Styles.container}>
        {events.map((event, i) => (
          <li key={i}>
            <EventCard {...event} />
          </li>
        ))}
      </ol>
    </>
  );
}
