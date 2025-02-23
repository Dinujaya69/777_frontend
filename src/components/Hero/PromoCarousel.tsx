"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { promoSlides } from "@/data/promoData";

export function PromoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [key, setKey] = React.useState(0); // Key to re-trigger animations

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setKey((prevKey) => prevKey + 1); // Force re-animation
      });

      // Auto-scroll every 4 seconds & restart animations
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
        setKey((prevKey) => prevKey + 1); // Force re-animation on scroll
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {promoSlides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-[800px] shrink-0">
            <div className="relative h-full w-full">
              <motion.div
                key={key} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 z-10 flex flex-col justify-center p-8 md:p-12 text-white"
              >
                {/* Title Animation */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="text-2xl md:text-3xl font-medium uppercase text-gray-300 tracking-widest">
                    {slide.title}
                  </span>
                </motion.div>

                {/* Discount Animation */}
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-snug"
                >
                  <span className="text-gray-100">{slide.discount}</span>
                </motion.h2>

                {/* Description Animation */}
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block mt-2 text-4xl md:text-6xl font-bold text-gray-200/90 tracking-wide leading-tight"
                >
                  {slide.description}
                </motion.span>

                {/* Button Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Button
                    variant="outline"
                    className="mt-6 w-fit px-6 py-3 text-base md:text-lg font-semibold uppercase border-2 border-red-500 text-white bg-transparent hover:bg-red-500 transition-all duration-300 shadow-md"
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </motion.div>

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-50"
                priority={slide.id === 1}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {promoSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
