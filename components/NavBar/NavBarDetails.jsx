import ArrowLeftBack from "../ArrowLeftBack/ArrowLeftBack";
import IconDots from "../IconDots/IconDots";
import styles from "./navBar.module.css";

const NavBarDetails = () => {
  return (
    <div className={styles.detailNavBar}>
      <ArrowLeftBack />
      <h1 className={styles.detail}>Detail</h1>
      <IconDots />
    </div>
  );
};

export default NavBarDetails;
