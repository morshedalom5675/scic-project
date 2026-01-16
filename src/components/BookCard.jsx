"use client";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group relative w-full cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
        <img
          src={book?.coverImage || "https://via.placeholder.com/400x600"}
          alt={book?.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
          <button className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0 hover:bg-secondary hover:text-white">
            Quick View
          </button>
        </div>

        {/* Floating Badge (Optional) */}
        {book?.rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
            <span className="text-xs font-black text-primary">⭐ {book.rating}</span>
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="mt-6 space-y-2 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-serif font-bold text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-1">
            {book?.title || "Book Title"}
          </h3>
          <span className="text-lg font-black text-primary whitespace-nowrap">
            {book?.price} <span className="text-[10px] font-medium">TK</span>
          </span>
        </div>
        
        <p className="text-gray-400 text-sm font-medium tracking-wide">
          {book?.author || "Author Name"}
        </p>

        {/* Minimal Tags */}
        <div className="flex gap-2 pt-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-secondary bg-secondary/5 px-2 py-1 rounded">
            {book?.category || "Category"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;