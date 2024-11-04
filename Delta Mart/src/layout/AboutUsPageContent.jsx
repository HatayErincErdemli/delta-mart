import Brands from "@/components/Brands";
import React from "react";

function AboutUsPageContent() {
  return (
    <div className="bg-white">
      {/* All sections */}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="max-w-xl mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-black">ABOUT US</h1>
              <p className="text-black mb-6">
                We know how large objects will act, but things on a small scale
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                Get Quote Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://picsum.photos/500/400"
                alt="Shopping"
                className="max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold mb-2 text-black">15K</h2>
              <p className="text-black">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-black">150K</h2>
              <p className="text-black">Monthly Visitors</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-black">15</h2>
              <p className="text-black">Countries Worldwide</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 text-black">100+</h2>
              <p className="text-black">Top Partners</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="px-4 py-16">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/1200/400"
              alt="Video thumbnail"
              className="w-full h-[400px] object-cover"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Section - Update existing team grid with social links */}
        <div className="px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <img
                  src={`https://picsum.photos/400/400?random=${member}`}
                  alt={`Team Member ${member}`}
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="font-semibold mb-2 text-black">Username</h3>
                <p className="text-black mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Big Companies Are Here
          </h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <Brands />
        </div>
      </div>

      {/* CTA Section - Full width background */}
      <div className="bg-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 flex items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Now Let's grow Yours</h2>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-md">
              Button
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/500/300"
              alt="CTA"
              className="max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPageContent;
