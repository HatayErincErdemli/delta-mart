import React from "react";
import PropTypes from "prop-types";

function ProductCategoryCard({ image, name, itemCount }) {
  return (
    <div
      className="w-48 h-48 bg-cover bg-center flex flex-col justify-center items-center text-white text-center rounded-lg shadow-md relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 px-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm">{itemCount} items</p>
      </div>
    </div>
  );
}

ProductCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default ProductCategoryCard;
