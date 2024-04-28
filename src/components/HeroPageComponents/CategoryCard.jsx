import React from "react";
import { BsVectorPen, BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ icons, title }) => {
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:bg-[#E10060]  dark:hover:bg-black hover:text-white hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="md:max-w-[200px] max-w-[80px] truncate md:text-2xl text-lg font-semibold absolute ml-10 dark:hover:text-white">
          {title}
        </h1>
      </div>

      {/* <div className="group-hover/edit:bg-[##E10060] rounded-lg p-3">
        <BsArrowUpRight
          size={30}
          style={{ color: "#FF204E" }}
          className="arrow-icon"
        />
      </div> */}
    </div>
  );
};

export default CategoryCard;
