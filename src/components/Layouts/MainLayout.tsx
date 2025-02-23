"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/common/Sidebar";
import { Header } from "@/components/common/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar />

      <div className="md:ml-60 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 ">{children}</main>
      </div>
    </div>
  );
}
