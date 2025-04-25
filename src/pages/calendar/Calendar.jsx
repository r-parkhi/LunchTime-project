import './Calendar.css'
import CalendarFoodBox from './CalendarFoodBox';
import react, { useState,useEffect } from "react";

export default function Calendar() {

  function getBeginOfWeek(date = new Date(), startOfWeek = 1) {
    const result = new Date(date);
    while (result.getDay() !== startOfWeek) {
        result.setDate(result.getDate() - 1);
    }
    return result;
}

console.log(getBeginOfWeek.result)

  return (
  <>
  <div className="foodsByDay">
    <div className="everyDayFoods">
      <h2>Served Every Day</h2>
      <div className="eachDailyFood">
            <div ><img src="https://placehold.co/80x80"></img></div>
            <div><img src="https://placehold.co/80x80"></img></div>
            <div><img src="https://placehold.co/80x80"></img></div>
            <div><img src="https://placehold.co/80x80"></img></div>
      </div>
    </div>
    <div className='calendarBox'>
      <h1 className='month'>April 2025</h1>
      <h2>{}</h2>
      <h2>Monday</h2>
      <div className='Monday'>
        <CalendarFoodBox/>
      </div>
    </div>
  </div>

  </>
  );
}