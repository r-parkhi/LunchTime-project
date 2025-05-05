import { useQuery } from "@apollo/client";
import './Info.css';
import { useParams } from "react-router";
import { GET_PRODUCT } from "../../lib/queries";
import { food } from "../../lib/mappings";

import Heart from "../../components/Heart.jsx";
import React, { useState } from "react";

function Info() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const imageSrc = food[id];
  const product = data.product;

  // favorite
  const [active, setActive] = useState(false);
  const handleChangeActive = () => {
    setActive((previousHeart) => {
      return !previousHeart;
    });
  };

  return (
    <div className="page">
      <img className="image" src={imageSrc} alt={product.name + " image"} />

      <div className="info">
        {/*title & heart*/}
        <div className="titleContainer">
          <p className="name">{product.name}</p>
          <Heart active={active} handleChangeActive={handleChangeActive}/>
        </div>

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
          <span className="main">Calories: {product.prod_calories}kcal</span>
          <span className="main">Total fat: {product.prod_total_fat}g</span>
          <span className="sub">Trans fat: {product.prod_trans_fat}g</span>
          <span className="sub">Saturated fat: {product.prod_sat_fat}g</span>
          <span className="main">Cholesterol: {product.prod_cholesterol}mg</span>
          <span className="main">Sodium: {product.prod_sodium}mg</span>
          <span className="main">Potassium: {product.prod_potassium}mg</span>
          <span className="main">Carbohydrates: {product.prod_carbs}mg</span>

          {/*column 2*/}
          <span className="main">Dietary fiber: {product.prod_dietary_fiber}g</span>
          <span className="main">Total sugars: {product.sugar}g</span>
          <span className="sub">Added sugars: {product.added_sugar}g</span>
          <span className="main">Protein: {product.prod_protein}g</span>
          <span className="main">Iron: {product.prod_iron}mg</span>
          <span className="main">Calcium: {product.prod_calcium}mg</span>
          <span className="main">Vitamin A: {product.prod_vita_iu}IU</span>
          <span className="main">Vitamin C: {product.prod_vitc}mg</span>

        </div>
      </div>
    </div>
  );
}

export default Info