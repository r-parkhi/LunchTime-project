import './Info.css';

function Info() {
  return (
    <>
      <div className="page">
        <img className="image" src="src/assets/entrees/special/caesarsalad.jpg"></img>

        <div className="info">
          {/*title & heart*/}
          <p className="name">Chicken Caesar Salad</p> <p className="heart">♡</p>
        
          {/*RATING*/}
          <div className="rating">
            {/*stars*/}
            <p className="stars">★ ★ ★ ★ ★</p>
            {/*button*/}
            <button className="submitBtn">Submit a rating</button>
          </div>
          
          <p className="desc">Salad kit with romaine lettuce, grilled chicken, croutons, Parmesan cheese, and a Caesar salad dressing packet.</p>
          {/*ALLERGENS*/}
          <h3>Allergens:</h3>
          <div className="allergenIcons">
            <img src="https://placehold.co/30x30"></img>Milk
            <img src="https://placehold.co/30x30"></img>Soy
          </div>

          {/*NUTIRTION FACTS*/}
          <h3>Nutrition Facts:</h3>
          <div className="nutritionFacts">
              {/*column 1*/}
              <span className="main">Calories: 735Kcal</span>
              <span className="main">Total fat: 43.5g</span>
              <span className="sub">Trans fat: 0g</span>
              <span className="sub">Saturated fat: </span>
              <span className="main">Cholesterol: 100mg</span>
              <span className="main">Sodium: 1,055mg</span>
              <span className="main">Potassium: 710mg</span>
              <span className="main">Carbohydrates: 55mg</span>

              {/*column 2*/}
              <span className="main">Dietary fiber: 14g</span>
              <span className="main">Total sugars: 3g</span>
              <span className="sub">Added sugars: 0g</span>
              <span className="main">Protein: 34g</span>
              <span className="main">Iron: 5mg</span>
              <span className="main">Sodium: 1,055mg</span>
              <span className="main">Calcium: 160mg</span>
              <span className="main">Vitamin A: 18,200 IU</span>
              <span className="main">Vitamin C: 12mg</span>

          </div>
        </div>
      </div>
    </>
  );
}

export default Info