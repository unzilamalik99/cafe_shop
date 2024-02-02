// components/ProductList.js
import React from "react";

const ProductList = ({ products, addToInvoice }) => {
  return (
    <div className="bg-[#3b120249]  p-4 shadow-md md:rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-white">Product List</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center mb-2 text-white"
          >
            <span>{product.name}</span>
            <button
              onClick={() => addToInvoice(product)}
              className="bg-[#3b1202ea]  text-white px-2 py-1 rounded"
            >
              Add to Invoice
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
