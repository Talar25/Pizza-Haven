import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import Img from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/Pizza-Haven/">
      <img src={Img} alt="logo" className={styles.logo} />
    </Link>
  );
}
