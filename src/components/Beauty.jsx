import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import Loading from "./Loading";

const Beauty = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const json = await data.json();
      setProducts(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return products ? (
    <div className="flex my-6 ">
      <div className="w-1/6">
        <h1>Filters</h1>
      </div>
      <div className="w-5/6">
        <ProductContainer products={products} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Beauty;
