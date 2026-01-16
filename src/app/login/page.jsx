"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Book, Mail, Lock, LogIn, Github, Chrome } from "lucide-react";

const LoginPage = () => {
  // Framer Motion variants for smooth staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-24 selection:bg-primary selection:text-white">
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-5xl bg-base-100 rounded-[2rem] shadow-2xl overflow-hidden min-h-[650px] border border-white/10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Image & Branding */}
        <div className="hidden md:flex md:w-1/2 relative bg-secondary p-12 flex-col justify-between text-white">
          {/* Overlay Image */}
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary"></div>

          <motion.div className="relative z-10" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-12">
              <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                <Book className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">
                BookVerse
              </span>
            </Link>
            <h1 className="text-5xl font-bold leading-[1.1] mb-6">
              Unlock the World <br /> of Knowledge.
            </h1>
            <p className="text-white/80 text-lg font-light max-w-sm leading-relaxed">
              Join our community of book lovers and explorers. Your next great
              adventure starts with a single page.
            </p>
          </motion.div>

          <motion.div className="relative z-10" variants={itemVariants}>
            <div className="flex items-center gap-4 p-4 bg-black/10 rounded-2xl backdrop-blur-sm border border-white/5">
              <div className="text-sm italic opacity-80">
                "A book is a dream that you carry in your hand."
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-base-100">
          <motion.div
            className="mb-10 text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-black text-base-content mb-3">
              Welcome Back
            </h2>
            <p className="text-base-content/60 font-medium">
              Please enter your details to sign in.
            </p>
          </motion.div>

          <form className="space-y-5">
            {/* Email Input */}
            <motion.div className="form-control" variants={itemVariants}>
              <label className="label">
                <span className="label-text font-bold text-base-content/70">
                  Email Address
                </span>
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors w-5 h-5" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full h-14 bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-2xl pl-12 font-medium transition-all"
                  required
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div className="form-control" variants={itemVariants}>
              <label className="label">
                <span className="label-text font-bold text-base-content/70">
                  Password
                </span>
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-primary font-bold"
                >
                  Forgot?
                </Link>
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full h-14 bg-base-200/30 border-base-300 focus:border-primary focus:outline-none rounded-2xl pl-12 font-medium transition-all"
                  required
                />
              </div>
            </motion.div>

            {/* Remember Me */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <input
                type="checkbox"
                className="checkbox checkbox-primary rounded-lg"
              />
              <span className="text-sm font-semibold text-base-content/70 cursor-pointer">
                Remember for 30 days
              </span>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className="btn btn-primary w-full h-14 text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 mt-4 border-none hover:opacity-90 transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </motion.button>
          </form>

          {/* Social Logins */}
          <motion.div
            className="divider my-8 text-base-content/30 text-[10px] font-black uppercase tracking-widest"
            variants={itemVariants}
          >
            Or continue with
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <button className="btn btn-outline h-14 border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 rounded-2xl font-bold gap-3 transition-all">
              <Chrome className="w-5 h-5 text-primary" />
              Google
            </button>
            <button className="btn btn-outline h-14 border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 rounded-2xl font-bold gap-3 transition-all">
              <Github className="w-5 h-5 text-base-content" />
              Github
            </button>
          </motion.div>

          {/* Sign Up Footer */}
          <motion.p
            className="mt-10 text-center text-base-content/60 font-medium"
            variants={itemVariants}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-black hover:underline underline-offset-4"
            >
              Create Account
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
