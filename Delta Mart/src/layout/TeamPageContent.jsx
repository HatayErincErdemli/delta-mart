import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function TeamPageContent() {
  const teamMembers = [
    {
      id: 1,
      name: "Julian Wan",
      role: "CEO & Founder",
      image: "https://picsum.photos/400/400?random=1",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Head",
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
    {
      id: 4,
      name: "Emma Wilson",
      role: "UX Designer",
      image: "https://picsum.photos/400/400?random=4",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 5,
      name: "David Miller",
      role: "Product Manager",
      image: "https://picsum.photos/400/400?random=5",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Sophie Taylor",
      role: "Content Strategist",
      image: "https://picsum.photos/400/400?random=6",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 7,
      name: "James Anderson",
      role: "Sales Director",
      image: "https://picsum.photos/400/400?random=7",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 8,
      name: "Lisa Brown",
      role: "HR Manager",
      image: "https://picsum.photos/400/400?random=8",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 9,
      name: "Robert Kim",
      role: "Technical Lead",
      image: "https://picsum.photos/400/400?random=9",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-16">
          <p className="text-sm text-gray-600 mb-4">WHAT WE DO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-8">
            Innovation tailored for you
          </h1>
          <div className="flex justify-center gap-2 text-sm">
            <a href="#" className="text-[#252B42]">
              Home
            </a>
            <span className="text-gray-400">→</span>
            <a href="#" className="text-[#23A6F0]">
              Team
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Grid - Full Width */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="col-span-1 md:col-span-2 h-[500px]">
          <img
            src="https://picsum.photos/1200/600?random=1"
            alt="Team member"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Team member"
            className="w-full h-[240px] object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Team member"
            className="w-full h-[240px] object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Team member"
            className="w-full h-[240px] object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=5"
            alt="Team member"
            className="w-full h-[240px] object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Team Members Section */}
        <div className="py-16">
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

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">
            Start your 14 days free trial
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-[#1a7ab3] transition-colors">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamPageContent;
