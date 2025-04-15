import { NavLink } from "react-router"
import "./NavBar.css"

function NavBar() {
  return (
    <header>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calendar">Calendar</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li className="loginbtn">Login</li>
      </ul>
    </header>
  )
}
export default NavBar