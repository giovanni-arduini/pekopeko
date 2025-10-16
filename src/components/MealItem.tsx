import { Meal } from "../Types";
import { currencyFormatter } from "../util/formatting";

interface Props {
  meal: Meal;
}

const MealItem: React.FC<Props> = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          {/* prices are formatted in omogeneous way */}
          <p className="meal-item-price">
            {currencyFormatter.format(Number(meal.price))}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
