import styles from "./JobItem.module.css";

export default function JobItem({ title, description, heading }) {
  return (
    <div className={styles.jobItem}>
      <h4 className={styles.title}>{title}</h4>
      <span>{heading}</span>
      <p>{description}</p>
      <span>Requirements:</span>
      <p>Experience, Patience and Wisdom</p>
    </div>
  );
}
