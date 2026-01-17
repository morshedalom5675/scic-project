"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/* ================= Cookie Helpers ================= */
const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; path=/; max-age=0`;
};
/* ================================================== */

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const userCookie = getCookie("user");
    if (userCookie) {
      try {
        setUser(JSON.parse(decodeURIComponent(userCookie)));
      } catch {
        console.error("Invalid user cookie");
      }
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    deleteCookie("user");
    setUser(null);
    window.location.href = "/login";
  };

  /* ================= Active Link Helper ================= */
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path) =>
    `relative px-4 py-2 rounded-lg transition-all font-medium
     ${isActive(path) ? "text-primary bg-[#fff7e3]" : "hover:bg-primary/5"}`;
  /* ===================================================== */

  const navLinks = (
    <>
      <li>
        <Link href="/" className={linkClass("/")}>
          Home
          {isActive("/") && (
            <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-primary rounded-full -translate-x-1/2" />
          )}
        </Link>
      </li>

      <li>
        <Link href="/about" className={linkClass("/about")}>
          About
          {isActive("/about") && (
            <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-primary rounded-full -translate-x-1/2" />
          )}
        </Link>
      </li>

      <li>
        <Link href="/books" className={linkClass("/books")}>
          Books
          {isActive("/books") && (
            <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-primary rounded-full -translate-x-1/2" />
          )}
        </Link>
      </li>
      <li>
        <Link href="/privacy" className={linkClass("/privacy")}>
          Privacy Policy
          {isActive("/privacy") && (
            <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-primary rounded-full -translate-x-1/2" />
          )}
        </Link>
      </li>
      <li>
        <Link href="/terms" className={linkClass("/terms")}>
          Terms & conditions
          {isActive("/terms") && (
            <span className="absolute left-1/2 -bottom-1 w-6 h-[3px] bg-primary rounded-full -translate-x-1/2" />
          )}
        </Link>
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
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>

            <Link href="/" className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  scrolled ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                📚
              </div>
              <span
                className={`text-lg md:text-xl font-bold tracking-tight ${
                  scrolled ? "text-white" : "text-primary"
                }`}
              >
                Book<span className="opacity-70">Verse</span>
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-3">{navLinks}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar online"
                >
                  <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center border-2 border-white/50">
                    <span className="text-lg uppercase">
                      {user?.email?.[0] || "U"}
                    </span>
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="px-4 py-2 font-bold text-primary break-all">
                    {user.email}
                  </li>
                  <div className="divider my-0" />
                  <li>
                    <Link href="/">Profile</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 font-bold"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
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
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
