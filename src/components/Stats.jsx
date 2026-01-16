"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// একটি ছোট কম্পোনেন্ট শুধু নাম্বারের জন্য
const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  const stats = [
    { label: "Books Curated", value: 720, suffix: "+", color: "bg-blue-50/50" },
    { label: "Happy Readers", value: 450, suffix: "+", color: "bg-green-50/50" },
    { label: "Famous Authors", value: 120, suffix: "+", color: "bg-purple-50/50" },
    { label: "Awards Won", value: 15, suffix: "+", color: "bg-orange-50/50" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold leading-tight">
              Our Journey in <br />
              <span className="text-secondary italic">Numbers</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
              We take pride in our growing community. Every number represents a story shared and a mind enlightened.
            </p>
            <div className="pt-4">
                <button className="btn btn-primary rounded-md px-8">Read Our Story</button>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-10 rounded-[2.5rem] ${stat.color} border border-gray-100 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-500`}
              >
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-500 group-hover:text-secondary transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;