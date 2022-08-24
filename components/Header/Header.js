import Styles from './Header.module.css';
import { useState } from 'react';
import NavBar from './NavBar/NavBar';
import MenuButton from './MenuButton/MenuButton';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import DesktopNavBar from './DesktopNavBar/DesktopNavBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <h1 className={Styles.headingContainer}>
        <div className={Styles.imageContainer}>
          <picture>
            <img
              className={Styles.image}
              src="/organon_logo.jpg"
              alt="Organon Logo"
            />
          </picture>
        </div>
        <span>ORGANON</span>
      </h1>

      <MenuButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />

      <DesktopNavBar />
      {isOpen ? <MobileNavBar /> : <></>}
    </header>
  );
}
