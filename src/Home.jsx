import React from "react";
import StickyNavbar from "./Components/StickyNavbar";
import About from "./Components/About";
import Product from "./Components/Product";
import Shop from "./Components/Shop";
import SliderHome from "./Components/SliderHome";
import Services from "./Components/Services";
import ContactCard from "./Components/ContactCard";
// import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <StickyNavbar />
      <SliderHome />
      <About />
      <Shop />
      <Product />
      <Services />
      <ContactCard />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
