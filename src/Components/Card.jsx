import React from "react";
import SimpleCard from "./SimpleCard"; // Adjust the path based on your project structure

const Card = () => {
  return (
    <>
      <div className="px-10 flex md:flex-row  flex-col md:gap-15 gap-10 pt-10 justify-center items-center pb-20">
        <SimpleCard imageSrc="p1.png" price={12.0} Product_name={"CupCake"} />
        <SimpleCard imageSrc="p2.png" price={14.0} Product_name={"Donut"} />
        <SimpleCard
          imageSrc="p3.png"
          price={13.0}
          Product_name={"Cappuccino"}
        />
        <SimpleCard imageSrc="p4.png" price={11.0} Product_name={"Latte"} />
      </div>
      <div className="px-10 flex md:flex-row  flex-col md:gap-15 gap-10 pt-5 justify-center items-center pb-20 ">
        <SimpleCard
          imageSrc="p5.png"
          price={10.0}
          Product_name={"Chocolate Cake"}
        />
        <SimpleCard
          imageSrc="p6.png"
          price={11.0}
          Product_name={"Hot Chocolate"}
        />
        <SimpleCard imageSrc="p7.png" price={11.0} Product_name={"Croissant"} />
        <SimpleCard imageSrc="p8.png" price={11.0} Product_name={"Green Tea"} />
      </div>
    </>
  );
};

export default Card;
