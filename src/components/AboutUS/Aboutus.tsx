"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Shirt,
  Users,
  Clock,
  ThumbsUp,
  CheckCircle,
  Pencil,
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
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    };

  
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
                <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-white/20 to-white/5 flex items-center justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
        {/* Shop Info Cards */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-12 px-4"
            >
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.5 }}
                    className="backdrop-blur-md bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
                    <p className="text-gray-300">
                      We use only the highest quality materials for our custom
                      t-shirts to ensure comfort and durability.
                    </p>
                  </motion.div>
      
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.6 }}
                    className="backdrop-blur-md bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4">
                      <Pencil className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Custom Designs</h3>
                    <p className="text-gray-300">
                      Our talented designers will work with you to bring your unique
                      vision to life exactly as you imagined.
                    </p>
                  </motion.div>
      
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.7 }}
                    className="backdrop-blur-md bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Fast Turnaround</h3>
                    <p className="text-gray-300">
                      From concept to delivery, we pride ourselves on quick turnaround
                      times without sacrificing quality.
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
