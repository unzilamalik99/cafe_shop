import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Product from "./Components/Product";
import Shop from "./Components/Shop";
import Home from "./Home";
import StickyNavbar from "./Components/StickyNavbar";
import Services from "./Components/Services";
import ContactCard from "./Components/ContactCard";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {" "}
        <div className="overflow-hidden">
          <StickyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product" element={<Product />} />
            <Route path="Services" element={<Services />} />{" "}
            <Route path="ContactCard" element={<ContactCard />} />
            <Route path="Footer" element={<Footer />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
