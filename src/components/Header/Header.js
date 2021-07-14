import logo from "../../images/logoEspresso.png";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <img src={logo} className={styles.img} alt="cafe espresso logo" />
  </div>
);

export default Header;
