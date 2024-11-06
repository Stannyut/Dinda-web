import React from "react";
import { LuFuel } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { Separator } from "./ui/separator";
import { IoMdOpen } from "react-icons/io";


function CarItem({ car }) {
  return (
    <div className="rounded-xl bg-[#eef0fc] hover:shadow-md cursor-pointer">
      <img
        src={car?.image}
        width={"100%"}
        height={"100%"}
        alt={car?.name}
        className="rounded-t-xl"
      />
      <div>
        <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
        <Separator />
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <MdSpeed className="text-lg mb-2" />
            <h2>{car?.miles} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car?.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg ml-2">ksh{car?.price}</h2>
          <h2 className="text-sm flex gap-2 items-center mr-2">
            View details <IoMdOpen />
          </h2>
        </div>
      </div>
      {/* <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{car?.name}</h3>
        <p className="text-gray-700 text-base mb-1">Model: {car?.model}</p>
        <p className="text-gray-700 text-base mb-1">
          Fuel Type: {car?.fuelType}
        </p>
        <p className="text-gray-700 text-base mb-1">
          Gear Type: {car?.gearType}
        </p>
        <p className="text-gray-700 text-base mb-1">
          Miles: {car?.miles.toLocaleString()} mi
        </p>
        <p className="text-red-600 font-semibold text-lg">
          Price: ${parseFloat(car?.price).toLocaleString()}
        </p>
      </div> */}
    </div>
  );
}

export default CarItem;
