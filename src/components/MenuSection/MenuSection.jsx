import { NavLink } from "react-router-dom";
import styles from "./MenuSection.module.css";

export default function MenuSection({ children }) {
  return (
    <section className={styles.menuSection}>
      <div className={styles.links}>
        <NavLink to="pizzas" className={styles.link}>
          <div className={`${styles.box} ${styles.pizzas}`}>Pizzas</div>
        </NavLink>
        <NavLink to="pastas" className={styles.link}>
          <div className={`${styles.box} ${styles.pastas}`}>Pastas</div>
        </NavLink>
        <NavLink to="drinks" className={styles.link}>
          <div className={`${styles.box} ${styles.drinks}`}>Drinks</div>
        </NavLink>
        <NavLink to="desserts" className={styles.link}>
          <div className={`${styles.box} ${styles.desserts}`}>Desserts</div>
        </NavLink>
      </div>
      <div className={styles.choosenMenu}>{children}</div>
    </section>
  );
}
