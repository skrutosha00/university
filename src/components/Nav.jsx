import styles from "styles/Nav.module.css";
import clockIconImage from "images/clock-icon.svg";
import searchIconImage from "images/search-icon.svg";
import userIconImage from "images/user-icon.svg";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={clockIconImage} alt="" className={styles.icon} />
      <img src={searchIconImage} alt="" className={styles.icon} />
      <img src={userIconImage} alt="" className={styles.icon} />
    </div>
  );
}
