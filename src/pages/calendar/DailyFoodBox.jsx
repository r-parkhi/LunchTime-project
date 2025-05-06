import './Calendar.css'
import { NavLink } from "react-router"
import { food } from "../../lib/mappings";

function DailyFoodBox({ product }) {
  const imageSrc = food[product.id];

  return (
    <NavLink to={`/info/${product.id}`}>
      <span className="label">{product.name}</span><img className="dailyImg" src={imageSrc}></img>
    </NavLink>
  );
}
export default DailyFoodBox