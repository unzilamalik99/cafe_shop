// ProductCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos/1"
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.url} alt={product.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.id}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
