import { NavLink } from "react-router";
import './Calendar.css';
import { food } from "../../lib/mappings";

function CalendarFoodBox({ product }) {
  const imageSrc = new URL(food[product.id], import.meta.url);

  return (
    <NavLink to={`/info/${product.id}`} className='byDayFoodBox'>
      <h3>{product.name}</h3>
      <img className="byDayImg" src={imageSrc} />
    </NavLink>
  );
}
export default CalendarFoodBox;