import styles from "./Footer.module.css";

import Img1 from "../../assets/facebook.svg";
import Img2 from "../../assets/instagram.svg";
import Img3 from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h3>Pizza Haven</h3>
        <p>
          Savor perfection at our pizzeria, where every bite tells a story of
          craftsmanship and flavor.
        </p>
        <div className={styles.links}>
          <a href="https://www.facebook.com/">
            <img src={Img1}></img>
          </a>
          <a href="https://www.instagram.com/">
            <img src={Img2}></img>
          </a>
          <a href="https://twitter.com/">
            <img src={Img3}></img>
          </a>
        </div>
        <a href="https://github.com/Talar25" className={styles.github}>
          <p>Copyright ©{new Date().getFullYear()} Talar25</p>
        </a>
      </div>
    </footer>
  );
}
