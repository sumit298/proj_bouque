import React from "react";
import { useState } from "react";

const Tours = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 200)}
          <button
            style={{ outline: "none" }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tours;
