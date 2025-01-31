"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import Logo from "@/assets/Logo.png";
import { SearchOverlay } from "./SearchOverlay";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Simulating cart item count update
    setCartItemCount(3);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              width={40}
              height={40}
              priority
              className="w-14 h-8"
            />
            <span className="text-xl font-bold text-black">
              777th Achievement
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pages/contact">Contact</NavLink>
            <NavLink href="/pages/about">About</NavLink>
            <NavLink href="/pages/login">Sign Up</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiSearch className="w-5 h-5 text-gray-700" />
            </button>
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <FiShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-black transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink
            href="/pages/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
          <MobileNavLink
            href="/pages/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </MobileNavLink>
          <MobileNavLink
            href="/pages/login"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </MobileNavLink>
        </div>
      </div>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-black transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-300"
  >
    {children}
  </Link>
);
