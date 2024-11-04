import Brands from "@/components/Brands";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function AboutUsPageContent() {
  const teamMembers = [
    {
      id: 1,
      name: "Gökhan Özdemir",
      role: "Project Owner",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635783306921?e=1736380800&v=beta&t=3ZFsSFY-iNjuMCRcebEH-I8oswbyIVf2DCkeCPg9JRI",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Hatay Erinç Erdemli",
      role: "Full Stack Developer",
      image: "https://picsum.photos/400/400?random=2",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://picsum.photos/400/400?random=3",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

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

        {/* Team Section */}
        <div className="px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-[#252B42] mb-16">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover mb-4"
                />
                <h3 className="font-bold text-[#252B42] mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.socials.facebook}
                    className="text-[#23A6F0] hover:text-[#1a7ab3]"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="text-[#23A6F0] hover:text-[#1a7ab3]"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-[#23A6F0] hover:text-[#1a7ab3]"
                  >
                    <FaTwitter size={20} />
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
