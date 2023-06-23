import React from "react";

function CategoriesPage() {
  return (
    <div className="max-w-4xl m-auto mt-24">
      <h2 className="border-b-4 ml-5 border-[#53c60b w-fit mb-12 text-3xl]">
        Categories
      </h2>
      <div className='ml-5'>
        <div>
          <select className="border-none focus:border-none cursor-pointer hover:text-white hover:bg-[#48ac0a] ease-in-out transition delay-75 w-36 h-10 rounded-xl mr-2 p-2 text-[#48ac0a] shadow-sm shadow-[#48ac0a]">
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select className="border-none focus:border-none cursor-pointer hover:text-white hover:bg-[#48ac0a] ease-in-out transition delay-75 w-52 h-10 rounded-xl mr-2 p-2 text-[#48ac0a] shadow-sm shadow-[#48ac0a]">
            <option>Cooking Time</option>
            <option>More Than 30 Minutes</option>
            <option>Less Than 30 Minutes</option>
          </select>
          <button className="bg-[#53c60b] text-white h-9 py-0 px-5 rounded-lg cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
