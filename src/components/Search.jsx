import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
const Search = ({handleInputChange ,city}) => {


  return (
 <div className="relative w-full flex justify-center ">
  {/* Icône de recherche placée à gauche */}
  <IoSearch className="absolute left-7 sm:left-12 xl:left-16 2xl:left-[5%] top-1/2 transform -translate-y-1/2 text-slate-400 text-lg " />
  
  {/* Champ de recherche */}
  <input
    className="w-11/12    pl-10 border-2 border-grey-400 rounded-md py-2 px-3 lg:px-10 dark:text-gray-800 leading-tight dark:placeholder-slate-400 shadow-lg focus:outline-none dark:text-white dark:placeholder-gray-500       bg-white text-gray-800 placeholder-gray-400 
             dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
    id="search"
    type="text"
    placeholder="Search..."
    value={city}
    onChange={handleInputChange}
  />
</div>

  );
};

export default Search;
