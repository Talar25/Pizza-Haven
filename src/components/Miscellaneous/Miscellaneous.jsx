import FoodItem from "../FoodItem/FoodItem";
import styles from "./Miscellaneous.module.css";

export default function Miscellaneous({ data, type }) {
  console.log(data);
  return (
    <div className={styles.miscellaneous}>
      <h3 className={styles.heading}>
        {type === "drink" &&
          "Enhance Your Experience: Quench Your Thirst with our Selection of Refreshing Mocktails and Non-Alcoholic Beverages, Perfectly Paired with Our Culinary Delights."}

        {type === "dessert" &&
          "Indulge Your Sweet Cravings: Explore Our Tempting Dessert Selection and Treat Yourself to Irresistible Delights."}
      </h3>
      {type === "drink" && (
        <p className={styles.paragraph}>
          Beers below, for the rest of drinks ask our bartenders
        </p>
      )}
      {data.map((data) => (
        <FoodItem data={data} key={data.name} type="drink" />
      ))}
    </div>
  );
}
