import React from "react";

const Card = ({ id, cover, title }) => {

  return (
    <div className="card" id={id}  >
      <div className="cover">
        <img src={cover} alt={title} ></img>
      </div>
      <div className="row">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
