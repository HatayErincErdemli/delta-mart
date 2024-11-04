import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Logo/Website Name */}
        <h2 className="text-2xl font-bold mb-8 text-[#1E293B]">Bandage</h2>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3]">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#1E293B]">
              Company Info
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#1E293B]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#1E293B]">
              Features
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  User Analytic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#1E293B]">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  IOS & Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#1E293B]">
              Get In Touch
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 text-sm bg-[#23A6F0] text-white rounded-md hover:bg-[#1a7ab3] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2"
              >
                Subscribe
              </button>
              <p className="text-sm text-gray-500">Lore imp sum dolor Amit</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
