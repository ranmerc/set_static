import FollowUs from './FollowUs/FollowUs';
import NewsletterForm from './NewsletterForm/NewsletterForm';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <NewsletterForm />
      <FollowUs />
    </footer>
  );
}
