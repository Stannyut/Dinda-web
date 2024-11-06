import React from "react";
import Search from "./Search";

function Herosection() {
  return (
    <>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[635px] w-full bg-[#eef0fc] md:h-[675px]">
        <h2 className="text-[24px] font-bold">Drive Your Dreams Today!</h2>
        <h2 className="text-[42px] font-bold">
          Find your perfect top-quality vehicle
        </h2>
        <h2 className="text-lg font-bold">Tailored just for you!!!</h2>

        <Search />
        <img src="/tesla.png" alt="none" className="mt-10 " />
      </div>
    </>
  );
}

export default Herosection;
