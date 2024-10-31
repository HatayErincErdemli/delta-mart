import React from "react";

const products = [
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=1", // Placeholder image
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=2", // Placeholder image
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=3", // Placeholder image
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=4", // Placeholder image
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=5", // Placeholder image
  },
  {
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    imageUrl: "https://picsum.photos/200/300?random=6", // Placeholder image
  },
];

function BestSellerContent() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Bestseller Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.department}</p>
              <p className="text-gray-500 line-through">
                {product.originalPrice}
              </p>
              <p className="text-xl font-bold text-blue-600">
                {product.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerContent;
