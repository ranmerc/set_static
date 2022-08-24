import { useRouter } from 'next/router';
import Styles from './NavLink.module.css';

export default function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <a
      aria-current={router.pathname === href ? 'page' : false}
      className={Styles.link}
      href={href}
    >
      {children}
    </a>
  );
}
