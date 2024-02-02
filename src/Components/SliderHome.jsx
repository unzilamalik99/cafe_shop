import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css";
const SliderHome = () => {
  const navigate = useNavigate();

  const someEventHandler = () => {
    navigate("/Shop");
  };
  return (
    <>
      <Swiper
        id="SliderHome"
        slidesperview={1.2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesperview: 2,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {/* slide 1======> */}
        <SwiperSlide>
          <div
            className="w-full h-screen md:bg-cover md:bg-center py-20"
            style={{
              backgroundImage: "url('s1.jpg')",
            }}
          >
            <div className=" pb-40 px-10 pt-20 md:pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-white text-4xl md:text-5xl font-semibold font-serif">
                <h6 className="font-bold ">Outstanding</h6>
              </div>
              <div className="px-5 text-white text-5xl md:text-7xl font-bold">
                <h1 className="  font-bold item-center">Coffee Shop</h1>
              </div>
              <div className="pt-2 px-5 text-black ">
                <h1 className="md:w-1/2  text-slate-200 font-medium font-serif">
                  {" "}
                  There are many varaitions of passages of To start a business
                  proposal for a coffee shop, use a coffee shop business plan
                  sample and make sure you include the key sections: an
                  executive summary, business overview, management and staff,
                  market analysis, marketing and publicity, operations plan, and
                  financial forecast and expenses.
                </h1>
                <button
                  onClick={someEventHandler}
                  className="bg-black md:text-2xl px-4 py-3 mt-5 font-bold text-white rounded-xl hover:bg-black hover:text-white "
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide2===> */}
        <SwiperSlide>
          <div
            className="w-full h-screen md:bg-cover md:bg-center py-20"
            style={{
              backgroundImage: "url('s2.webp')",
            }}
          >
            <div className=" pb-40 px-10 pt-20 md:pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-white text-4xl md:text-5xl font-semibold font-serif">
                <h6 className="font-bold ">Outstanding</h6>
              </div>
              <div className="px-5 text-white text-5xl md:text-7xl font-bold">
                <h1 className="  font-bold item-center">Coffee Shop</h1>
              </div>
              <div className="pt-2 px-5 text-black ">
                <h1 className="md:w-1/2  text-slate-200 font-medium font-serif">
                  {" "}
                  There are many varaitions of passages of To start a business
                  proposal for a coffee shop, use a coffee shop business plan
                  sample and make sure you include the key sections: an
                  executive summary, business overview, management and staff,
                  market analysis, marketing and publicity, operations plan, and
                  financial forecast and expenses.
                </h1>
                <button
                  onClick={someEventHandler}
                  className="bg-black md:text-2xl px-4 py-3 mt-5 font-bold text-white rounded-xl hover:bg-black hover:text-white "
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide3====> */}
        <SwiperSlide>
          <div
            className="w-full h-screen md:bg-cover md:bg-center py-20"
            style={{
              backgroundImage: "url('s3.jpg')",
            }}
          >
            <div className=" pb-40 px-10 pt-20 md:pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-white text-4xl md:text-5xl font-semibold font-serif">
                <h6 className="font-bold ">Outstanding</h6>
              </div>
              <div className="px-5 text-white text-5xl md:text-7xl font-bold">
                <h1 className="  font-bold item-center">Coffee Shop</h1>
              </div>
              <div className="pt-2 px-5 text-black ">
                <h1 className="md:w-1/2 text-slate-200 font-medium font-serif">
                  {" "}
                  There are many varaitions of passages of To start a business
                  proposal for a coffee shop, use a coffee shop business plan
                  sample and make sure you include the key sections: an
                  executive summary, business overview, management and staff,
                  market analysis, marketing and publicity, operations plan, and
                  financial forecast and expenses.
                </h1>
                <button
                  onClick={someEventHandler}
                  className="bg-black md:text-2xl px-4 py-3 mt-5 font-bold text-white rounded-xl hover:bg-black hover:text-white "
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide4======> */}
        <SwiperSlide>
          <div
            className="w-full h-screen md:bg-cover md:bg-center py-20"
            style={{
              backgroundImage: "url('s4.avif')",
            }}
          >
            <div className=" pb-40 px-10 pt-20 md:pt-40 md:max-w-7xl mx-auto text-black font-bold">
              <div className="px-5 text-white text-4xl md:text-5xl font-semibold font-serif">
                <h6 className="font-bold ">Outstanding</h6>
              </div>
              <div className="px-5 text-white text-5xl md:text-7xl font-bold">
                <h1 className="  font-bold item-center">Coffee Shop</h1>
              </div>
              <div className="pt-2 px-5 text-black ">
                <h1 className="md:w-1/2  text-slate-200 font-medium font-serif">
                  {" "}
                  There are many varaitions of passages of To start a business
                  proposal for a coffee shop, use a coffee shop business plan
                  sample and make sure you include the key sections: an
                  executive summary, business overview, management and staff,
                  market analysis, marketing and publicity, operations plan, and
                  financial forecast and expenses.
                </h1>
                <button
                  onClick={someEventHandler}
                  className="bg-black md:text-2xl px-4 py-3 mt-5 font-bold text-white rounded-xl hover:bg-black hover:text-white "
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderHome;
