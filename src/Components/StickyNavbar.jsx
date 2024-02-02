import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosCafe } from "react-icons/io";
import { Link } from "react-router-dom";

export default function StickyNavbar() {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/About" },
    { name: "Product", link: "/Shop" },
    // { name: "Gallery", link: "/" },
    { name: "Services", link: "/Services" },
    { name: "Contact Us", link: "/ContactCard" },
  ];

  return (
    <header className="fixed w-full z-10  text-white bg-black  ">
      <nav className="md:w-full pl-10 md:px-20  flex justify-between items-center ">
        <div className="flex items-center text-4xl ">
          <Link to="/">
            <IoIosCafe />
          </Link>
          <span className=" font-serif font-bold text-xl md:text-2xl ml-2 ">
            CafeShop
          </span>
          <div className=" md:w-full  text-white md:block hidden px-5 py-4 font-medium justify-between  ">
            <span className="font-bold  text-3xl px-10 flex flex-row justify-between ">
              <ul className="flex  gap-[70px] text-2xl  px-20 justify-between">
                {menuLinks?.map((menu, i) => (
                  <li
                    onClick={() => setOpen(false)}
                    key={i}
                    className="font-medium text-white relative text-[23px] w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
                  >
                    <Link to={menu?.link} onClick={() => setOpen(!open)}>
                      {menu?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>

        {/* Responsive navbar===> */}

        <div className="md:hidden  py-5 px-5 text-xl justify-between text-white">
          <div className="flex flex-row  justify-between">
            <div
              onClick={() => setOpen(!open)}
              className={`md:hidden float-left text-white text-3xl ${
                open ? "text-gray-900" : "text-gray-200"
              }`}
            >
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>

        <div
          className={` left-[-90px] top-[70px] container md:hidden absolute z-20 flex flex-col justify-center items-center duration-300 ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <ul className="py-40 w-full flex flex-col items-center text-primary font-medium text-lg text-black bg-[#110902] max-w-xs">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="p-4 font-serif w-full text-center">
                <Link
                  to={menu?.link}
                  className="text-white hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
