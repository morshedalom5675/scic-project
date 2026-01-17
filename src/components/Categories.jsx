"use client";
import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const cats = [
    {
      name: "Fiction",
      count: "1.2k+ Books",
      icon: "📖",
      description: "Lose yourself in stories and imaginary worlds.",
      color: "from-blue-50 to-transparent",
    },
    {
      name: "Self-Help",
      count: "850+ Books",
      icon: "🧠",
      description: "Practical guides to help you build a better life.",
      color: "from-green-50 to-transparent",
    },
    {
      name: "Sci-Fi",
      count: "500+ Books",
      icon: "🚀",
      description: "Explore the thrilling journey of science and future.",
      color: "from-purple-50 to-transparent",
    },
    {
      name: "Biography",
      count: "300+ Books",
      icon: "✍️",
      description: "Inspirational stories from famous lives and legends.",
      color: "from-orange-50 to-transparent",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold">
              Explore our vast{" "}
              <span className="italic text-secondary">Library</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Discover your next favorite read by browsing our curated
              categories.
            </p>
          </div>
        </motion.div>

        {/* Categories Grid with Stagger Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cats.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative p-10 bg-base-100 border border-gray-100 rounded-[2.5rem] transition-all duration-500 cursor-pointer
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Rotate & Scale Animation */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-16 h-16 bg-white shadow-sm border border-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-8
                  transition-all duration-500"
                >
                  {cat.icon}
                </motion.div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-black group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>

                <p className="text-primary/70 font-bold text-xs mt-1 mb-4 uppercase tracking-widest">
                  {cat.count}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-black transition-colors">
                  {cat.description}
                </p>

                {/* Explore Now - Animated Line */}
                <div className="mt-6 flex items-center gap-2 text-black font-bold text-sm">
                  <span className="group-hover:mr-2 transition-all">
                    Explore Now
                  </span>
                  <div className="w-6 h-[2px] bg-secondary group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative Circle Animation */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.8 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/5 rounded-full transition-transform duration-700"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
