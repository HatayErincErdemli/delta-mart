import Brands from "@/components/Brands";
import React from "react";

function AboutUsPageContent() {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        We’re here to help you grow your business. Our team is dedicated to
        providing the best service and support to our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-blue-600">15K</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-blue-600">150K</h2>
          <p className="text-gray-500">Products Sold</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-blue-600">15</h2>
          <p className="text-gray-500">Years in Business</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-blue-600">100+</h2>
          <p className="text-gray-500">Team Members</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/200/200?random=1"
            alt="Team Member 1"
            className="rounded-full mb-2 shadow-lg"
          />
          <p className="text-lg font-semibold text-black">Team Member 1</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/200/200?random=2"
            alt="Team Member 2"
            className="rounded-full mb-2 shadow-lg"
          />
          <p className="text-lg font-semibold text-black">Team Member 2</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/200/200?random=3"
            alt="Team Member 2"
            className="rounded-full mb-2 shadow-lg"
          />
          <p className="text-lg font-semibold text-black">Team Member 3</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Big Companies Are Here
      </h2>
      <Brands />
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Now Let’s Grow Yours
      </h2>
      <p className="text-lg text-gray-600 text-center">
        Join us and take your business to the next level. We’re excited to work
        with you!
      </p>
      <div className="text-center m-4">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUsPageContent;
