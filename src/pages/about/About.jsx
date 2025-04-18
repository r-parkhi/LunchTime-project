import "./about.css";
import Logo from "../../assets/LunchTimeLogo.png";

function About() {
  return (
    <div className="container">
      <p>Welcome to <strong>LunchTime!</strong>, a web app designed to keep CCA students informed and excited about their daily lunch options. We provide students with up-to-date menus, nutritional information, and a personalized experience with ratings, favorites, and dietary restriction filters.
        <br />
        <br />
        Created by a dedicated team of developers and designers, LunchTime! was inspired by the need for a simple and convenient way for students to know what's being served in their school cafeterias. We believe that students deserve to have an enjoyable lunch everyday.

        <br />
        <br />
        <br />
        Happy lunching,
      </p>
      <div className="logoText">
        <img src={Logo} />
        <strong className="strong">LunchTime!</strong>
      </div>
    </div>
  )
}
export default About