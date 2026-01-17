"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
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
            <ul className="space-y-4 text-black/70 font-medium">
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
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/"
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

          {/* Links: Support & Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-black/70 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Stay Connected
            </h4>
            <p className="text-black/70 mb-6 text-sm">
              Subscribe to get book updates and curated reads directly to your
              inbox.
            </p>
            <form className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-12 pl-4 pr-12 rounded-xl border border-gray-200 bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all shadow-md active:scale-90"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[10px] text-black/40 px-1 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-black/50 font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-bold">BookVerse</span>. Crafted
            with ❤️ for readers.
          </p>

          {/* Social Icons with Tooltips look */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <Linkedin size={18} />, link: "#" },
              { icon: <Github size={18} />, link: "#" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.link}
                className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
