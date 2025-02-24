"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Upload,
  User,
  Pencil,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    file: null as File | null | undefined,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("idea");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, file: e.target.files?.[0] ?? null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          idea: "",
          file: null,
        });
      }, 3000);
    }, 1500);
  };

  const testimonials = [
    {
      name: "Sarah K.",
      text: "777th Achument turned my design idea into the perfect custom t-shirt! Super happy with the quality.",
    },
    {
      name: "Michael T.",
      text: "Great communication throughout the process. The team really understood my vision.",
    },
    {
      name: "Jessica L.",
      text: "Fast turnaround and excellent customer service. Will definitely order from them again!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
     

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center pt-24 pb-12 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-64 h-64 rounded-full bg-red-600 blur-3xl -top-10 -right-10"></div>
          <div className="absolute w-64 h-64 rounded-full bg-purple-600 blur-3xl -bottom-10 -left-10"></div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us or share your custom t-shirt idea! Let's bring
            your vision to life.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-8 px-4"
      >
        <div className="container mx-auto max-w-3xl">
          <div className="flex rounded-t-xl overflow-hidden mb-1">
            <button
              onClick={() => setActiveTab("idea")}
              className={`flex-1 py-3 font-medium transition-all ${
                activeTab === "idea"
                  ? "bg-white/15 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <span className="flex justify-center items-center">
                <Pencil className="w-4 h-4 mr-2" />
                Submit Your Idea
              </span>
            </button>
            <button
              onClick={() => setActiveTab("message")}
              className={`flex-1 py-3 font-medium transition-all ${
                activeTab === "message"
                  ? "bg-white/15 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <span className="flex justify-center items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send a Message
              </span>
            </button>
          </div>

          <div className="backdrop-blur-xl bg-white/10 p-8 rounded-xl shadow-lg rounded-tl-none">
            {activeTab === "idea" ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">
                  Submit Your T-Shirt Idea
                </h2>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                    <p className="text-gray-300">
                      Your idea has been submitted successfully. We'll be in
                      touch soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <User className="w-5 h-5 text-gray-300" />
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
                      <Mail className="w-5 h-5 text-gray-300" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-transparent flex-1 ml-3 outline-none text-white"
                        required
                      />
                    </div>

                    <div className="flex bg-white/10 p-3 rounded-lg">
                      <Pencil className="w-5 h-5 text-gray-300 mt-1" />
                      <textarea
                        name="idea"
                        placeholder="Describe your t-shirt idea in detail..."
                        value={form.idea}
                        onChange={handleChange}
                        rows={4}
                        className="bg-transparent flex-1 ml-3 outline-none text-white resize-none"
                        required
                      />
                    </div>

                    <div className="relative flex items-center bg-white/10 p-3 rounded-lg cursor-pointer group">
                      <Upload className="w-5 h-5 text-gray-300" />
                      <div className="flex-1 ml-3">
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {form.file
                            ? form.file.name
                            : "Upload reference image (optional)"}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold flex justify-center items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Submit Your Idea"
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
                  </form>
                )}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center bg-white/10 p-3 rounded-lg">
                      <User className="w-5 h-5 text-gray-300" />
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
                      <Mail className="w-5 h-5 text-gray-300" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-transparent flex-1 ml-3 outline-none text-white"
                        required
                      />
                    </div>

                    <div className="flex bg-white/10 p-3 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-gray-300 mt-1" />
                      <textarea
                        name="idea"
                        placeholder="Your message..."
                        value={form.idea}
                        onChange={handleChange}
                        rows={4}
                        className="bg-transparent flex-1 ml-3 outline-none text-white resize-none"
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold flex justify-center items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </motion.section>

    
      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-12 px-4 bg-gradient-to-b from-transparent to-black/30"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-400 font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
    </div>
  );
};

export default ContactPage;
