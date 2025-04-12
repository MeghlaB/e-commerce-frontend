"use client";

import { useSearchParams } from "next/navigation";
import AdminSidebar from "../components/ui/adminSidebar";
import UserSidebar from "../components/user-sidebar";
import Topbar from "../components/ui/topper";

// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const isAdmin = role === "admin";
  return (
    <div>
       <div className="flex">
      {/* Sidebar */}
      <div className="w-[250px] fixed h-full bg-gray-100">
        {isAdmin ? <AdminSidebar /> : <UserSidebar />}
      </div>

      {/* Main Content */}
      <div className="md:ml-[250px] w-full">
        <Topbar />
        <main className="pt-20 px-6">{children}</main>
      </div>
    </div>
    </div>
  );
}
