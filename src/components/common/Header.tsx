"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { User } from "lucide-react";
import { SearchOverlay } from "./SearchOverlay";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    // Simulating cart item count update
    setCartItemCount(3);
  }, []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 md:left-60 h-16 bg-[#08090a] border-b border-gray-700 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div></div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <FiSearch className="w-5 h-5 text-white" />
            </button>
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-700 rounded-full transition-colors relative"
            >
              <FiShoppingCart className="w-5 h-5 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5 text-white" />
              ) : (
                <FiMenu className="w-5 h-5 text-white" />
              )}
            </button>
            <div>
              {!signedUp ? (
                <button
                  onClick={() => setSignedUp(true)}
                  className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition-colors"
                >
                  Sign Up
                </button>
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#08090a] transform ${
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
    className="text-white hover:text-gray-300 transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
