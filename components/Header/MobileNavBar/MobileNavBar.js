import NavBar from '../NavBar/NavBar';
import Styles from './MobileNavBar.module.css';

export default function MobileNavBar() {
  return (
    <>
      <NavBar navStyle={Styles.nav} listStyle={Styles.list} />
    </>
  );
}
