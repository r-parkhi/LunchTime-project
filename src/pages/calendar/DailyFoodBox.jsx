import './Calendar.css'
import { NavLink } from "react-router"
import { food } from "../../lib/mappings";

function DailyFoodBox({ product }) {
  const imageSrc = new URL(food[product.id], import.meta.url);

  return (
    <NavLink to={`/info/${product.id}`} className='dailyFoodBox'>
      <h3>{product.name}</h3>
      <img className="dailyImg" src={imageSrc}></img>
    </NavLink>
  );
}
export default DailyFoodBox