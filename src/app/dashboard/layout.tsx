// app/dashboard/layout.tsx

import Sidebar from "../components/ui/adminSidebar";
import Topbar from "../components/ui/topper";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[250px]"> 
        {/* the left margin remains always the same , so that in little screen it breaks the design
        . thats why i added md */}
        <Topbar />
        <main className="pt-20 px-6">{children}</main>
      </div>
    </div>
  );
}
