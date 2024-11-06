import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { FaSearch } from "react-icons/fa";
import Data from "@/Shared-data/Data";

function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-full flex flex-row gap-3 items-center w-[600]">
      <Select>
        <SelectTrigger className="w-full md:w-[150px] outline-none border-none shadow-none text-center">
          <SelectValue placeholder={<span>Car</span>} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Pre-owned</SelectItem>
          <SelectItem value="system">International</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-6 bg-gray-300" />
      <Select>
        <SelectTrigger className="w-full md:w-[150px] outline-none border-none shadow-none text-center">
          <SelectValue placeholder={<span>Brand</span>} />
        </SelectTrigger>
        <SelectContent>
          {Data.carBrand.map((brand, index) => (
            <SelectItem value="brand.name">brand.name</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-6 bg-gray-300" />
      <Select>
        <SelectTrigger className="w-full md:w-[150px] outline-none border-none shadow-none text-center">
          <SelectValue placeholder={<span>Budget</span>} />
        </SelectTrigger>
        <SelectContent>
          {Data.Budget.map((budget, index) => (
            <SelectItem value="budget.amount">budget.amount</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <FaSearch className=" hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
