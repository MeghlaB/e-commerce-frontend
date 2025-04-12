"use client";
import { useSearchParams } from "next/navigation";
import AdminSidebar from "../components/ui/adminSidebar";
import UserSidebar from "../components/user-sidebar";
import Topbar from "../components/ui/topper";

export default function DashboardHome() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role')
  const isAdmin =  role === 'admin'
    return (
      <div>
        { isAdmin ?<AdminSidebar/>:<UserSidebar/>}
        <div className="md:ml-[250px]">
        <Topbar />
        <main className="pt-20 px-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
          <p>
            This is your {isAdmin ? "admin" : "user"} panel where you can manage
            users, content, and more.
          </p>
        </main>
      </div>
      </div>
    );
  }
  