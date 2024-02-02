import React from "react";

const SCard = ({ imageSrc, price, Product_name, Product_Details }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      <img src={imageSrc} alt="Product" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Product_name} </div>
        <p className="text-blue-gray">${price.toFixed(2)}</p>
      </div>
      <div className="px-6 py-4">
        <div className="flex space-x-1">{Product_Details}</div>
      </div>
    </div>
  );
};

export default SCard;
