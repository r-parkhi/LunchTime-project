import './Calendar.css'
import { NavLink } from "react-router"

function CalendarFoodBox({img = "https://placehold.co/150x100", foodname = "placeholder"}){
    return (
        <div className='byDayFoodBox'>
            <h3>{foodname}</h3>
            <div className='byDayImg'><NavLink to="/"><img src={img}></img></NavLink></div>
        </div>
    );
}
export default CalendarFoodBox