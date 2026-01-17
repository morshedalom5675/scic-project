"use client";
import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#fafafa] px-10 py-16 md:px-16 md:py-20 border border-gray-100 shadow-sm"
        >
          {/* Animated Decorative Blurs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
          ></motion.div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                Stay connected with the{" "}
                <span className="italic text-secondary">world of books</span>
              </h2>
              <p className="mt-6 text-black/70 text-xl leading-relaxed">
                Get updates on newly added books, curated reading lists, and
                exclusive offers — straight to your inbox.
              </p>
            </motion.div>

            {/* Form with Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-lg mx-auto lg:mx-0"
            >
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="h-14 px-10 rounded-2xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-secondary transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 text-[10px] text-gray-400 text-center lg:text-left tracking-widest uppercase font-bold"
              >
                No spam. Just thoughtful reads and literary love.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
