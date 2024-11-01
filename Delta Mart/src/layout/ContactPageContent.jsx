import React from "react";

function ContactPageContent() {
  return (
    <div className="p-4 md:p-8 bg-white">
      <section className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Get in touch today!
        </h1>
        <p className="text-gray-600 mb-4">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <p className="text-gray-700 mb-2">
          Phone: <span className="font-semibold">+451 215 215</span>
        </p>
        <p className="text-gray-700">
          Fax: <span className="font-semibold">+451 215 215</span>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Add social media icons here */}
          <a href="#" className="text-blue-500">
            Facebook
          </a>
          <a href="#" className="text-blue-500">
            Instagram
          </a>
          <a href="#" className="text-blue-500">
            Twitter
          </a>
        </div>
        <img
          src="https://via.placeholder.com/300x600" // Replace with your image URL
          alt="Placeholder"
          className="mx-auto rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black text-center">
          We help small businesses with big ideas
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="border p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col">
                <p className="text-gray-800">georgia.young@example.com</p>
              </div>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Get Support
                </button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-md">
            <p className="text-gray-800">georgia.young@example.com</p>
            <div className="flex space-x-2 mt-2 md:mt-0">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Get Support
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          WE Can't WAIT TO MEET YOU
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full md:w-auto">
          Let’s Talk
        </button>
      </section>
    </div>
  );
}

export default ContactPageContent;
