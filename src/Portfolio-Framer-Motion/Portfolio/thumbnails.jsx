import React from "react";
import { Link } from "react-router-dom";

const Thumbnails = (props) => {
  return (
    <div className="project" style={{ display: "flex" }}>
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
};

export default Thumbnails;
