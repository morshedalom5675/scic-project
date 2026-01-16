"use client";
import React from "react";

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

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((cat, index) => (
            <div
              key={index}
              className="group relative p-10 bg-base-100 border border-gray-100 rounded-3xl transition-all duration-500 cursor-pointer
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-100`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 bg-white shadow-sm border border-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-8
                group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                >
                  {cat.icon}
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-black group-hover:text-secondary transition-colors">
                  {cat.name}
                </h3>

                <p className="text-black font-medium text-sm mt-1 mb-4 uppercase tracking-wider">
                  {cat.count}
                </p>

                <p className="text-black text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Explore */}
                <div className="mt-6 flex items-center gap-2 text-black font-bold text-sm">
                  <span>Explore Now</span>
                  <div className="w-6 h-[2px] bg-primary group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
