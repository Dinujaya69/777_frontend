"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = ({ title }: { title: string }) => {
  const [positions, setPositions] = useState<{ left: string; top: string }[]>(
    []
  );

  useEffect(() => {
    const newPositions = Array.from({ length: 5 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setPositions(newPositions);
  }, []); 
  return (
    <div className="relative w-full h-[280px] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center px-8 overflow-hidden">
      {/* Title aligned to the left */}
      <motion.h1
        className="text-white text-5xl font-bold relative z-10 p-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute h-[15vh] w-[15vh] rounded-full bg-gradient-to-r from-white/10 to-transparent"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={pos} 
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
