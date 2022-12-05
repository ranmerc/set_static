import FollowUs from './FollowUs/FollowUs';
import NewsletterForm from './NewsletterForm/NewsletterForm';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      {/* <NewsletterForm /> */}
      <div className={Style.details}>
        <div>H SOCIETY</div>
        <div>
          <div>Yours friendly neighborhood hacker society</div>
          <div>Come and HACK AWAY!</div>
          <div>VIT Vellore</div>
        </div>
      </div>
      <FollowUs />
    </footer>
  );
}
