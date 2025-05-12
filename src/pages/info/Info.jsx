import { useQuery } from "@apollo/client";
import './Info.css';
import { useParams } from "react-router";
import { GET_PRODUCT } from "../../lib/queries";
import { descriptions, food } from "../../lib/mappings";
import React, { useState } from "react";

import Heart from "../../components/Heart.jsx";
import StarRating from "../../components/StarRating.jsx";

import DairyAllergy from "../../assets/Allergens/DairyAllergy.jpg";
import SoyAllergy from "../../assets/Allergens/SoyAllergy.jpg";
import EggAllergy from "../../assets/Allergens/EggAllergy.jpg";
import FishAllergy from "../../assets/Allergens/FishAllergen.jpg";
import PeanutAllergy from "../../assets/Allergens/PeanutAllergy.jpg";
import PorkAllergy from "../../assets/Allergens/PorkAllergy.png";
import SesameAllergy from "../../assets/Allergens/SesameAllergy.jpg";
import ShellFishAllergy from "../../assets/Allergens/ShellFishAllergy.jpg";
import TreeNutAllergy from "../../assets/Allergens/treenutallergy.jpg";
import WheatAllergy from "../../assets/Allergens/WheatAllergen.jpg";


function Info() {
  const { id } = useParams()
  const {prod_allergens} = useParams()
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id, prod_allergens } });
  const [active, setActive] = useState(false);

  // heart
  const handleChangeActive = () => {
    setActive((previousHeart) => {
      return !previousHeart;
    });
  };

  // rating alert
  const handleClick = () => {
    alert('Rating submitted \n (feature under construction)');
  };

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const imageSrc = food[id];
  const description = descriptions[id];
  const product = data.product;

  console.log(product.prod_allergens);

  return (
    <div className="page">
      <img className="image" src={imageSrc} alt={product.name + " image"} />

      <div className="info">
        {/*title & heart*/}
        <div className="titleContainer">
          <p className="name">{product.name}</p>
          <Heart active={active} handleChangeActive={handleChangeActive} />
        </div>

        {/*RATING*/}
        <div className="rating">
          {/*stars*/}
          <StarRating />
          {/*button*/}
          <button onClick={handleClick} className="submitBtn">Submit a rating</button>
        </div>

        <p className="desc">{description}</p>
        {/*ALLERGENS*/}
        <div>

        <div className="AllergenNutrition">
        <div className="Allergens"><h3>Allergens:</h3>
        <div className="allergenIcons">
          <img className={product.prod_allergens.includes("milk") ? "hasAllergen": "noAllergen"} src={DairyAllergy}></img>
          <img className={product.prod_allergens.includes("soy") ? "hasAllergen": "noAllergen"} src={SoyAllergy}></img>
          <img className={product.prod_allergens.includes("egg") ? "hasAllergen": "noAllergen"} src={EggAllergy}></img>
          <img className={product.prod_allergens.includes("fish") ? "hasAllergen": "noAllergen"} src={FishAllergy}></img>
          <img className={product.prod_allergens.includes("peanut") ? "hasAllergen": "noAllergen"} src={PeanutAllergy}></img>
          <img className={product.prod_allergens.includes("pork") ? "hasAllergen": "noAllergen"} src={PorkAllergy}></img>
          <img className={product.prod_allergens.includes("sesame") ? "hasAllergen": "noAllergen"} src={SesameAllergy}></img>
          <img className={product.prod_allergens.includes("shellfish") ? "hasAllergen": "noAllergen"} src={ShellFishAllergy}></img>
          <img className={product.prod_allergens.includes("treenut") ? "hasAllergen": "noAllergen"} src={TreeNutAllergy}></img>
          <img className={product.prod_allergens.includes("wheat") ? "hasAllergen": "noAllergen"} src={WheatAllergy}></img>
          
        </div>
        </div>

        {/*NUTIRTION FACTS*/}
        <div className="Nutrition"><h3>Nutrition Facts:</h3>
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
      </div>
      </div>
      </div>
  );
}

export default Info