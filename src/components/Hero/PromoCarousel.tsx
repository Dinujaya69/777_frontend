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

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden bg-gray-900" ref={emblaRef}>
      <div className="flex">
        {promoSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex-[0_0_100%] min-w-0 h-[760px]"
          >
            <div className="relative h-[400px] w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={slide.animation}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 z-10 flex flex-col justify-center p-12"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/apple-white.svg"
                    alt="Brand"
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                  <span className="text-white text-sm">{slide.title}</span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {slide.discount}
                  <span className="block text-2xl mt-1">
                    {slide.description}
                  </span>
                </motion.h2>
                <Button
                  variant="outline"
                  className="w-fit mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors "
                >
                  Shop Now
                </Button>
              </motion.div>

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
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
