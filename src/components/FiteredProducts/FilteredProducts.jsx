import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function FilteredProducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl mb-5 font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  text={product.text}
                  colors={product.color}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FilteredProducts;
