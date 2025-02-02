"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    discount: "Up to 10%",
    image:
      "/placeholder.svg?height=400&width=600",
    link: "/promos/iphone-14",
  },
  {
    id: 2,
    title: "Samsung S23 Ultra",
    discount: "Up to 15%",
    image: "/placeholder.svg?height=400&width=600",
    link: "/promos/samsung-s23",
  },
  {
    id: 3,
    title: "Google Pixel 8",
    discount: "Up to 12%",
    image: "/placeholder.svg?height=400&width=600",
    link: "/promos/pixel-8",
  },
];

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
    <div className="relative overflow-hidden bg-black" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
            <div className="relative h-[400px] w-full">
              {/* Content overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/apple-white.svg"
                    alt="Apple"
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                  <span className="text-white text-sm">{slide.title}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {slide.discount}
                  <span className="block text-2xl mt-1">off Voucher</span>
                </h2>
                <Button
                  variant="outline"
                  className="w-fit mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  Shop Now
                </Button>
              </div>

              {/* Background image */}
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
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
