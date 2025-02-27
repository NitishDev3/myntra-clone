import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category, index) => (
        <img
          key={index}
          src={category}
          alt=""
          className="cursor-pointer w-1/6"
        />
      ))}
    </div>
  );
};

export default Categories;
