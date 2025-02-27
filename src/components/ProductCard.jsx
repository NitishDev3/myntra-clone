import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-1/6 h-80 m-3 border border-gray-500 cursor-pointer hover:shadow-lg hover:scale-105">
      <div className="">
        <img src={ product.api_featured_image} alt="" className="w-5/6 h-40 mx-auto" />
      </div>
      <div className="m-2">
        <p className="text-lg font-semibold">{product.brand}</p>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
