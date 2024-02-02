// components/Invoice.js
import React from "react";

const Invoice = ({ invoice, total }) => {
  return (
    <div className=" p-4 pt-20 shadow-md bg-[#3b120249]  ">
      <h2 className="text-2xl font-bold mb-4 text-white">Invoice</h2>
      <ul>
        {invoice.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span className="text-white">{item.name}</span>
            <span className="text-white">${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-white">
        <strong>Total: ${total}</strong>
      </div>
    </div>
  );
};

export default Invoice;
