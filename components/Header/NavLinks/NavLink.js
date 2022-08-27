import { useRouter } from 'next/router';
import Styles from './NavLink.module.css';
import Link from 'next/link';

export default function NavLink({ href, children }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        aria-current={router.pathname === href ? 'page' : false}
        className={Styles.link}
      >
        {children}
      </a>
    </Link>
  );
}
