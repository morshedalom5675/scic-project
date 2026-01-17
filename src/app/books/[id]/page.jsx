import books from "../../../../public/data/books.json";
import Image from "next/image";
import {
  Star,
  BookOpen,
  Languages,
  Building2,
  Calendar,
  Layers,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

const BookDetailsPage = async ({ params }) => {
  // ১. params কে await করুন (Next.js 15 এ এটি বাধ্যতামূলক)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // ২. বুক খুঁজে বের করুন (String ID এর জন্য সরাসরি চেক করা ভালো)
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        <h2 className="text-3xl font-black text-primary">Book Not Found</h2>
        <p className="text-base-content/60 mt-2">ID: {id} is not valid.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 bg-base-100 p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10">
          {/* Left: Book Cover Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[350px] aspect-[2/3] group">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="rounded-[1.5rem] shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Quick Stats below image */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[350px] mt-8">
              <div className="bg-base-200 p-4 rounded-2xl text-center">
                <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">
                  Reviews
                </p>
                <p className="text-sm font-black">
                  {book.totalReviews.toLocaleString()}+
                </p>
              </div>
              <div className="bg-base-200 p-4 rounded-2xl text-center">
                <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">
                  In Stock
                </p>
                <p className="text-sm font-black text-secondary">
                  {book.stock} units
                </p>
              </div>
            </div>
          </div>

          {/* Right: Book Details Section */}
          <div className="flex flex-col justify-center">
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider border border-secondary/20">
                {book.category}
              </span>
              <div className="flex items-center gap-1 text-orange-500 font-bold">
                <Star className="w-5 h-5 fill-current" />
                <span>{book.rating}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-2">
              {book.title}
            </h1>
            <p className="text-xl font-medium text-base-content/60 mb-6">
              by{" "}
              <span className="text-base-content font-bold underline decoration-primary/30 underline-offset-4">
                {book.author}
              </span>
            </p>

            <p className="text-4xl font-black text-primary mb-8">
              ৳ {book.price}
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary/50">
                Description
              </h3>
              <p className="text-lg leading-relaxed text-base-content/80 font-medium italic border-l-4 border-primary/20 pl-6">
                &quot;{book.description}&quot;
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold bg-base-200 px-3 py-1 rounded-md opacity-70"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 bg-base-200 rounded-3xl border border-base-300 mb-10">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary opacity-60" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase opacity-50">
                    Pages
                  </span>
                  <span className="font-bold text-sm">{book.pages}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages className="w-5 h-5 text-primary opacity-60" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase opacity-50">
                    Language
                  </span>
                  <span className="font-bold text-sm">{book.language}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary opacity-60" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase opacity-50">
                    Publisher
                  </span>
                  <span className="font-bold text-sm leading-tight">
                    {book.publisher}
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg flex-1 rounded-2xl text-white font-bold gap-2 shadow-xl shadow-primary/20">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="btn btn-outline btn-lg flex-1 rounded-2xl font-bold hover:bg-secondary">
                Buy Now
              </button>
            </div>

            <p className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-secondary mt-6">
              <CheckCircle2 className="w-4 h-4" />
              Free delivery on orders over ৳ 1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
