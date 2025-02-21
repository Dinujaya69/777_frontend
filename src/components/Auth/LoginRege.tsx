"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[40vh] w-[40vh] rounded-full bg-gradient-to-r from-white/10 to-transparent"
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                777th Achument
              </h1>
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-white to-gray-400 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <p className="text-gray-300 mt-4">Premium T-shirt Printing</p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <Alert
                      variant="destructive"
                      className="bg-red-500/20 border-red-500/50"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-200">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <Alert
                      variant="destructive"
                      className="bg-red-500/20 border-red-500/50"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <AnimatePresence>
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="confirmPassword"
                        className="text-gray-200"
                      >
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                      {errors.confirmPassword && (
                        <Alert
                          variant="destructive"
                          className="bg-red-500/20 border-red-500/50"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            {errors.confirmPassword}
                          </AlertDescription>
                        </Alert>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white/90 to-gray-200 text-black hover:from-white hover:to-gray-300 hover:shadow-lg transition-all duration-300"
                  >
                    {isLogin ? "Login" : "Register"}
                  </Button>
                </motion.div>
              </motion.form>
            </AnimatePresence>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthPage;
