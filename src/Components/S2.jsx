import React from "react";
import SCard from "./SCard";

const S2 = () => {
  return (
    <>
      <div className="px-10 md:px-20 flex md:flex-row  flex-col md:gap-15 gap-10 pt-10 justify-center items-center pb-20">
        {/* ======>card1 */}
        <SCard
          imageSrc="Ser1.png"
          price={12.0}
          Product_name={"Selected Coffee Beans"}
          Product_Details={
            "Do you prefer light, dark, fruity, nutty, chocolatey, floral, or something else? Are you using a drip machine, French press, espresso machine, or something else"
          }
        />
        {/* --=====> card2 */}
        <SCard
          imageSrc="Ser2.png"
          price={40.0}
          Product_name={"Own Roasting"}
          Product_Details={
            "Depending on your budget and needs, I can suggest options like air roasters, popcorn poppers (modified for roasting), or even stovetop methods Guide you through the roasting process: I can break down the steps involved, from sourcing green beans to monitoring heat and achieving the desired roast level."
          }
        />
        {/* ====>card3 */}
        <SCard
          imageSrc="Ser3.png"
          price={30.0}
          Product_name={"High Quality"}
          Product_Details={
            "Flavor profile: Are you looking for something bright and acidic, rich and chocolatey, smooth and balanced, or something else entirely Origin and processing: Do you have a preference for specific regions or processing methods (washed, natural, honey, etc.) that contribute to flavor and quality?"
          }
        />
      </div>
      <div className="px-10 md:px-20 flex md:flex-row  flex-col md:gap-15 gap-10  justify-center items-center md:pb-10">
        {/* ====> cardr1 */}
        <SCard
          imageSrc="Ser4.png"
          price={30.0}
          Product_name={"Excellent Grinding"}
          Product_Details={
            "Are you looking for a burr grinder or a blade grinder? Burr grinders produce a more consistent and even grind, while blade grinders tend to be less expensive but can create unevenness."
          }
        />
        {/* ====> cardr2 */}
        <SCard
          imageSrc="Ser5.png"
          price={40.0}
          Product_name={"Coffee Variety"}
          Product_Details={
            "Are you looking for a burr grinder or a blade grinder? Burr grinders produce a more consistent and even grind, while blade grinders tend to be less expensive but can create unevenness.."
          }
        />
        {/* ====> card3*/}
        <SCard
          imageSrc="Ser6.png"
          price={20.0}
          Product_name={"Freshly Brewed"}
          Product_Details={
            "Are you looking for a burr grinder or a blade grinder? Burr grinders produce a more consistent and even grind, while blade grinders tend to be less expensive but can create unevenness.."
          }
        />
      </div>
    </>
  );
};

export default S2;
