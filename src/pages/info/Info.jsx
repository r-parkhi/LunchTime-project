import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { descriptions, food } from "../../lib/mappings";
import { GET_PRODUCT } from "../../lib/queries";
import './Info.css';

import Heart from "../../components/Heart.jsx";
import StarRating from "../../components/ratings/StarRating.jsx";

import DairyAllergy from "../../assets/Allergens/DairyAllergy.jpg";
import EggAllergy from "../../assets/Allergens/EggAllergy.jpg";
import FishAllergy from "../../assets/Allergens/FishAllergen.jpg";
import PeanutAllergy from "../../assets/Allergens/PeanutAllergy.jpg";
import PorkAllergy from "../../assets/Allergens/PorkAllergy.png";
import SesameAllergy from "../../assets/Allergens/SesameAllergy.jpg";
import ShellFishAllergy from "../../assets/Allergens/ShellFishAllergy.jpg";
import SoyAllergy from "../../assets/Allergens/SoyAllergy.jpg";
import TreeNutAllergy from "../../assets/Allergens/treenutallergy.jpg";
import WheatAllergy from "../../assets/Allergens/WheatAllergen.jpg";


function Info() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const imageSrc = food[id];
  const description = descriptions[id];
  const product = data.product;

  return (
    <div className="page">
      <img className="image" src={imageSrc} alt={product.name + " image"} />

      <div className="info">
        {/*title & heart*/}
        <div className="titleContainer">
          <p className="name">{product.name}</p>
          <Heart productId={product.id} />
        </div>

        {/*RATING*/}
        <div className="rating">
          {/*stars*/}
          <StarRating productId={product.id} count={product.rating_average} />
          {/*button*/}
        </div>

        <p className="desc">{description}</p>
        {/*ALLERGENS*/}
        <div>

          <div className="AllergenNutrition">
            <div className="Allergens"><h3>Allergens:</h3>
              <div className="allergenIcons">
                <img className={product.prod_allergens.includes("milk") ? "hasAllergen" : "noAllergen"} src={DairyAllergy}></img>
                <img className={product.prod_allergens.includes("soy") ? "hasAllergen" : "noAllergen"} src={SoyAllergy}></img>
                <img className={product.prod_allergens.includes("egg") ? "hasAllergen" : "noAllergen"} src={EggAllergy}></img>
                <img className={product.prod_allergens.includes("fish") ? "hasAllergen" : "noAllergen"} src={FishAllergy}></img>
                <img className={product.prod_allergens.includes("peanut") ? "hasAllergen" : "noAllergen"} src={PeanutAllergy}></img>
                <img className={product.prod_allergens.includes("pork") ? "hasAllergen" : "noAllergen"} src={PorkAllergy}></img>
                <img className={product.prod_allergens.includes("sesame") ? "hasAllergen" : "noAllergen"} src={SesameAllergy}></img>
                <img className={product.prod_allergens.includes("shellfish") ? "hasAllergen" : "noAllergen"} src={ShellFishAllergy}></img>
                <img className={product.prod_allergens.includes("treenut") ? "hasAllergen" : "noAllergen"} src={TreeNutAllergy}></img>
                <img className={product.prod_allergens.includes("wheat") ? "hasAllergen" : "noAllergen"} src={WheatAllergy}></img>

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
