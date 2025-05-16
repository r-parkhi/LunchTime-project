import { NavLink } from "react-router";
import QnA from "../../components/qna/QnA";
import './help.css';

export default function Help() {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="wrapper">
        <QnA
          question="Are there options for specific diets (vegetarian, vegan, etc.)?"
          answer={<span>Unfortunately, we do not have data to allow for specific dietary restrictions."</span>} />
        <QnA
          question="Why is there only one week displayed on the calendar?"
          answer={<span>Entree options repeat weekly. The only difference between each week is the sides and drinks. Menus change each month."</span>} />
        <QnA
          question="Where do you get the information for the food items?"
          answer={<span>We pull data from the SDUHSD Nutrition Services website.</span>} />
        <QnA
          question="Why can I not submit a rating or favorite an entree?"
          answer={<span>In order to give feedback or favorite an item, you must first login to the website.</span>} />
        <QnA
          question="How can I provide feedback on your site?"
          answer={<span>We have a feedback form <NavLink to="/feedback">here</NavLink> for users to provide feedback!</span>} />
      </div>
    </>
  )
}