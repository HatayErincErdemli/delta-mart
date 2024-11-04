import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function ContactPageContent() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center p-4 md:p-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-gray-800 mb-4">CONTACT US</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-4">
              Get in touch today!
            </h1>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-[#252B42]">
                Phone: <span className="font-bold">+451 215 215</span>
              </p>
              <p className="text-[#252B42]">
                Fax: <span className="font-bold">+451 215 215</span>
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0]">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0]">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/800/600"
              alt="Happy family shopping"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Visit Office Section */}
        <section className="py-16 px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#252B42] mb-4">
            We help small businesses
          </h2>
          <h3 className="text-center text-2xl md:text-3xl font-bold text-[#252B42] mb-12">
            with big ideas
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="text-center p-6">
              <FiPhone className="w-20 h-20 text-[#23A6F0] mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                georgia.young@example.com
              </p>
              <p className="text-sm text-gray-600 mb-4">
                georgia.young@ple.com
              </p>
              <button className="font-bold text-sm mb-2">Get Support</button>
              <button className="block w-full py-3 px-4 text-[#23A6F0] border border-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                Submit Request
              </button>
            </div>

            {/* Location Card */}
            <div className="text-center p-6 bg-[#252B42] text-white">
              <FiMapPin className="w-20 h-20 text-[#23A6F0] mx-auto mb-4" />
              <p className="text-sm mb-2">georgia.young@example.com</p>
              <p className="text-sm mb-4">georgia.young@ple.com</p>
              <button className="font-bold text-sm mb-2">Get Support</button>
              <button className="block w-full py-3 px-4 text-white border border-white rounded-md hover:bg-white hover:text-[#252B42] transition-colors">
                Submit Request
              </button>
            </div>

            {/* Mail Card */}
            <div className="text-center p-6">
              <FiMail className="w-20 h-20 text-[#23A6F0] mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                georgia.young@example.com
              </p>
              <p className="text-sm text-gray-600 mb-4">
                georgia.young@ple.com
              </p>
              <button className="font-bold text-sm mb-2">Get Support</button>
              <button className="block w-full py-3 px-4 text-[#23A6F0] border border-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                Submit Request
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-4">
          <p className="text-sm font-bold text-gray-800 mb-4">
            WE Can't WAIT TO MEET YOU
          </p>
          <h2 className="text-4xl font-bold text-[#252B42] mb-6">Let's Talk</h2>
          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-[#1a7ab3] transition-colors">
            Try it free now
          </button>
        </section>
      </div>
    </div>
  );
}

export default ContactPageContent;
