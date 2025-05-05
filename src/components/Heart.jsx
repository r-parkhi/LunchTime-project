import React from "react";
import Active from "../assets/hearts/favorited.jpg";
import Inactive from "../assets/hearts/unfavorited.jpg";
import "../pages/info/Info.css";

function Heart({ active, handleChangeActive }) {
  return (
    <>
      <div className="toggleWrapper">
        {active ? (
          <img
            className="active"
            src={Active}
            alt="favorite"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="not favorite"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    </>
  );
}

export default Heart;