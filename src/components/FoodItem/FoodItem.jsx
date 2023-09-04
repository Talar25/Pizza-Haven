import styles from "./FoodItem.module.css";

export default function FoodItem({ data, type }) {
  return (
    <div className={styles.foodItem}>
      {type === "food" && (
        <div className={styles.image}>
          <img src={data.src} />
        </div>
      )}
      <div className={styles.text}>
        <h3>{data.name}</h3>
        <p>
          <i>
            {type === "food" && data.description}
            {type === "drink" && data.type}
          </i>
        </p>
      </div>
      <span>{data.prize} PLN</span>
    </div>
  );
}
