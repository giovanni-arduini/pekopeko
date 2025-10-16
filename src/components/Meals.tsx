import { useEffect, useState } from "react";
import { Meal } from "../Types";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState<Meal[]>([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // gestione errori
      }

      const data = await response.json();
      setLoadedMeals(data);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal: Meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
