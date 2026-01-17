"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // অ্যানিমেশন ভেরিয়েন্টস
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Title Section with Stagger Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-serif text-primary leading-tight tracking-tight"
        >
          Winning in the <br />
          <span className="text-secondary relative inline-block italic">
            digital Age
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -bottom-2 left-0 w-full text-secondary/40"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 15C30 5 70 5 100 15C130 25 170 25 199 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-black max-w-lg mx-auto text-lg opacity-80"
        >
          Explore the collection of books that will change your perspective on
          life and technology.
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4">
        {/* Left Side: Review - Entrance from Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block text-left space-y-4 bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-sm"
        >
          <div className="rating rating-xs">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                className="mask mask-star-2 bg-primary"
                disabled
              />
            ))}
          </div>
          <p className="text-sm text-black italic leading-relaxed">
            "This platform has completely transformed how I discover new
            architectural and digital insights."
          </p>
          <div>
            <p className="font-bold text-primary">Judith Black</p>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
              CEO - Mahinva
            </p>
          </div>
        </motion.div>

        {/* Center: Real 3D Book Image with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Animated Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 z-30 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold text-center leading-tight shadow-2xl border-4 border-base-100 text-white transform rotate-12"
          >
            OVER <br /> 5 MILLION <br /> COPIES SOLD
          </motion.div>

          {/* Book Wrapper with Floating Motion */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full transform scale-90"></div>

            <div className="relative w-[280px] md:w-[320px] aspect-[3/4.5] shadow-[20px_30px_60px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:scale-105">
              <div className="absolute inset-y-0 left-0 w-[12px] bg-black/20 z-10 rounded-l-sm backdrop-blur-[2px]"></div>
              <img
                src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
                alt="Atomic Habits"
                className="w-full h-full object-cover rounded-sm border-r border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/5 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* CTA Button with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 z-20"
          >
            <button className="relative group px-12 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl active:scale-95">
              <span className="relative z-10">Start Reading Now</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Review - Entrance from Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block text-right space-y-4 bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-sm"
        >
          <div className="rating rating-xs justify-end w-full">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                className="mask mask-star-2 bg-primary"
                disabled
              />
            ))}
          </div>
          <p className="text-sm text-black italic leading-relaxed">
            "The curated list of books here is top-notch. Highly recommended for
            every digital creator."
          </p>
          <div>
            <p className="font-bold text-primary">Judith Black</p>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
              CEO - Mahinva
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Icon with Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-5 h-9 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
