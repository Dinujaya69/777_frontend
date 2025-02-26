"use client";

import { motion } from "framer-motion";

const AnimatedBackground = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full bg-[#0a0b0c] py-6 flex justify-center items-center shadow-md">
      <motion.h1
        className="text-white text-3xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-10 w-10 rounded-full bg-gradient-to-r from-white/10 to-transparent"
          animate={{
            x: ["0%", "100%", "0%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            delay: i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${30 * i}%`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
