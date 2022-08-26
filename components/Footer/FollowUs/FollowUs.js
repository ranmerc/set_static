import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import LinkedinIcon from '../../icons/linkedinIcon';
import Styles from './FollowUs.module.css';

export default function FollowUs() {
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>FOLLOW US ON</div>
      <ul className={Styles.list}>
        <li>
          <a
            title="Linkedin Link"
            href="https://www.linkedin.com/in/organon-the-analytics-club-of-iim-rohtak-347039154"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            title="Instagram Link"
            href="https://instagram.com/analyticsclub_iimr"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a title="Twitter Link" href="https://twitter.com/Analytics_IIMR">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            title="Facebook Link"
            href="https://www.facebook.com/Analytics.IIMR/"
          >
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
