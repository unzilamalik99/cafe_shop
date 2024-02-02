import React from "react";
import Card from "./Card";

const Shop = () => {
  return (
    <>
      <div
        id="Shop"
        className="bg-[#be979769] pt-20 md:pt-40 pb-5 text-black Shop"
      >
        <h3 className="text-3xl md:text-5xl font-bold text-center">
          Cafeter<span className="text-[#3f0909ee]">ia Products</span>
        </h3>
        <Card />
      </div>
    </>
  );
};

export default Shop;
