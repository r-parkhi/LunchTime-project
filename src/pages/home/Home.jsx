import './Home.css'

function Home() {
  return (
    <>
    <h4>Tue March 11, 2025</h4>

    <div className="menu">
      <div className="sides">
        <h2>Sides</h2>
        <div className="sideItems">
          <div><img src="src/assets/sides/celery.jpeg"></img></div>
          <div><img src="src/assets/sides/banana.jpeg"></img></div>
          <div><img src="src/assets/sides/carrots.webp"></img></div>
          <div><img src="src/assets/sides/grapes.jpeg"></img></div>
          <div><img src="src/assets/sides/redapples.webp"></img></div>
          <div><img src="src/assets/sides/strawberries.jpeg"></img></div>
        </div>
      </div>

      <div className="entrees">
        <h2>Entrees</h2>
        <div className="entreeItems">
          <div className="special">
            <img src="https://placehold.co/225x110"></img>
            <img src="https://placehold.co/225x110"></img>
          </div>
          <div className="daily">
            <div><img src="https://placehold.co/75x75"></img></div>
            <div><img src="https://placehold.co/75x75"></img></div>
            <div><img src="https://placehold.co/75x75"></img></div>
            <div><img src="https://placehold.co/75x75"></img></div>
          </div>
        </div>
      </div>

      
      <div className="drinks">
        <h2>Drinks</h2>
        <div className="drinkItems">
          <div><img src="src/assets/drinks/milk.png"></img></div>
          <div><img src="src/assets/drinks/chocmilk.png"></img></div>
          <div><img src="src/assets/drinks/orangejuice.jpeg"></img></div>
          <div><img src="src/assets/drinks/berryjuice.png"></img></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home