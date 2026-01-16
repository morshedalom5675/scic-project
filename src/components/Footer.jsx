"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"; // আইকনগুলো ইম্পোর্ট করা হয়েছে

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Logo SVG */}
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  className="w-6 h-6"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold text-primary tracking-tight">
                BookVerse
              </span>
            </div>
            <p className="text-black/70 leading-relaxed max-w-xs">
              A thoughtfully curated digital library where stories, knowledge,
              and imagination come together. Explore your next world with us.
            </p>
          </div>

          {/* Links: Explore */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-black/70 font-medium transition-colors">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="hover:text-primary transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-primary transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-black/70 font-medium">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Reading Lists
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Community Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Stay Connected
            </h4>
            <p className="text-black/70 mb-6">
              Subscribe to get book updates and curated reads.
            </p>
            <form className="flex gap-2 group">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/10"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-black/50 font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">BookVerse</span>. Crafted for
            readers.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
