"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "@/hooks/useCart"; // ✅ Import your custom cart hook

export const Nav3 = () => {
  const router = useRouter();
  const { cart } = useCart(); // ✅ Get cart from context

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // ✅ Calculate total cart price (optional)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <ul className="flex gap-6 text-sm font-semibold text-gray-800">
        <li onClick={() => handleNavigation("/")} className="cursor-pointer hover:text-blue-600">
          Home
        </li>
        <li onClick={() => handleNavigation("/all-products")} className="cursor-pointer hover:text-blue-600">
          All Product
        </li>
        <li onClick={() => handleNavigation("/about")} className="cursor-pointer hover:text-blue-600">
          About
        </li>
        <li onClick={() => handleNavigation("/contact")} className="cursor-pointer hover:text-blue-600">
          Contact Us
        </li>
        <li onClick={() => handleNavigation(`/dashboard/`)} className="cursor-pointer hover:text-blue-600">
          Dashboard
        </li>
      </ul>

      <div className="flex items-center gap-2 text-gray-800">
        <div onClick={() => handleNavigation("/wish")} className="cursor-pointer hover:text-blue-600">
          Wishlist
        </div>

        <div className="relative flex items-center gap-3">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => handleNavigation("/cart")}
          >
            <FaCartShopping />
          </span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 text-white bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full font-bold text-xs">
              {cart.length}
            </span>
          )}
        </div>

        <span className="text-sm font-semibold">₹{totalPrice.toFixed(2)}</span>
      </div>
    </nav>
  );
};
