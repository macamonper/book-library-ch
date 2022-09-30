import React from "react";

const ProductCard = ({ image }) => {
  return (
    <div className="productCard">
      <div className="productCover">
        <img src={image} alt="product logo"></img>
      </div>
    </div>
  );
};

export default ProductCard;
