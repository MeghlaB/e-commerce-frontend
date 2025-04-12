"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export const Nav3 = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <ul className="flex gap-6 text-sm font-semibold text-gray-800">
        <li
          onClick={() => handleNavigation("/")}
          className="cursor-pointer hover:text-blue-600"
        >
          Home
        </li>
        <li
          onClick={() => handleNavigation("/all-products")}
          className="cursor-pointer hover:text-blue-600"
        >
          All Product
        </li>
        <li
          onClick={() => handleNavigation("/about")}
          className="cursor-pointer hover:text-blue-600"
        >
          About
        </li>
        <li
          onClick={() => handleNavigation("/contact")}
          className="cursor-pointer hover:text-blue-600"
        >
          Contact Us
        </li>

        <li
          onClick={() => handleNavigation("/dashboard?role=user")}
          className="cursor-pointer hover:text-blue-600"
        >
          Contact Us
        </li>
      </ul>

      <div className="flex items-center gap-2 text-gray-800">
      <div
          onClick={() => handleNavigation("/wish")}
          className="cursor-pointer hover:text-blue-600"
        >
          Wishlist
        </div>
        <div className="relative flex items-center gap-3">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => handleNavigation("/cart")}
          >
            <FaCartShopping />
          </span>
          <span className="absolute -top-2 -right-2 text-white bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full font-bold">
            0
          </span>
        </div>
        <span className="text-sm font-semibold">$0.00</span>
      </div>
    </nav>
  );
};
