import './Calendar.css'
import { NavLink } from "react-router"
import { food } from "../../lib/mappings";

function DailyFoodBox({ product }) {
  const imageSrc = food[product.id];

  return (
    <NavLink to={`/info/${product.id}`} className='dailyFoodBox'>
      <h3>{product.name}</h3>
      <img className="dailyImg" src={imageSrc}></img>
    </NavLink>
  );
}
export default DailyFoodBox