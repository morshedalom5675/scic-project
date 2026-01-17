"use client";
import React from "react";
import { motion } from "framer-motion";

const PromoSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[2.5rem] overflow-hidden relative shadow-2xl"
        >
          {/* Background Pattern Animation */}
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10 pointer-events-none"
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center relative z-10 min-h-[520px]">
            {/* Image Section with Floating & Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 p-10 md:p-16 flex justify-center"
            >
              <div className="relative group">
                {/* Glowing Aura */}
                <div className="absolute -inset-6 bg-secondary/30 blur-3xl rounded-full group-hover:bg-secondary/50 transition-colors duration-700 animate-pulse"></div>

                <motion.img
                  whileHover={{ rotate: -2, scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=500"
                  alt="Featured Book"
                  className="relative w-72 md:w-96 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Text Section with Staggered Fade-In */}
            <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left text-white">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-white/20"
              >
                Limited Time Offer
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-serif font-bold mt-8 leading-tight"
              >
                Enjoy <span className="text-secondary italic">30% Off</span>{" "}
                Your First Order
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
              >
                Discover your next favorite book at a special price. This
                exclusive welcome offer is available for a limited time only.
              </motion.p>

              {/* Buttons with Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  Claim Discount
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Browse Collection
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
