"use client";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: "01",
      title: "Our Vision",
      desc: "We aim to make world-class literature accessible to everyone, everywhere. Bridging timeless classics with modern masterpieces.",
      align: "left",
    },
    {
      id: "02",
      title: "Handpicked Quality",
      desc: "Every book is thoughtfully curated to ensure readers experience only meaningful, high-quality content.",
      align: "right",
    },
    {
      id: "03",
      title: "Reader First Experience",
      desc: "A distraction-free platform designed to help readers stay immersed in stories that truly matter.",
      align: "left",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black leading-tight">
            Built for readers, powered by{" "}
            <span className="italic text-secondary">stories</span>
          </h2>
          <p className="text-black/70 mt-5 text-xl leading-relaxed">
            Every detail of BookVerse is crafted to enhance the joy of reading.
          </p>
        </div>

        {/* Zig Zag Content */}
        <div className="space-y-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex ${
                item.align === "right" ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className="relative max-w-2xl">
                {/* Big Background Number */}
                <span
                  className={`absolute -top-14 ${
                    item.align === "right" ? "-right-10" : "-left-10"
                  } text-[150px] font-serif font-bold text-black/5 select-none`}
                >
                  {item.id}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-black italic mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-black/80 text-xl leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div
                  className={`mt-8 h-[3px] w-20 bg-secondary ${
                    item.align === "right" ? "ml-auto" : ""
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
