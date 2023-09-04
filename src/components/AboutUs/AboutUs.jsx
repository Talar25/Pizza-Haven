import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";
import Img1 from "../../assets/aboutUs-1.jpg";
import Img2 from "../../assets/aboutUs-2.jpg";
import Img3 from "../../assets/aboutUs-3.jpg";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Welcome to our cozy pizzeria!</h2>
          <p>
            Place where the aroma of freshly baked dough and the allure of
            delicious toppings combine to create an unforgettable dining
            experience.
          </p>
          <p>
            Our skilled chefs meticulously craft each pizza by hand, using only
            the finest locally sourced ingredients. Whether you're a fan of
            classic Margherita, adventurous with exotic flavors, or seeking a
            vegan delight, our diverse menu caters to every palate.
          </p>
          <p>
            With a warm and inviting atmosphere, friendly staff, and a
            commitment to quality, our pizzeria is the perfect spot to savor
            authentic, mouthwatering pizzas that will leave you craving for
            more.
          </p>
          <Link to="contact">
            <span>Learn More</span>
          </Link>
        </div>
        <div className={styles.images}>
          <figure className={styles.image}>
            <img src={Img1} alt="about-pizzeria" />
          </figure>
          <figure className={styles.image}>
            <img src={Img2} alt="about-pizzeria" />
          </figure>
          <figure className={styles.image}>
            <img src={Img3} alt="about-pizzeria" />
          </figure>
        </div>
      </div>
    </section>
  );
}
