// components/AddProductForm.js
import React, { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (you can add more validation logic)
    if (!productName || !productPrice) {
      alert("Please enter both product name and price.");
      return;
    }

    // Create a new product object
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
    };

    // Add the new product to the list
    addProduct(newProduct);

    // Clear the form fields
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="text-black p-4 shadow-md bg-[#3b120249]">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-xl font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter Product name..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4 rounded-xl">
          <label
            className="block text-white text-xl font-bold mb-2 "
            htmlFor="productPrice"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            className="border rounded w-full py-2 px-3"
            placeholder="Enter Product Price... "
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#3b1202d7]  text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
