import React from "react";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
          <span> @2023 Apply-All rights reserved</span>
          <span>Term privacy policy</span>
          <SocialIcon />
        </div>
      </section>
    </>
  );
};

export default Footer;
