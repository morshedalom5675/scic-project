"use client";

import React, { useMemo, useState } from "react";
import books from "../../../public/data/books.json";
import BookCard from "@/components/BookCard";

const AllBooksPage = () => {
  const [search, setSearch] = useState("");

  // 🔍 Search filter
  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      `${book.title} ${book.author}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Explore Our <span className="italic text-secondary">Library</span>
          </h1>
          <p className="mt-4 text-gray-500 text-lg">
            Discover handpicked books across productivity, fiction, finance, and
            more.
          </p>
        </div>

        {/* ===== Search Bar ===== */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by book title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-14 pr-4 rounded-full border border-gray-200 bg-white 
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all text-gray-700"
            />

            {/* Search Icon */}
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </span>
          </div>
        </div>

        {/* ===== Books Grid ===== */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          /* ===== Empty State ===== */
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-700">
              No books found 😔
            </h3>
            <p className="text-gray-500 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBooksPage;
