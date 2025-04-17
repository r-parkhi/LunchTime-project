import QnA from "../components/QnA";
import './help.css';

export default function Help(){
    return(
    <>
        <h1>Frequently Asked Questions</h1>
        <QnA 
        question = "Are there options for specific diets (vegetarian, vegan, etc.)?" 
        answer = "Unfortunately, we do not have data to allow for specific dietary restrictions."/>
        <QnA 
        question = "Why is there only one week displayed on the calendar?" 
        answer = "Entree options repeat weekly. The only difference between each week is the sides and drinks. Menus change each month."/>
        <QnA 
        question = "Where do you get the information for the food items?" 
        answer = "We pull data from the SDUHSD Nutrition Services website. "/>
        <QnA 
        question = "Why can I not submit a rating or favorite an entree?"
        answer = "In order to give feedback or favorite an item, you must first login to the website."/>
    </>);
}