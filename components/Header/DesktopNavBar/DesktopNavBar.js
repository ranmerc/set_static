import NavBar from '../NavBar/NavBar';
import Styles from './DesktopNavBar.module.css';

export default function DesktopNavBar() {
  return (
    <>
      <NavBar navStyle={Styles.nav} listStyle={Styles.list} />
    </>
  );
}
