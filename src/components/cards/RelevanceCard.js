import React from "react";

const RelevanceCard = ({ id, cover, title }) => {
  return (
    <div className="relevanceCard" id={id}>
      <div className="cover">
        <img src={cover} alt={title}></img>
      </div>
    </div>
  );
};

export default RelevanceCard;
