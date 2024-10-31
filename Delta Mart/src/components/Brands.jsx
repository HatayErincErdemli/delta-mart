import React from "react";
import {
  FaHooli,
  FaLyft,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";
import { GiFeather } from "react-icons/gi";

function Brands() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 mb-8">
        <FaHooli className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
        <FaLyft className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
        <GiFeather className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
        <FaStripe className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
        <FaAws className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
        <FaRedditAlien className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
      </div>
    </div>
  );
}

export default Brands;
