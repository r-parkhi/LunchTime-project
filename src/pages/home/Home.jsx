import { useQuery } from "@apollo/client";
import LargeEntree from "../../components/items/LargeEntree";
import { GET_CURRENT_MONTH_MENU } from "../../lib/queries";
import './Home.css';
import React from 'react';
import countdown from '../../components/countdown.jsx';


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
        <div className="homeInfo">
        <h3 className="waitTime">Wait time: 10 min</h3>
        <h3 className="waitTime">Count down: 20min</h3>
        <h3 className="date">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
        </div>
        
      <div className="menu">

        <div className="sides">
          <h2>Sides</h2>
          <div className="sideItems">
            <div><span className="label">Bananas</span><img src="src/assets/sides/banana.jpeg"></img></div>
            <div><span className="label">Grapes</span><img src="src/assets/sides/grapes.jpeg"></img></div>
            <div><span className="label">Carrots</span><img src="src/assets/sides/carrots.webp"></img></div>
            <div><span className="label">Strawberries</span><img src="src/assets/sides/strawberries.jpeg"></img></div>
            <div><span className="label">Celery</span><img src="src/assets/sides/celery.jpeg"></img></div>
            <div><span className="label">Apples</span><img src="src/assets/sides/redapples.webp"></img></div>
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
              <div><span className="label">Cheese Pizza</span><img src="src/assets/entrees/daily/cheesepizza.jpg"></img></div>
              <div><span className="label">Pepperoni Pizza</span><img src="src/assets/entrees/daily/pepperonipizza.webp"></img></div>
              <div><span className="label">Uncrustables</span><img src="src/assets/entrees/daily/uncrustable.jpg"></img></div>
              <div><span className="label">Hummus Bistro Pack</span><img src="src/assets/entrees/daily/hummusbistropack.png"></img></div>
            </div>
          </div>
        </div>

        <div className="drinks">
          <h2>Drinks</h2>
          <div className="drinkItems">
            <div><span className="label">Low Fat Milk</span><img src="src/assets/drinks/milk.png"></img></div>
            <div><span className="label">Chocolate Milk</span><img src="src/assets/drinks/chocmilk.png"></img></div>
            <div><span className="label">Orange Juice</span><img src="src/assets/drinks/orangejuice.jpeg"></img></div>
            <div><span className="label">Apple Berry Juice</span><img src="src/assets/drinks/berryjuice.png"></img></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home