import './Calendar.css'
import CalendarFoodBox from './CalendarFoodBox';
import react, { useState,useEffect } from "react";

export default function Calendar() {

  function getBeginOfWeek(){
    const date = new Date();
    const today = date.getDate();
    const currentDay = date.getDay();
    const newDate = today - (currentDay || 7)
    return newDate;
}
console.log(getBeginOfWeek())


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
      <div className='monday'>
      <h3>{getBeginOfWeek() + 1}</h3>
      <h2>Monday</h2>
      <div className='food1'>
      <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>
    </div>
  </div>

  </>
  );
}