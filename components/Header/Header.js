import Styles from './Header.module.css';
import { useEffect, useState } from 'react';
import MenuButton from './MenuButton/MenuButton';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import DesktopNavBar from './DesktopNavBar/DesktopNavBar';
import Image from 'next/image';
import logoIcon from '../../public/logo.png';
import logoText from '../../public/title.png';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header className={Styles.header}>
      <div className={Styles.headingContainer}>
        <Image
          height={70}
          width={70}
          src={logoIcon}
          alt="H Society Logo Icon"
        />
        <Image
          src={logoText}
          height={70}
          width={250}
          alt="H Society Logo Text"
        />
      </div>

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
