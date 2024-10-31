import BestSellerContent from "@/components/BestSellerContent";
import Brands from "@/components/Brands";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

function ProductDetailPage() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <BestSellerContent />
      <Brands />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
