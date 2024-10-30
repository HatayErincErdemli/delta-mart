import ProductCategoryCard from "@/components/ProducCategoryCard";
import ProductCard from "@/components/ProductCard";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaHooli,
  FaLyft,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";
import { GiFeather } from "react-icons/gi";

function ShopPageContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const productsPerPage = isMobile ? 4 : 12;
  const totalProducts = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilter = () => {
    // Implement filtering logic here
    console.log("Filtering with:", filterText, "and sorting by:", sortBy);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-4">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Shop</h1>
        <nav className="text-sm">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <span className="mx-2 text-gray-500">/</span>
            </li>
            <li className="flex items-center text-gray-700">Shop</li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col items-center sm:flex-row flex-wrap gap-2 justify-center mb-8">
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <p className="text-gray-600 mb-2 md:mb-0">
          Showing {productsPerPage} results
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Filter by words"
            value={filterText}
            onChange={handleFilterChange}
            className="border rounded px-2 py-1"
          />
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border rounded px-2 py-1"
          >
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(productsPerPage)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* New section for icons */}
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

export default ShopPageContent;
