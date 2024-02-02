// App.js
import React, { useState } from "react";
import ProductList from "./ProductList";
import Invoice from "./Invoice";
import AddProductForm from "./AddProductForm";

function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: "Coffee", price: 2.5 },
    { id: 2, name: "Tea", price: 1.8 },
    // Add more initial products if needed
  ]);

  const [invoice, setInvoice] = useState([]);

  const addToInvoice = (product) => {
    setInvoice([...invoice, product]);
  };

  const calculateTotal = () => {
    return invoice.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <section className="text-center py-10 bg-[#1b04040e]">
        <h3 className="text-3xl md:text-5xl  font-bold ">
          Produ<span className="text-black">ct Details</span>
        </h3>
        <p className="text-slate-600 my-3 text:xl">
          {" "}
          Information about Product{" "}
        </p>
        <div className="">
          <div className="container mx-auto mt-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProductList products={products} addToInvoice={addToInvoice} />
              <div>
                <AddProductForm addProduct={addProduct} />
                <Invoice invoice={invoice} total={calculateTotal()} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
