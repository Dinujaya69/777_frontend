import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Printer,
  Shirt,
  Star,
  Trophy,
  Users,
  Clock,
  ThumbsUp,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Shirt, label: "T-Shirts Printed", value: "50,000+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: ThumbsUp, label: "Quality Rating", value: "4.9/5" },
  ];

  const socialLinks = [
    { icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: Facebook, color: "bg-blue-600" },
    { icon: Twitter, color: "bg-blue-400" },
    { icon: Youtube, color: "bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden pt-32 pb-16 px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[40vh] w-[40vh] rounded-full bg-gradient-to-r from-white/5 to-transparent"
              animate={{
                x: ["0%", "100%", "0%"],
                y: ["0%", "100%", "0%"],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                delay: i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${30 * i}%`,
                top: `${20 * i}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              777th Achument
            </h1>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Crafting premium custom t-shirts that tell your story. We blend
              artistic vision with quality materials to create wearable
              masterpieces.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-white/20 to-white/5 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 px-4 relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 flex items-center justify-center mb-6"
              >
                <Printer className="w-8 h-8 text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Premium Printing</h3>
              <p className="text-gray-400">
                State-of-the-art printing technology ensuring vibrant,
                long-lasting designs that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/10 flex items-center justify-center mb-6"
              >
                <Star className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Quality Materials</h3>
              <p className="text-gray-400">
                Premium cotton blends and sustainable fabrics that feel as good
                as they look.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 flex items-center justify-center mb-6"
              >
                <Trophy className="w-8 h-8 text-green-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Custom Design</h3>
              <p className="text-gray-400">
                Expert designers ready to bring your vision to life with unique,
                personalized artwork.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact & Social Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`${social.color} p-4 rounded-full`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="mailto:contact@777thachument.com"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contact@777thachument.com</span>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
