import FoodItem from "../FoodItem/FoodItem";
import styles from "./PizzasMenu.module.css";

export default function PizzasMenu({ data, type }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        {type === "pizzas" &&
          "Delight in a World of Pizza Creations: Your Palate's Journey Begins with Our Diverse Selection."}

        {type === "pastas" &&
          "From Italy with Love: Revel in the Richness of Our Pasta Creations, Crafted to Perfection."}
      </h3>
      {data.map((data) => (
        <FoodItem data={data} key={data.name} type="food" />
      ))}
    </div>
  );
}
