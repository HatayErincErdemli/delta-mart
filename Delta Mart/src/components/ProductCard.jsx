import React from "react";

function ProductCard({ name, description, price, image }) {
  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-gray-800 font-bold text-lg mb-4">${price}</p>
        <div className="flex justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <div className="w-4 h-4 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
