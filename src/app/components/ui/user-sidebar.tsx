"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  HomeIcon,
  ShoppingCart,
  Package,
  Heart,
  User,
  Home,
} from "lucide-react";

const UserSidebar = () => {
  return (
    <aside className="h-screen w-[250px] bg-gray-800 text-white px-4 py-6 hidden md:block fixed top-0 left-0 z-40">
      <div className="text-2xl font-bold mb-10">User</div>
      <div className="pb-4">
        <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
          <Home size={20} />
          Home
        </Link>
      </div>
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <LayoutDashboard size={20} />
          User-Dashboard
        </Link>
        <Link
          href="/dashboard/user/user-home"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <HomeIcon size={20} />
          User-Home
        </Link>
        <Link
          href="/dashboard/user/user-cart"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <ShoppingCart size={20} />
          Cart
        </Link>
        <Link
          href="/dashboard/user/user-order"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Package size={20} />
          Order
        </Link>
        <Link
          href="/dashboard/user/user-wish-list"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Heart size={20} />
          Wish-List
        </Link>
        <Link
          href="/dashboard/user/user-profile"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <User size={20} />
          User-Profile
        </Link>
      </nav>
    </aside>
  );
};

export default UserSidebar;
