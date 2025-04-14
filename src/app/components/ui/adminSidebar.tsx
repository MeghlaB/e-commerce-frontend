"use client";

import Link from "next/link";
import { BarChart2, Users, Boxes, LayoutDashboard, Home } from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="h-screen w-[250px] bg-gray-800 text-white px-4 py-6 hidden md:block fixed top-0 left-0 z-40">
      <div className="text-2xl font-bold mb-10">Admin</div>
      <div className="pb-4" >
        <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
          <Home size={20} />
          Home
        </Link>
      </div>
      <nav className="space-y-4">
        <Link
          href="/dashboard?role=admin"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link
          href="/dashboard/order?role=admin"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Boxes size={20} />
          Oders
        </Link>
        <Link
          href="/dashboard/analytics?role=admin"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <BarChart2 size={20} />
          Analytics
        </Link>
        <Link
          href="/dashboard/user-management?role=admin"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Users size={20} />
          User Management
        </Link>
      </nav>
     
    </aside>
  );
};

export default AdminSidebar;
