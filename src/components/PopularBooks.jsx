import books from "../../public/data/books.json";
import BookCard from "./BookCard";
import Link from "next/link";

const PopularBooks = () => {
  // শুধুমাত্র প্রথম ৪টি বই দেখানোর জন্য slice ব্যবহার করা হয়েছে
  const featuredBooks = books.slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-secondary"></span>
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">
                Staff Picks
              </span>
            </div>
            <h2 className="text-5xl font-serif text-primary font-bold leading-tight">
              Most Popular <br />
              <span className="italic font-light text-gray-400 text-4xl md:text-5xl">
                Recommendations
              </span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0">
            <Link
              href="/books"
              className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all duration-300"
            >
              Explore All Books
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Decorative Element (Optional) */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-gray-50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
