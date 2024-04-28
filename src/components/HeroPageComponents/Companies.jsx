import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../../assets/HeroPageAssets";

const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px] dark:bg-black dark:text-white">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className="text-center text-2xl font-bold text-[#536E96] dark:text-white">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className="text-center  text-[#536E96] text-xl dark:text-white">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="flex justify-center py-8 md:gap-8 ">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2 dark:text-white">
            <img src={companyLogo1} />
            <img src={companyLogo2} />
            <img src={companyLogo3} />
            <img src={companyLogo4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
