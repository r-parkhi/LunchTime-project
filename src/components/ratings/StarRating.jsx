import { useEffect, useState } from "react";
import "./StarRating.css"
import { addRating, getUserRating } from "../../lib/db";
import { auth } from "../../firebase";

const defaultIcon = "★";

export default function StarRating({ productId, count, icon }) {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(Math.floor(count));
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopup = () => {
    if (popupVisible == false){
      setPopupVisible(true);
    }
    else{
      setPopupVisible(false);
    }
  }

  let stars = Array(5).fill(icon || defaultIcon);

  useEffect(() => {
    const fetchRating = async () => {
      if (!auth.currentUser) return;
      const r = await getUserRating(auth.currentUser.uid, productId);
      if (r !== null) {
        setRating(r);
      }
    };
    fetchRating();
  }, [productId]);

  const handleClick = (rating) => {
    setRating(rating);
    setRated(true);
    localStorage.setItem("starRating", rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("Please sign in to submit a rating!");
      return;
    }
    if (!rated) {
      alert("Please select a rating first!");
      return;
    }

    try {
      await addRating(user.uid, productId, rating);
      alert(`Submitted rating ${rating} / 5`)
    } catch (err) {
      alert(err)
    }
    setPopupVisible(false);
  }

  return (
    <>
    <button onClick={handlePopup} className="openSubmitBtn">Submit A Rating</button>
    

      {popupVisible && (
      <div className="popupStars">

        <button onClick={handleSubmit} className="realSubmitBtn">Submit</button>

        {stars.map((item, index) => {
          const isActiveColor =
            (rating) &&
            (index < rating);

          let elementColor = "";

          if (isActiveColor) {
            elementColor = "gold";
          } else {
            elementColor = "gray";
          }

          return (
            <div
              key={index}
              style={{
                fontSize: "35px",
                color: elementColor,
                filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
                display: "inline",
                padding: "5px",
                borderColor: "black",
                border: "20px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(index + 1)}
            >
              {icon ? icon : defaultIcon}
            </div>
          );
        })}
      </div>
      )}
    </>
  );
}