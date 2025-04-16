import { NavLink } from "react-router"
import "./NavBar.css"
import Logo from "../assets/LunchTimeLogo.png"

function NavBar() {
  return (
    <header>
    <ul>
        <div className="logoname">
            <img src={Logo}></img>
            <h1>LunchTime!</h1>
        </div>
        <div className="navbtns">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li className="loginbtn">Login</li>
        </div>
    </ul>
    </header>
  )
}
export default NavBar