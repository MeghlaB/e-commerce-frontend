"use client";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export const Nav3 = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-white ">
        <ul className="flex gap-6 text-sm font-semibold text-gray-800">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/all-products">
            <li>All Product</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
          <li>Contact Us</li>
          </Link>
        </ul>

        <div className="flex items-center gap-2 text-gray-800">
          <div className="flex items-center gap-3 relative">
            <span className="text-2xl">
              <FaCartShopping />
            </span>
            <span className="absolute -top-2 -right-2  text-white bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </div>
          <span className="text-sm font-semibold">$0.00</span>
        </div>
      </nav>
    </div>
  );
};
