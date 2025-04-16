"use client";


import AdminSidebar from "../components/ui/adminSidebar";
import UserSidebar from "../components/ui/user-sidebar";
import Topbar from "../components/ui/topper";
import SellerSidebar from "../components/ui/sellerSidebar";
import { useUserRole } from "@/hooks/useUserRole";
import { useAuth } from "@/context/AuthProvider";

// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const { role } = useUserRole(user?.email);
  console.log(role, "dashboard");


  const isAdmin = role === "admin";
  const isSeller = role === "seller";
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[250px] fixed h-full bg-gray-100">
          {isAdmin ? <AdminSidebar /> : isSeller ? <SellerSidebar/> : <UserSidebar />}
          {/* <SellerSidebar /> */}
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
