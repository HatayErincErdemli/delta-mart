import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Delta Mart
          </Link>
          <div className="flex items-center space-x-4">
            <FaSearch className="cursor-pointer" />
            <Link to="/profile">
              <FaUser />
            </Link>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="block hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="block hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <nav className={`mt-4 ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/account" className="block hover:text-gray-300">
                Account
              </Link>
            </li>
            <li>
              <Link to="/settings" className="block hover:text-gray-300">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" className="block hover:text-gray-300">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
