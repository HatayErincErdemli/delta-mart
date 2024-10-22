import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ui/Carousel";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col gap-4">
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
