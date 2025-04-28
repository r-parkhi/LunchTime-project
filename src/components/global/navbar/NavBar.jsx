import { NavLink } from "react-router"
import "./NavBar.css"
import Logo from "../../../assets/LunchTimeLogo.png"
import {db, auth, provider} from '../../../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import {useEffect, useState} from 'react';

function NavBar() {

  const[user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
  });
  return () => unsubscribe();
},[]);

const handleLogin = async () => {
  try {
    await signInWithPopup (auth, provider);
    console.log(user);

  } catch (error){
    console.error('Login Failed', error);
  }
};
const handleLogout = async () => {
  try{
    await signOut(auth);
    setUser(null);
    console.log(user);
  } catch (error){
    console.error('Logout Failed', error);
  }
};
  
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
          {!user?
          (<li className="loginbtn"><button onClick={handleLogin}>Login</button></li>):
          (<li className="loginbtn"><button onClick={handleLogout}>Logout</button></li>)
          }
        
        </ul>
      </div>
    </header>
  )
}
export default NavBar