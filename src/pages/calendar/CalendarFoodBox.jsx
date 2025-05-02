import './Calendar.css'
import { NavLink } from "react-router"

function CalendarFoodBox({img = "https://placehold.co/150x100", link = "/", foodname = "placeholder"}){
    return (
        <div className='byDayFoodBox'>
            <h3>{foodname}</h3>
            <div className='byDayImg'><NavLink to={link}><img src={img}></img></NavLink></div>
        </div>
    );
}
export default CalendarFoodBox