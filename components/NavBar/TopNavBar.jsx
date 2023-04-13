import MenuIcon from '../MenuIcon/MenuIcon';
import ProfileIcon from '../Profile/Profile';
import styles from './navBar.module.css';

const TopNavBar = () => {
  return (
    <div className={styles.navBar}>
      <MenuIcon/>
      <ProfileIcon/>
    </div>
  );
};

export default TopNavBar;