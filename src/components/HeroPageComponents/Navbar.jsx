import React, { useState } from "react";
import { logo, lock, close } from "../../assets/HeroPageAssets";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b dark:bg-black">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <Link to={"/"}>
          <img src={logo} className="h-[25px]" />
        </Link>

        {/* <h1 className="font-bold text-2xl text-[#FF204E]">Webstax</h1> */}

        <div className="hidden md:flex items-center dark:text-white ">
          <ul className="flex gap-4">
            <li className="hover:text-[#FF204E]">Home</li>
            <li className="hover:text-[#FF204E]">About</li>
            <li className="hover:text-[#FF204E]">Courses</li>
            <li className="hover:text-[#FF204E]">Agencies</li>
            <li className="hover:text-[#FF204E]">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Link to={"/login"}>
            <button className="flex justify-between items-center  bg-transparent  px-6 gap-2 dark:text-white border border-sky-50 mt-3">
              <img src={lock} />
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="px-8 py-3 rounded-md bg-[#FF204E] text-white font-bold mr-10 hover:bg-[#E10060]">
              Sign Up For Free
            </button>
          </Link>
        </div>

        <div className="md:hidden mr-6 dark:text-white" onClick={handleClick}>
          {toggle ? <ImCross size={25} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b dark:bg-red-500 dark:text-white font-extrabold"
            : "hidden"
        }>
        <ul>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-black">Home</li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-black">About</li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-black">Courses</li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-black">
            Agencies
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-black">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border-b border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4 text-xl">
              <img src={lock} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#FF204E] text-white font-bold hover:bg-[#E10060] dark:bg-black">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
