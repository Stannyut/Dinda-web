import Data from "@/Shared-data/Data";
import React from "react";

function Category() {
  return (
    <div className="mt-40">
      <h1 className="font-bold text-3xl text-center mb-6">Browse By Type</h1>
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
          lg:grid-cols-10 gap-6 px-20 cursor-pointer hover:shadow-inner"
      >
        {Data.category.map((category, index) => (
          <div className="border rounded-xl p-3 items-center flex flex-col bg-[#eef0fc]">
            <img src={category.icon} width={40} height={40} />
            <h2 className="mt-2">{category.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
