import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ui/Carousel";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductCarousel />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">Featured Products</h2>
        <h3 className="text-lg font-semibold">Bestseller Products</h3>
        <p className="text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ProductCarousel />
      <Footer />
    </div>
  );
}

export default HomePage;
