"use client";
// app/dashboard/layout.tsx





export default function DashboardLayout({
  children,
 
}: {
  children: React.ReactNode;
 
}) {
  
  return (
    <div>
  
      
      
        {/* the left margin remains always the same , so that in little screen it breaks the design
        . thats why i added md */}
      
        <main >{children}</main>
      
    </div>
  );
}
