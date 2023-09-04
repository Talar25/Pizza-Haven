import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

export default function Banner({ type }) {
  return (
    <section className={`${styles.banner} ${styles[type]}`}>
      <h3>
        {type === "homepage" && "Discover New Horizons in Brewing!"}
        {type === "menu" && "Reserved Magic:"}
      </h3>
      <span>
        {type === "homepage" &&
          "Introducing Our Latest Craft Beer Selection. Join Us to Sip, Savor, and Celebrate Flavor!"}
        {type === "menu" &&
          "Book with Us and Unlock the Power to Customize Your Menu, Fulfilling Your Culinary Desires!"}
      </span>
      {type === "homepage" && (
        <Link to="Menu/drinks">
          <span className={styles.btn}>Learn more</span>
        </Link>
      )}
      {type === "menu" && (
        <Link to="/contact">
          <span className={styles.btn}>Learn more</span>
        </Link>
      )}
    </section>
  );
}
