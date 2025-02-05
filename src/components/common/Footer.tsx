import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Brand</h3>
            <p className="text-gray-400">
              Innovative design solutions for modern challenges
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <Mail size={18} /> contact@brand.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <Phone size={18} /> +1 234 567 890
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <MapPin size={18} /> New York, NY
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "About",
                "Services",
                "Portfolio",
                "Contact",
                "Blog",
                "Careers",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
