import Styles from './IconList.module.css';

export default function IconList({ iconArray }) {
  return (
    <ul className={Styles.list}>
      {iconArray.map((Icon, i) => {
        return (
          <li key={i}>
            <Icon />
          </li>
        );
      })}
    </ul>
  );
}
