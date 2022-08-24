import Styles from './MenuButton.module.css';
import menuIconSVG from './menuIconSVG.js';
import crossIconSVG from './crossIconSVG.js';

export default function MenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      className={Styles.button}
      onClick={onClick}
    >
      {isOpen ? crossIconSVG : menuIconSVG}
    </button>
  );
}
