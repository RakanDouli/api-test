import React from "react";
import { Link } from "react-router-dom";

const Gamecard = ({ name, released, image, id }) => {
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
        <Link
          id={id}
          released={released}
          name={name}
          image={image}
          className="readbtn"
          to={`/Gamelist/${id}`}>
          Reade More
        </Link>
      </div>
    </div>
  );
};

export default Gamecard;
