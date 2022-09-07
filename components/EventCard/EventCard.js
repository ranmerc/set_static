import Styles from './EventCard.module.css';

function ifEmpty(value) {
  return value ? value : '-';
}

export default function EventCard({
  name,
  date,
  time,
  location,
  prize,
  poster,
  reg_link,
  mode,
}) {
  return (
    <>
      <a href={reg_link} className={Styles.container}>
        <div className={Styles.left}>
          <picture>
            <img
              src={poster}
              width={172}
              height={194}
              alt={`${ifEmpty(name)} Event Poster`}
            />
          </picture>
          <div>
            <h1 className={Styles.heading}>{ifEmpty(name)}</h1>
            <div className={Styles.location}>{ifEmpty(location)}</div>
          </div>
        </div>
        <div className={Styles.right}>
          <div>
            <div className={Styles.label}>Date</div>
            <div className={Styles.value}>{ifEmpty(date)}</div>
          </div>
          <div>
            <div className={Styles.label}>Time</div>
            <div className={Styles.value}>{ifEmpty(time)}</div>
          </div>
          <div>
            <div className={Styles.label}>Mode</div>
            <div className={Styles.value}>{ifEmpty(mode)}</div>
          </div>
          <div>
            <div className={Styles.label}>Prize</div>
            <div className={Styles.value}>₹{ifEmpty(prize)}</div>
          </div>
        </div>
      </a>
    </>
  );
}
