"use client";
import { useState } from "react";
import {
  ChevronRight,
  Home,
  ShoppingBag,
  Shirt,
  Info,
  Mail,
} from "lucide-react";
import Link from "next/link";
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
  { name: "About", href: "/about", icon: Info, hasSubmenu: false }, // Fixed the href
  { name: "Contact", href: "/contact", icon: Mail, hasSubmenu: false },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <aside
      className={clsx(
        "fixed inset-y-0 left-0 z-50 w-72 transform transition-all duration-300 ease-in-out",
        "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0",
        className
      )}
      aria-label="Sidebar"
      aria-expanded={isSidebarOpen}
      {...props}
    >
      {/* Top Section with Glassmorphism Effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 backdrop-blur-sm" />

        {/* Logo Container */}
        <div className="relative p-8 space-y-6">
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
              <Image
                src="/api/placeholder/96/96"
                alt="Logo"
                width={96}
                height={96}
                className="relative w-24 h-24 rounded-full border-2 border-white/20 p-1 backdrop-blur-sm"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            777th Achievement
          </h1>
        </div>
      </div>

      {/* Navigation Menu with Hover Effects */}
      <nav className="mt-8 px-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeItem === category.name;

          return (
            <Link
              key={category.name}
              href={category.href}
              onClick={() => setActiveItem(category.name)}
              className={clsx(
                "flex items-center justify-between px-4 py-3 my-2 rounded-lg",
                "transition-all duration-200 ease-in-out group",
                "hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5",
                isActive
                  ? "bg-gradient-to-r from-purple-900/20 to-blue-900/20 shadow-md"
                  : "text-gray-400"
              )}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  className={clsx(
                    "w-5 h-5 transition-transform duration-200",
                    "group-hover:scale-110 group-hover:text-purple-400",
                    isActive ? "text-purple-400" : "text-gray-400"
                  )}
                />
                <span
                  className={clsx(
                    "font-medium transition-colors duration-200",
                    "group-hover:text-white",
                    isActive ? "text-white" : "text-gray-400"
                  )}
                >
                  {category.name}
                </span>
              </div>
              {category.hasSubmenu && (
                <ChevronRight
                  className={clsx(
                    "w-4 h-4 transition-transform duration-200",
                    "group-hover:translate-x-1",
                    isActive ? "text-purple-400" : "text-gray-400"
                  )}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={clsx(
          "md:hidden fixed top-4 left-4 z-50 p-3 rounded-full",
          "bg-gradient-to-r from-purple-600 to-blue-600",
          "shadow-lg shadow-purple-500/20",
          "hover:shadow-purple-500/40 transition-shadow",
          "border border-white/20 backdrop-blur-sm"
        )}
      >
        <ChevronRight
          className={clsx(
            "h-5 w-5 text-white transition-transform duration-300",
            isSidebarOpen ? "rotate-0" : "rotate-180"
          )}
        />
      </button>
    </aside>
  );
};

export default Sidebar;
