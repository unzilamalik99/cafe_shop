import React from "react";
import { FaStar } from "react-icons/fa";

const SimpleCard = ({ imageSrc, price, Product_name }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg w-80">
      <img src={imageSrc} alt="Product" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Product_name} </div>
        <p className="text-blue-gray">${price.toFixed(2)}</p>
      </div>
      <div className="px-6 py-4">
        <div className="flex space-x-1">{renderStars()}</div>
      </div>
    </div>
  );
};

export default SimpleCard;
