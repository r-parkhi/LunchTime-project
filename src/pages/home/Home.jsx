import { useQuery } from "@apollo/client";
import LargeEntree from "../../components/items/LargeEntree";
import { GET_CURRENT_MONTH_MENU } from "../../lib/queries";
import './Home.css';
import React from 'react';
import countdown from '../../components/countdown.jsx';


import Banana from "../../assets/sides/banana.jpeg";
import Grapes from "../../assets/sides/grapes.jpeg";
import Carrots from "../../assets/sides/carrots.webp";
import Strawberries from "../../assets/sides/strawberries.jpeg";
import Celery from "../../assets/sides/celery.jpeg";
import Apples from "../../assets/sides/redapples.webp";

import CheesePizza from "../../assets/entrees/daily/cheesepizza.jpg";
import PepperoniPizza from "../../assets/entrees/daily/pepperonipizza.webp";
import Uncrustable from "../../assets/entrees/daily/uncrustable.jpg";
import HummusBistroPack from "../../assets/entrees/daily/hummusbistropack.png";

import Milk from "../../assets/drinks/milk.png";
import ChocMilk from "../../assets/drinks/chocmilk.png";
import OrangeJuice from "../../assets/drinks/orangejuice.jpeg";
import BerryJuice from "../../assets/drinks/berryjuice.png";

function Home() {
  const { loading, error, data } = useQuery(GET_CURRENT_MONTH_MENU);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const todayItems = data.menuType.defaultPublishedMonth.items.filter(item => item.day === new Date().getDate());
  const todayEntrees = todayItems.filter(item => item.product.category === "Entrees")

  return (
    <>
        <div className="countdown">  
          <countdown initialSeconds={60} />
        </div>
        <div className="infoContainer">
          <h3 className="date">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
          <div className="times">
            <h3>Line wait time: <br /> <span className="units">~10 m</span></h3>
            <h3>Lunch starts in: <br /> <span className="units">1 h 20 m</span></h3>
          </div>
        </div>
        
      <div className="menu">

        <div className="sides">
          <h2>Sides</h2>
          <div className="sideItems">
            <div><span className="label">Bananas</span><img src={Banana}></img></div>
            <div><span className="label">Grapes</span><img src={Grapes}></img></div>
            <div><span className="label">Carrots</span><img src={Carrots}></img></div>
            <div><span className="label">Strawberries</span><img src={Strawberries}></img></div>
            <div><span className="label">Celery</span><img src={Celery}></img></div>
            <div><span className="label">Apples</span><img src={Apples}></img></div>
          </div>
        </div>

        <div className="entrees">
          <h2>Entrees</h2>
          <div className="entreeItems">
            <div className="special">
              {todayEntrees.slice(0, -4).map((item) => {
                return <LargeEntree key={item.product.id} id={item.product.id} />
              })}
            </div>
            <div className="daily">
              <div><span className="label">Cheese Pizza</span><img src={CheesePizza}></img></div>
              <div><span className="label">Pepperoni Pizza</span><img src={PepperoniPizza}></img></div>
              <div><span className="label">Uncrustables</span><img src={Uncrustable}></img></div>
              <div><span className="label">Hummus Bistro Pack</span><img src={HummusBistroPack}></img></div>
            </div>
          </div>
        </div>

        <div className="drinks">
          <h2>Drinks</h2>
          <div className="drinkItems">
            <div><span className="label">Low Fat Milk</span><img src={Milk}></img></div>
            <div><span className="label">Chocolate Milk</span><img src={ChocMilk}></img></div>
            <div><span className="label">Orange Juice</span><img src={OrangeJuice}></img></div>
            <div><span className="label">Apple Berry Juice</span><img src={BerryJuice}></img></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home