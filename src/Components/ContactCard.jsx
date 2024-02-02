import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
const ContactCard = () => {
  return (
    <>
      <div
        id="ContactCard"
        className="bg-[#be979769] md:pt-20 md:pb-40 text-black Shop px-20 md:px-40 "
      >
        <h3 className="text-3xl md:text-5xl  font-bold text-center pb-10">
          {" "}
          Contac<span className="text-black pb-10">t us</span>
        </h3>
        <div className="flex md:flex-row  flex-col md:gap-15 gap-10 pt-10 justify-center items-center pb-20">
          {/* =====>card1 */}
          <div>
            <div className=" py-5 md:py-10  max-w-sm  rounded-lg  overflow-hidden shadow-md bg-white">
              {/* Contact information */}
              <div className="p-4  ">
                <div className="md:px-[150px] px-[110px]">
                  {" "}
                  <FaPhoneFlip className=" text-5xl" />
                </div>
                <h5 className="text-center px-5 text-xl md:text-3xl font-bold pt-5 mb-2">
                  Contact
                </h5>
                <div className="text-center">
                  <p className="text-gray-700">email@gmail.com</p>
                  <p className="text-gray-700">+92615875153857</p>
                  <p className="text-gray-700">+9257762677262</p>
                </div>
              </div>
            </div>
          </div>
          {/* =====> card2 */}
          <div>
            <div className=" py-5 md:py-10  max-w-sm  rounded-lg  overflow-hidden shadow-md bg-white">
              {/* Contact information */}
              <div className="p-4  ">
                <div className="md:px-[150px] px-[110px]">
                  {" "}
                  <TbClockHour3 className=" text-5xl" />
                </div>
                <h5 className="text-center px-5 text-xl md:text-3xl font-bold pt-5 mb-2">
                  Opening Hours
                </h5>
                <div className="text-center">
                  <p className="text-gray-700">Mon-Fri:8am 6pm</p>
                  <p className="text-gray-700">sat-sun:10am 4pm</p>
                  <p className="text-gray-700">+9257762677262</p>
                </div>
              </div>
            </div>
          </div>

          {/* =====> card3 */}
          <div>
            <div className=" py-5 md:py-10  max-w-sm  rounded-lg  overflow-hidden shadow-md bg-white">
              {/* Contact information */}
              <div className="p-4  ">
                <div className="md:px-[150px] px-[110px]">
                  {" "}
                  <MdOutlineMailOutline className=" text-5xl" />
                </div>
                <h5 className="text-center px-5 text-xl md:text-3xl font-bold pt-5 mb-2">
                  Email
                </h5>
                <div className="text-center">
                  <p className="text-gray-700">email@gmail.com</p>
                  <p className="text-gray-700">Abc@gamil.com</p>
                  <p className="text-gray-700">+xyz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
