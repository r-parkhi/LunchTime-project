import './Calendar.css'
import { NavLink } from "react-router"

function DailyFoodBox({img = "https://placehold.co/100x100", link = "/", label = "dailyImg1"}){
    return (
        <>
            <div className={label}><NavLink to={link}><img src={img}></img></NavLink></div>
        </>
    );
}
export default DailyFoodBox