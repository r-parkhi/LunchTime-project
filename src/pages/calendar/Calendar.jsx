import { useQuery } from "@apollo/client";
import './Calendar.css';
import CalendarFoodBox from './CalendarFoodBox';
import DailyFoodBox from './DailyFoodBox';
import { GET_CURRENT_MONTH_MENU } from "../../lib/queries";

export default function Calendar() {
  const currentDate = new Date();
  const day = currentDate.getDay();

  function getBeginOfWeek(offset) {
    const date = new Date();
    const today = date.getDate();
    const currentDay = date.getDay();

    date.setDate(today - (currentDay || 7));

    date.setDate(date.getDate() + offset);
    return date.getDate();
  }

  const { loading, error, data } = useQuery(GET_CURRENT_MONTH_MENU);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const allItems = data.menuType.defaultPublishedMonth.items;
  const menuByDay = {};

  allItems.forEach(item => {
    if (item.day === 1 || item.day === 2) return;
    if (item.product.category !== "Entrees") return;
    const itemDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), item.day);
    const itemDay = itemDate.getDay()
    if (menuByDay[itemDay]) {
      if (menuByDay[itemDay].some(prod => prod.id === item.product.id)) return;
      menuByDay[itemDay].push(item.product);
    } else {
      menuByDay[itemDay] = [item.product]
    }
  })

  console.log(menuByDay)

  return (
    <>
      <div className="foodsByDay">
        <div className="everyDayFoods">
          <h2>Served Every Day</h2>
          <div className="dailyDiv"><span className="label">Cheese Pizza</span><img className="dailyImg" src="src/assets/entrees/daily/cheesepizza.jpg"></img></div>
          <div className="dailyDiv"><span className="label">Pepperoni Pizza</span><img className="dailyImg" src="src/assets/entrees/daily/pepperonipizza.webp"></img></div>
          <div className="dailyDiv"><span className="label">Uncrustables</span><img className="dailyImg" src="src/assets/entrees/daily/uncrustable.jpg"></img></div>
          <div className="dailyDiv"><span className="label">Hummus Bistro Pack</span><img className="dailyImg" src="src/assets/entrees/daily/hummusbistropack.png"></img></div>
        </div>
        <div className='calendarBox'>
          <h1 className='month'>April 2025</h1>
          <div className="daysOfWeekBox">
            <div className={day === 1 ? "dayOfWeek highlightDay" : "dayOfWeek"}>
              <h3>{getBeginOfWeek(1)}</h3>
              <h2>Monday</h2>
              {menuByDay[1].slice(0, -4).map(product => <CalendarFoodBox product={product} />)}
            </div>

            <div className={day === 2 ? "dayOfWeek highlightDay" : "dayOfWeek"}>
              <h3>{getBeginOfWeek(2)}</h3>
              <h2>Tuesday</h2>
              {menuByDay[2].slice(0, -4).map(product => <CalendarFoodBox product={product} />)}
            </div>

            <div className={day === 3 ? "dayOfWeek highlightDay" : "dayOfWeek"}>
              <h3>{getBeginOfWeek(3)}</h3>
              <h2>Wednesday</h2>
              {menuByDay[3].slice(0, -4).map(product => <CalendarFoodBox product={product} />)}
            </div>

            <div className={day === 4 ? "dayOfWeek highlightDay" : "dayOfWeek"}>
              <h3>{getBeginOfWeek(4)}</h3>
              <h2>Thursday</h2>
              {menuByDay[4].slice(0, -4).map(product => <CalendarFoodBox product={product} />)}
            </div>

            <div className={day === 5 ? "dayOfWeek highlightDay" : "dayOfWeek"}>
              <h3>{getBeginOfWeek(5)}</h3>
              <h2>Friday</h2>
              {menuByDay[5].slice(0, -4).map(product => <CalendarFoodBox product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}