import React from "react";
import { Link } from "react-router-dom";

const Gamecard = ({ name, released, image }) => {
  return (
    <div className="game-card">
      <div className="image-sec">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div>
        <h2>{name}</h2>
        <h4>Released date: {released}</h4>
      </div>
      <div className="btnalike">
        <Link className="readbtn">Reade More</Link>
      </div>
    </div>
  );
};

export default Gamecard;
