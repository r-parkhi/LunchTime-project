import './Calendar.css'
import CalendarFoodBox from './CalendarFoodBox';
import DailyFoodBox from './DailyFoodBox';
import react, { useState,useEffect } from "react";

export default function Calendar() {

  function getBeginOfWeek(offset){
    const date = new Date();
    const today = date.getDate();
    const currentDay = date.getDay();

    date.setDate(today - (currentDay || 7));
     
    date.setDate(date.getDate()+offset);
    return date.getDate();
}
console.log(getBeginOfWeek())


  return (
  <>
  <div className="foodsByDay">
    <div className="everyDayFoods">
      <h2>Served Every Day</h2>
            <DailyFoodBox label='dailyImg1'/>
            <DailyFoodBox label='dailyImg2'/>
            <DailyFoodBox label='dailyImg3'/>
            <DailyFoodBox label='dailyImg4'/>
    </div>
    <div className='calendarBox'>
      <h1 className='month'>April 2025</h1>
      <div className='monday'>
        <h3>{getBeginOfWeek(1)}</h3>
        <h2>Monday</h2>
        <div className='food1'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      <div className='food2'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>

      <div className='tuesday'>
        <h3>{getBeginOfWeek(2)}</h3>
        <h2>Tuesday</h2>
        <div className='food1'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
        </div>
        <div className='food2'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>

      <div className='wednesday'>
        <h3>{getBeginOfWeek(3)}</h3>
        <h2>Wednesday</h2>
        <div className='food1'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
        </div>
        <div className='food2'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>

      <div className='thursday'>
        <h3>{getBeginOfWeek(4)}</h3>
        <h2>Thursday</h2>
        <div className='food1'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
        </div>
        <div className='food2'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>

      <div className='friday'>
        <h3>{getBeginOfWeek(5)}</h3>
        <h2>Friday</h2>
        <div className='food1'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
        </div>
        <div className='food2'>
        <CalendarFoodBox foodname='Chicken Fajita Burrito'/>
      </div>
      </div>


    </div>
  </div>

  </>
  );
}