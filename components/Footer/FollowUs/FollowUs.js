import FacebookLinkIcon from '../../icons/FacebookLinkIcon';
import InstagramLinkIcon from '../../icons/InstagramLinkIcon';
import TwitterLinkIcon from '../../icons/TwitterLinkIcon';
import LinkedinLinkIcon from '../../icons/LinkedinLinkIcon';
import Styles from './FollowUs.module.css';
import IconList from '../../IconList/IconList';

export default function FollowUs() {
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>FOLLOW US ON</div>
      <IconList
        iconArray={[
          LinkedinLinkIcon,
          InstagramLinkIcon,
          TwitterLinkIcon,
          FacebookLinkIcon,
        ]}
      />
    </div>
  );
}
