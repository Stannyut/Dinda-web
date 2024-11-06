import FakeData from "@/Shared-data/FakeData";
import React from "react";
import CarItem from "./CarItem";

function MostSearched() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-3xl text-center mb-8">
        Most Searched Cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FakeData.carList.map((car, index) => (
          <CarItem car={car} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MostSearched;
