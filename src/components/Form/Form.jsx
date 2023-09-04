import Button from "../Button/Button";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <section className={styles.sectionForm}>
      <div className={styles.wrapper}>
        <div className={styles.formDescription}>
          <h3>Your Opinion Matters!</h3>
          <p>
            As we strive to create the best possible dining adventure for you,
            we kindly request your valuable feedback. Sharing your thoughts will
            not only assist us in enhancing our offerings but also ensure that
            every visit to our establishment is nothing short of exceptional.
            Thank you for being part of our journey towards culinary excellence!
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.formContainer}>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="First" required />
            </div>
            <div>
              <input type="text" placeholder="Last" required />
            </div>
          </div>

          <div className={styles.formContainer}>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Phone:</label>
              <input type="mobile" placeholder="### ### ###" />
            </div>
          </div>

          <div className={styles.formContainer}>
            <div>
              <label>Date of Visit: </label>
              <input type="date" />
            </div>
          </div>
          <div className={styles.formContainer}>
            <div>
              <label>Comment: </label>
              <textarea type="text" maxLength={400} required></textarea>
            </div>
          </div>
          <Button type="primary" onClick={(e) => e.preventDefault()}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
