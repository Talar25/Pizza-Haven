import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>Opening hourse</h3>
          <div>
            <span>Monday - Thursday:</span> <span>12:00 - 22:00</span>
          </div>
          <div>
            <span>Friday - Sunday</span> <span>12:00 - 00:00</span>
          </div>
        </div>
        <div className={styles.box}>
          <h3>Contact Information</h3>
          <div>
            <span>Mokotowska street, plac Zbawiciela 14</span>
            <span> 00-819 Warszawa</span>
          </div>
          <span className={styles.number}> +48 999 999 999</span>
        </div>
      </div>
    </div>
  );
}
