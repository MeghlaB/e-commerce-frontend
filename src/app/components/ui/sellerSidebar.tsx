"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  HomeIcon,
  ShoppingCart,
  PackagePlus,
  ListOrdered,
  Heart,
  User,
  Home,
} from "lucide-react";

const SellerSidebar = () => {
  return (
    <aside className="h-screen w-[250px] bg-gray-800 text-white px-4 py-6 hidden md:block fixed top-0 left-0 z-40">
      <div className="text-2xl font-bold mb-10">Seller</div>
      <div className="pb-4">
        <Link href="/dashboard/seller/home" className="flex items-center gap-3 hover:text-gray-300">
          <Home size={20} />
          Home
        </Link>
      </div>
      <nav className="space-y-4">
        <Link
          href="/dashboard/seller/add-product"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <PackagePlus size={20} />
          Add Product
        </Link>
        <Link
          href="/dashboard/seller/orders"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <ListOrdered size={20} />
          Orders
        </Link>
        <Link
          href="/dashboard/seller/products"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <ShoppingCart size={20} />
          Products
        </Link>
        <Link
          href="/dashboard/user-profile"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <User size={20} />
          Seller Profile
        </Link>
      </nav>
    </aside>
  );
};

export default SellerSidebar;
