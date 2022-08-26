import Styles from './PageHeading.module.css';

export default function PageHeading({ children, className = '' }) {
  return <h1 className={`${Styles.heading} ${className}`}>{children}</h1>;
}
