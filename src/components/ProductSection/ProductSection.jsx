import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

function ProductSection() {
  return (
    <div>
      {/* <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h3 className="text-orange-700 pt-5 text-2xl font-inter font-bold tracking-normal leading-none">
          Summer Sale 40%
        </h3>
      </div> */}
      <div className="grid grid-cols-3 justify-items-center max-w-7xl mx-auto py-8 gap-4">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                color={product.color}
                size={product.size}
                price={product.price}
                totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
