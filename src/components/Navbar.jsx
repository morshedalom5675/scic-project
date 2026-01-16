"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-2 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className={`navbar w-full px-4 md:px-6 transition-all duration-300
          ${
            scrolled
              ? "bg-secondary text-white shadow-lg rounded-2xl"
              : "bg-base-100/80 backdrop-blur-md border border-white/20 rounded-xl"
          }`}
        >
          {/* LEFT */}
          <div className="navbar-start gap-2">
            {/* Mobile menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
              >
                {navLinks}
              </ul>
            </div>

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center
                ${scrolled ? "bg-white/20" : "bg-primary/10"}`}
              >
                📚
              </div>
              <span
                className={`text-lg md:text-xl font-bold tracking-tight
                ${scrolled ? "text-white" : "text-primary"}`}
              >
                Book<span className="opacity-70">Verse</span>
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4 font-medium">
              {navLinks}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end flex gap-2">
            <Link
              href="/login"
              className={`btn btn-sm md:btn-md px-6 rounded-lg font-bold border-none
              ${
                scrolled
                  ? "bg-white text-secondary hover:bg-gray-100"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
