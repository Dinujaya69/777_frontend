"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Upload, User, Pencil } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", idea: "", file: null as File | null | undefined });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setForm({ ...form, [name]: value });
 };
 
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, file: e.target.files?.[0] ?? null });
};
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
 };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center pt-32 pb-12 px-4"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Get in touch with us or share your custom t-shirt idea!
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-12 px-4"
      >
        <div className="container mx-auto max-w-3xl backdrop-blur-xl bg-white/10 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Submit Your Idea
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center bg-white/10 p-3 rounded-lg">
              <User className="w-6 h-6 text-gray-300" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent flex-1 ml-3 outline-none text-white"
                required
              />
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg">
              <Pencil className="w-6 h-6 text-gray-300" />
              <input
                type="text"
                name="idea"
                placeholder="Describe Your Idea"
                value={form.idea}
                onChange={handleChange}
                className="bg-transparent flex-1 ml-3 outline-none text-white"
                required
              />
            </div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg cursor-pointer">
              <Upload className="w-6 h-6 text-gray-300" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-transparent flex-1 ml-3 text-white file:hidden"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold"
            >
              Submit Idea
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Shop Contact Details */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Our Contact Details</h2>
        <div className="space-y-4">
          <motion.p className="flex items-center justify-center space-x-2 text-gray-300">
            <Mail className="w-6 h-6 text-red-500" />
            <span>support@777thachument.com</span>
          </motion.p>
          <motion.p className="flex items-center justify-center space-x-2 text-gray-300">
            <Phone className="w-6 h-6 text-red-500" />
            <span>+123 456 7890</span>
          </motion.p>
          <motion.p className="flex items-center justify-center space-x-2 text-gray-300">
            <MapPin className="w-6 h-6 text-red-500" />
            <span>777th Achument Street, NY, USA</span>
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
