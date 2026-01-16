// src/app/about/page.js
import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      {/* 1. Hero Section - একদম সেন্টারে */}
      <section className="py-32 px-6 text-center max-w-5xl mx-auto">
        <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
          Our Story
        </span>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter mb-8">
          Beyond Just <br /> 
          <span className="opacity-40">Printing Pages.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We are more than just a bookstore. We are a community of thinkers, creators, and lifelong learners dedicated to providing the best digital and physical resources.
        </p>
      </section>

      {/* 2. Full Width Image - ক্লিনিটি বজায় রাখতে */}
      <section className="px-6 md:px-20 mb-32">
        <div className="h-[500px] w-full relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Text Content - সহজ লেআউট */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2024, our goal is simple: to make knowledge accessible. We believe that everyone should have the tools they need to grow, regardless of where they are in the world.
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold mb-6">Curated with Care</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every book in our collection is handpicked by our team. We don’t just sell anything; we sell what we believe will truly make a difference in your life and career.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Contact/CTA - ব্যাকগ্রাউন্ডের সাথে মিল রেখে */}
      <section className="py-32 bg-white text-center border-t border-gray-100 mt-20">
        <h2 className="text-4xl font-bold mb-8">Want to talk to us?</h2>
        <p className="mb-10 text-gray-500">We are always looking for new ideas and collaborations.</p>
        <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all">
          Get in Touch
        </button>
      </section>
    </main>
  );
};

export default AboutPage;