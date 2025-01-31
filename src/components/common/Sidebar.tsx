"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Woman's Fashion",
    href: "/categories/womans-fashion",
    hasSubmenu: true,
  },
  {
    name: "Men's Fashion",
    href: "/categories/mens-fashion",
    hasSubmenu: true,
  },
  {
    name: "Electronics",
    href: "/categories/electronics",
    hasSubmenu: false,
  },
  {
    name: "Home & Lifestyle",
    href: "/categories/home-lifestyle",
    hasSubmenu: false,
  },
  {
    name: "Medicine",
    href: "/categories/medicine",
    hasSubmenu: false,
  },
  {
    name: "Sports & Outdoor",
    href: "/categories/sports-outdoor",
    hasSubmenu: false,
  },
  {
    name: "Baby's & Toys",
    href: "/categories/babies-toys",
    hasSubmenu: false,
  },
  {
    name: "Groceries & Pets",
    href: "/categories/groceries-pets",
    hasSubmenu: false,
  },
  {
    name: "Health & Beauty",
    href: "/categories/health-beauty",
    hasSubmenu: false,
  },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-sm">
      <nav className="flex flex-col py-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex items-center justify-between px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
          >
            <span>{category.name}</span>
            {category.hasSubmenu && (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
