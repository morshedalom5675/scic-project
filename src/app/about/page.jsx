"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // অ্যানিমেশন ভ্যারিয়েন্ট
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <main className="min-h-screen bg-base-100 text-[#1a1a1a] overflow-x-hidden">
      {/* 1. Hero Section - Staggered Fade In */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-32 px-6 text-center max-w-5xl mx-auto"
      >
        <motion.span
          variants={fadeIn}
          className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block"
        >
          Our Story
        </motion.span>

        <motion.h1
          variants={fadeIn}
          className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter mb-8"
        >
          Beyond Just <br />
          <span className="opacity-30">Printing Pages.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          We are more than just a bookstore. We are a community of thinkers,
          creators, and lifelong learners dedicated to providing the best
          digital and physical resources.
        </motion.p>
      </motion.section>

      {/* 2. Full Width Image - Parallax Scroll Effect */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 md:px-20 mb-32"
      >
        <div className="h-[500px] w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
            alt="Library"
            className="w-full h-full object-cover"
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>
      </motion.section>

      {/* 3. Text Content - On Scroll Reveal */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary block"></span>
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded in 2024, our goal is simple: to make knowledge accessible.
              We believe that everyone should have the tools they need to grow,
              regardless of where they are in the world.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="border-t border-gray-200 pt-16"
          >
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-secondary block"></span>
              Curated with Care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Every book in our collection is handpicked by our team. We don’t
              just sell anything; we sell what we believe will truly make a
              difference in your life and career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Contact/CTA - Magnetic Effect Button */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-32 bg-base-100 text-center border-t border-gray-100 mt-20 relative overflow-hidden"
      >
        {/* Soft Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">
            Want to talk to us?
          </h2>
          <p className="mb-12 text-gray-500 text-lg">
            We are always looking for new ideas and collaborations.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-secondary transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
