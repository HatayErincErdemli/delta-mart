import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

const products = [
  {
    season: "SUMMER 2020",
    name: "Vita Classic Product",
    description:
      "We know how large objects will act, but things on a small scale.",
    price: 16.48,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    season: "AUTUMN 2020",
    name: "Vita Deluxe Product",
    description: "Discover our premium range for the cooler months ahead.",
    price: 24.99,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    season: "WINTER 2021",
    name: "Vita Cozy Product",
    description: "Stay warm and stylish with our winter collection.",
    price: 29.99,
    image: "https://picsum.photos/400/300?random=3",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="w-full max-w-sm mx-auto bg-emerald-600 text-white rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        <p className="text-sm font-semibold">{currentProduct.season}</p>
        <h2 className="text-3xl font-bold">{currentProduct.name}</h2>
        <p className="text-sm">{currentProduct.description}</p>
        <p className="text-3xl font-bold">${currentProduct.price}</p>
        <div className="flex items-center justify-between space-x-2">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button className="flex-grow bg-emerald-400 hover:bg-emerald-500 text-white">
            ADD TO CART
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex justify-center space-x-2 py-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
