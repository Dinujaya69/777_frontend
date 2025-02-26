"use client";

import type React from "react";
import SHR3 from "@/assets/T-shirts/shirt 3.png";
import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Minus,
  Plus,
  Share2,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg bg-white">
          <div
            className="relative h-[500px] w-full cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
          >
            <Image
              src={SHR3}
              alt="Star Wars T-shirt"
              fill
              className="object-contain"
              style={{
                transform: showZoom ? "scale(1.5)" : "scale(1)",
                transformOrigin: `${position.x}% ${position.y}%`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Star Wars (The force) tee
            </h1>
            <p className="mt-2 text-3xl font-bold text-gray-900">Rs 2,400.00</p>
            <span className="text-green-600 text-sm mt-1 inline-block">
              In Stock
            </span>
          </div>

          {/* Size Selector */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              SIZE: {selectedSize}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className="w-12 h-12"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-medium w-12 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <div className="flex gap-4">
              <Button className="flex-1">ADD TO CART</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <Button className="w-full bg-gray-900 hover:bg-gray-800">
              BUY IT NOW
            </Button>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=30&width=45"
              alt="Mastercard"
              width={45}
              height={30}
            />
            <Image
              src="/placeholder.svg?height=30&width=45"
              alt="Visa"
              width={45}
              height={30}
            />
          </div>

          {/* Product Info */}
          <div className="border-t pt-6">
            <Button variant="link" className="p-0 h-auto text-gray-600">
              Ask a Question
            </Button>
            <div className="mt-4">
              <p className="text-sm text-gray-600">SKU: 10</p>
              <p className="text-sm text-gray-600">
                Tags: funny, star wars, T-shirts
              </p>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
