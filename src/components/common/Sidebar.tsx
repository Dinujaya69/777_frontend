"use client";

import { useState } from "react";
import { Home, ShoppingBag, Shirt, Info, Mail, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { name: "Home", href: "/", icon: Home },
  { name: "All Products", href: "/pages/products", icon: ShoppingBag },
  { name: "T-Shirts", href: "/shirts", icon: Shirt },
  { name: "About", href: "/pages/aboutus", icon: Info },
  { name: "Contact", href: "/pages/contact", icon: Mail },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${className}`}
        aria-label="Sidebar"
        aria-expanded={isSidebarOpen}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Logo Container */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20"
              >
                <Image
                  src="/api/placeholder/80/80"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white/20"
                />
              </motion.div>
            </div>
            <h1 className="mt-4 text-xl font-bold text-center">
              777th Achievement
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-grow py-6 px-4 overflow-y-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeItem === category.name;

              return (
                <motion.div
                  key={category.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={category.href}
                    onClick={() => setActiveItem(category.name)}
                    className={`flex items-center px-4 py-3 my-1 rounded-lg transition-all duration-200 ease-in-out ${
                      isActive
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{category.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-black text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default Sidebar;
