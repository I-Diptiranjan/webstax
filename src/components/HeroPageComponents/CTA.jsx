import React from "react";
import { cta } from "../../assets/HeroPageAssets";

const CTA = () => {
  return (
    <div className="w-full bg-[#f7d7d7b2] py-24 dark:bg-black">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" />

        <div>
          <h1 className="py-2  text-3xl font-semibold dark:text-white">
            Join <span className="text-[#FF204E] ">World's largest</span>{" "}
            learning platform today{" "}
          </h1>
          <p className="py-2 text-lg text-gray-600 dark:text-white">
            Start learning by registering for free
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#FF204E] text-white font-bold hover:bg-[#E10060] dark:hover:bg-red-800">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
