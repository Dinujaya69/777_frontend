"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  ShoppingBag,
  Shirt,
  Info,
  Mail,
} from "lucide-react";
import Logo from "@/assets/Logo.png"; // Ensure this path is correct
import Image from "next/image";
import clsx from "clsx";

const categories = [
  { name: "Home", href: "/", icon: Home, hasSubmenu: false },
  {
    name: "All Products",
    href: "/products",
    icon: ShoppingBag,
    hasSubmenu: false,
  },
  { name: "T-Shirts", href: "/shirts", icon: Shirt, hasSubmenu: false },
  { name: "About", href: "/about", icon: Info, hasSubmenu: false },
  { name: "Contact", href: "/contact", icon: Mail, hasSubmenu: false },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <aside
      className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-[#08090a] text-white transform transition-all duration-300 ease-in-out shadow-2xl",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0",
        className
      )}
      aria-label="Sidebar"
      aria-expanded={isSidebarOpen}
      {...props}
    >
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <h1 className="text-xl font-bold text-white">Fashion Hub</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col py-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.name}
              href={category.href}
              className="flex items-center justify-between px-6 py-4 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out"
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-5 w-5 text-white" />
                <span>{category.name}</span>
              </div>
              {category.hasSubmenu && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-3 bg-black text-white fixed top-4 left-4 z-50 rounded-full shadow-lg hover:bg-gray-800 transition-colors border border-gray-700"
      >
        {isSidebarOpen ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5 transform rotate-180" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
