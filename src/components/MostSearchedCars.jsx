import React from 'react'
import FakeData from '@/Shared-data/FakeData'
import CarItem from './CarItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCars() {
console.log(FakeData.carList);

  return (
    <div className="container mx-32 mb-8 ">
      <h2 className="font-bold text-3xl text-center my-16">
        Most Searched Cars
      </h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem className ="basis-1/4">
              <CarItem car={car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div> */}
    </div>
  );
}

export default MostSearchedCars