"use client";

import { useSearchParams } from "next/navigation";
import AdminSidebar from "../components/ui/adminSidebar";
import UserSidebar from "../components/ui/user-sidebar";
import Topbar from "../components/ui/topper";
import SellerSidebar from "../components/ui/sellerSidebar";

// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const isAdmin = role === "admin";
  const isSeller = role === "seller";
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[250px] fixed h-full bg-gray-100">
          {isAdmin ? <AdminSidebar /> : isSeller ? <SellerSidebar/> : <UserSidebar />}
        </div>

        {/* Main Content */}
        <div className="md:ml-[250px] w-full">
          <Topbar />
          <main className="pt-6 px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
