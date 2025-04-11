import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

export const Nav1 = () => {
  return (
    <div>
      <div className="">
        <div className="bg-yellow-500 text-gray-800 text-sm px-6 py-2 flex justify-between items-center">
          <div className="font-medium">Welcome to our store!</div>
          <div className="flex items-center space-x-5">
            <Link href="/wish">
            <button className="flex items-center space-x-1 cursor-pointer hover:text-black transition font-semibold">
              <FaRegHeart className="text-gray-800" />
              <span>Wishlist</span>
            </button>
            </Link>

            </div>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition">
              <span>Setting</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
          </div>
        </div>
      </div>
    
  );
};
