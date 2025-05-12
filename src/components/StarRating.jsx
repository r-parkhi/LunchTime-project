import { useState } from "react";

const defaultIcon = "★";

export default function StarRating({ count, defaultRating, icon, color, iconSize }) {
  const [rating, setRating] = useState(defaultRating);

  let stars = Array(count || 5).fill(icon || defaultIcon);

  const handleClick = (rating) => {
    setRating(rating);
    localStorage.setItem("starRating", rating);
  };

  return (
    <div>
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
            }}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : defaultIcon}
          </div>
        );
      })}
    </div>
  );
}