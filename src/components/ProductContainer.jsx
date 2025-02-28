import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductContainer = ({ products }) => {
  const pages = Math.ceil(products.length / 20);
  const [count, setCount] = useState(0);

  let start = count === 0 ? count * 20 : count * 20 + 1;
  let end = start + 20;
  const newProducts = products.slice(start, end);
  return (
    <div>
      <div className="flex flex-wrap">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#ff3f6c] p-2 w-1/6 m-3 text-white"
          disabled={count === 0}
          onClick={() => setCount((prev) => prev - 1)}
        >
          Previous
        </button>
        <input
          type="text"
          value={`${count + 1} of ${pages} `}
          disabled
          className="text-center border border-gray-500 h-10 w-18 my-auto"
        />
        <button
          className="bg-[#ff3f6c] p-2 w-1/6 m-3 text-white"
          disabled={count === pages - 1}
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductContainer;
