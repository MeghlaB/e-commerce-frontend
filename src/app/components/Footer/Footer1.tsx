import Link from "next/link";
import React from "react";
import { FaArrowUp, FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer1 = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div>
            <Link href="/">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Kinbo<span className="text-green-600">B</span><span className="text-red-600">D</span>
            </h2>
            </Link>
            <p className="text-gray-600 mb-4">
              KinboBD is a trendy, modern e-commerce brand that blends fashion
              and technology. Perfect for selling stylish gadgets, cool
              clothing, and lifestyle essentials, it speaks to the bold,
              fashion-forward consumer who loves a touch of tech in everyday
              life.{" "}
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Subscribe Newsletter To Get Updated
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="email@example.com"
                className="px-4 py-2 w-full bg-gray-100 border border-gray-200 text-gray-700"
              />
              <button className="bg-yellow-500 text-white px-5 py-2 font-semibold hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              We’ll never share your email address with a third-party.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-black text-white p-2 rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="bg-black text-white p-2 rounded-full cursor-pointer">
                <FaTwitter />
              </div>
              <div className="bg-black text-white p-2 rounded-full cursor-pointer">
                <FaGoogle />
              </div>
              <div className="bg-black text-white p-2 rounded-full cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>Delivery</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Stores</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 invisible">-</h4>{" "}
              {/* for spacing */}
              <ul className="space-y-1 text-sm">
                <li>Legal Notice</li>
                <li>Secure payment</li>
                <li>Sitemap</li>
                <li>My account</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll to top icon */}
        <div className="fixed bottom-5 right-5">
          <div className="bg-yellow-500 text-white p-3 rounded-full cursor-pointer hover:bg-yellow-600">
            <span className="text-xl"><FaArrowUp /></span>
          </div>
        </div>
      </footer>
    </div>
  );
};
