import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState<Meal[]>([]);

  type Meal = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
  };

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
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );
}
