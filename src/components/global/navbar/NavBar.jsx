import { NavLink } from "react-router"
import "./NavBar.css"
import Logo from "../../../assets/LunchTimeLogo.png"
import {db, auth, provider} from '../../../firebase';
import {signInWithPopup} from 'firebase/auth';

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <ul className="logoname">
          <img src={Logo}></img>
          <h1>LunchTime!</h1>
        </ul>
        <ul className="navbtns">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li className="loginbtn"><button onClick={() => signInWithPopup(auth, provider)}>Login</button></li>
        
        </ul>
      </div>
    </header>
  )
}
export default NavBar