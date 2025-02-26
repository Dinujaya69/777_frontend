"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/common/Sidebar";
import { Header } from "@/components/common/Header";
import AnimatedBackground from "@/components/common/AnimatedBackground";

interface CatoLayoutProps {
  children: React.ReactNode;
}

const routeTitles: { [key: string]: string } = {
  "/": "Home",
  "/pages/products": "All Products",
  "/shirts": "T-Shirts",
  "/pages/aboutus": "About Us",
  "/pages/contactus": "Contact Us",
};

export default function CatoLayout({ children }: CatoLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const title = routeTitles[pathname] || "Welcome";

  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar />

      <div className="md:ml-60 min-h-screen flex flex-col">
        <Header />  
          <AnimatedBackground title={title} />

        <main>{children}</main>
      </div>
    </div>
  );
}
