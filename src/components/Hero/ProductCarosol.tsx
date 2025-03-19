"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categories, products } from "@/data/productData";
import Image from "next/image";
import ProductModal from "@/components/Product/ProductModel";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

 const handleViewProduct = (product: any) => {
   setSelectedProduct(product);
   setShowModal(true);
   // Prevent scrolling when modal is open
   document.body.style.overflow = "hidden";
 };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12 space-x-8">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-2xl font-light tracking-wider",
                activeCategory === category ? "text-gray-900" : "text-gray-400"
              )}
            >
              {category}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="flex justify-center mb-12">
        <div className="w-16 h-px bg-red-400" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {products[activeCategory as keyof typeof products]?.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Quick Actions Overlay */}
                <AnimatePresence>
                  {hoveredProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white rounded-full"
                        onClick={() => handleViewProduct(product)}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white rounded-full"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-lg mb-4">${product.price.toFixed(2)}</p>

              {/* Select Options Button */}
              <motion.button
                className="w-full bg-[#8B1919] hover:bg-[#6B1414] text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleViewProduct(product)}
              >
                SELECT OPTIONS
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between mt-8">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {showModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute right-4 top-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white"
                  onClick={handleCloseModal}
                >
                  <X className="w-6 h-6" />
                </button>
                <ProductModal
                  product={selectedProduct}
                  onClose={handleCloseModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
