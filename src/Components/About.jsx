// components/AboutUs.js
import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className=" py-20 bg-black text-white  px-5  mx-auto md:px-20 overflow-hidden"
    >
      <div data-aos="flip-left" className="text-center mt-8">
        <h3 className="text-3xl md:text-5xl font-bold">
          About <span className="text-[#3a1818]">Us</span>
        </h3>
        <p className="text-gray-400 my-3 text:lg">
          {" "}
          Information about Cafeteria{" "}
        </p>
        <div className="md:py-10 flex md:flex-row flex-col-reverse items-center md:gap-6 px-7 max-w-6xl mx-auto transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <div className="">
            <div>
              <div className=" bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </div>
            <div className="p-2">
              <div className="mb-4  text-base text-black dark:text-neutral-200">
                <div className="">
                  <div className="text-gray-300 my-3 font-serif ">
                    <div className="text-justify leading-8 mx-auto">
                      <p className="pt-3 text-justify ">
                        Full cleaning and housekeeping services for companies
                        and households.Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text.Lorem Ipsum is simply
                        In a typical cafeteria, customers serve themselves from
                        a variety of food options displayed on a serving line or
                        counter. Customers usually pick up a tray and move along
                        the serving line, selecting the food items they want.
                      </p>
                    </div>
                    <br />
                    <div className="px-5 flex-col  flex md:flex-row  gap-10">
                      <div>
                        <div>
                          <div className="px-5 flex-col flex md:gap-5  ">
                            <div className=" ">
                              <h1 className="text-white text-2xl md:text-5xl font-bold ">
                                87
                                <span className="text-[#3a1818] text-3xl md:text-6xl">
                                  +
                                </span>{" "}
                              </h1>
                            </div>
                            <div className="">
                              <h2 className="text-white text-2xl  md:text-3xl font-bold  ">
                                {" "}
                                Prod
                                <span className="text-[#3a1818]">
                                  uct Complete
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 flex-col flex md:gap-5 ">
                        <div className=" ">
                          <h1 className="text-white text-2xl md:text-5xl font-bold">
                            25
                            <span className="text-[#3a1818]  text-3xl md:text-6xl">
                              +
                            </span>{" "}
                          </h1>
                        </div>
                        <div className="">
                          <h2 className="text-white text-2xl  md:text-3xl font-bold">
                            {" "}
                            years of Experi
                            <span className="text-[#3a1818]">enced</span>
                          </h2>
                        </div>
                      </div>
                      <div className="px-5 flex-col flex  md:gap-5  ">
                        <div className=" ">
                          <h1 className="text-white text-2xl md:text-5xl font-bold ">
                            76
                            <span className="text-[#3a1818]  text-3xl md:text-6xl">
                              +
                            </span>{" "}
                          </h1>
                        </div>
                        <div className="">
                          <h2 className="text-white text-2xl  md:text-2xl font-bold ">
                            {" "}
                            Customer
                            <span className="text-[#3a1818]"> work</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" w-[250px] h-[300px] md:w-[300px] md:h-[400px] bg-[#3a18181f] rounded-xl  ">
            <div className="flex-1 flex overflow-hidden  rotate-[10deg] pb-[-40px]  ">
              <div className=" mt-20 w-[800px] h-full relative  max-w-sm">
                <img src="A1.webp" alt="" className="w-full object-cover  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
