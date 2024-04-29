import React, { useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ activeVal }) => {
  const [active, setActive] = useState(activeVal);
  const inputRef = useRef();
  const handleClick = () => {
    setActive(!active);
    inputRef.current.value = "";
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center relative">
        <input
          type="text"
          name=""
          id=""
          ref={inputRef}
          className={`p-2 border bg-red-300 dark:bg-red-500 top-0 right-0 
          transition ease delay-150 duration-300
          rounded-md ${active ? "w-60" : "w-11"} outline-none bolder-black`}
        />
        <button
          type="submit"
          className="absolute top bg-transparent p-3 cursor-pointer right-[2px] border-none"
          onClick={() => handleClick()}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
