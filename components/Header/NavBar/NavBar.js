import Styles from './NavBar.module.css';
import NavLink from '../NavLinks/NavLink';

export default function NavBar({ navStyle, listStyle }) {
  return (
    <>
      <nav className={`${Styles.nav} ${navStyle}`}>
        <ul className={`${Styles.list} ${listStyle}`}>
          <li>
            <NavLink href="/events">Events</NavLink>
          </li>
          <li>
            <NavLink href="/newsletter">Newsletter</NavLink>
          </li>
          <li>
            <NavLink href="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
