import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Welcome.module.css";

export default function Welcome({ type }) {
  return (
    <section className={`${styles[type]}`}>
      {type === "welcome__sectionHp" && (
        <div className={styles.welcomeHp}>
          <h1>Welcome to Pizza Haven</h1>
          <p>
            Founded in 1922, we combine old world quality, values and work ethic
            with new world appeal, to provide a unique dining experience for
            each customer.
          </p>
          <Link to="Menu">
            <Button type="primary">Check our menu</Button>
          </Link>
        </div>
      )}
      {type === "welcome__sectionMenu" && (
        <div className={styles.welcomeMenu}>
          <h1>Our beloved menu!</h1>
          <p>
            Experience Culinary Excellence: Unveiling a Symphony of Flavors in
            Every Dish on Our Menu.
          </p>
        </div>
      )}
      {type === "welcome__sectionContact" && (
        <div className={styles.welcomeContact}>
          <h1>Contact Us</h1>
        </div>
      )}
      {type === "welcome__sectionCareers" && (
        <div className={styles.welcomeContact}>
          <h1>Join our dynamic team</h1>
        </div>
      )}
    </section>
  );
}
