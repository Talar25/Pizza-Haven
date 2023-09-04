import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/Pizza-Haven/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/Menu">Menu</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink to="/careers">Careers</NavLink>
    </nav>
  );
}
