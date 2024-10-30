import React from "react";
import Header from "../layout/Header";

function ProductDetail() {
  return (
    <>
      <Header />
      <div className="py-8 px-4 md:px-6 lg:px-8 container mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Shop</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="relative">
            <div className="relative aspect-square bg-gray-100 mb-4">
              <img
                src="https://picsum.photos/600/600"
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                &#8249;
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                &#8250;
              </button>
            </div>
            <div className="flex gap-4">
              <img
                src="https://picsum.photos/150/150?random=1"
                alt="Thumbnail 1"
                className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75"
              />
              <img
                src="https://picsum.photos/150/150?random=2"
                alt="Thumbnail 2"
                className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-75"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-semibold mb-4">Floating Phone</h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              <span className="ml-2 text-gray-600">10 Reviews</span>
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-4">
              $1,139.33
            </div>

            <div className="mb-4">
              <span className="text-gray-600">Availability:</span>
              <span className="text-green-600 ml-2">In Stock</span>
            </div>

            <p className="text-gray-600 mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            {/* Color Options */}
            <div className="flex gap-3 mb-6">
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full bg-orange-500"></button>
              <button className="w-6 h-6 rounded-full bg-green-500"></button>
              <button className="w-6 h-6 rounded-full bg-navy-500"></button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex-grow">
                Select Options
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50">
                ♡
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50">
                🛒
              </button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-3 text-blue-500 border-b-2 border-blue-500">
              Description
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Additional Information
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Reviews (0)
            </button>
          </div>
          <div className="py-6">{/* Tab content will go here */}</div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
