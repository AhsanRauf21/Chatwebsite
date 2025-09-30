import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
      <input
        type="search"
        placeholder="Search chats..."
        className=" outline-none w-full text-sm  placeholder-gray-400 border-none"
      />
      <CiSearch className="text-gray-400 mr-2 text-lg " />
    </div> 
  );
};

export default Search;
