import logo from "../../images/logoEspresso.png";

import styles from "./Header.module.css";
const Header = () => (
  <img src={logo} className={styles.img} alt="cafe espresso logo" />
);
export default Header;
