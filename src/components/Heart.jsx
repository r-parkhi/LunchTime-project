import React, { useEffect, useState } from "react";
import Active from "../assets/hearts/favorited.png";
import Inactive from "../assets/hearts/unfavorited.png";
import "../pages/info/Info.css";
import { auth } from "../firebase";
import { getUserItemFavoritedState, toggleFavorite } from "../lib/db";

function Heart({ productId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChangeActive = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (user === null) {
      alert("You have to be signed in to favorite items!");
      return;
    }

    toggleFavorite(user.uid, productId, !isFavorite);
    alert(`${isFavorite ? "Unfavorited" : "Favorited"}!`)
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    const fetchRating = async () => {
      if (!auth.currentUser) return;
      const state = await getUserItemFavoritedState(auth.currentUser.uid, productId);
      if (state !== null) {
        setIsFavorite(state);
      }
    };
    fetchRating();
  }, [productId]);

  return (
    <div className="toggleWrapper">
      {isFavorite ? (
        <img
          className="active"
          src={Active}
          alt="favorite"
          onClick={handleChangeActive}
        />
      ) : (
        <img
          className="inactive"
          src={Inactive}
          alt="not favorite"
          onClick={handleChangeActive}
        />
      )}
    </div>
  );
}

export default Heart;