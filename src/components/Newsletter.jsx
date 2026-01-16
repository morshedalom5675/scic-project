const Newsletter = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#fafafa] px-10 py-16 md:px-16 md:py-20 border border-gray-100 shadow-sm">
          {/* Decorative Blurs */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-secondary/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                Stay connected with the{" "}
                <span className="italic text-secondary">world of books</span>
              </h2>
              <p className="mt-6 text-black/70 text-xl leading-relaxed">
                Get updates on newly added books, curated reading lists, and
                exclusive offers — straight to your inbox.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 px-5 rounded-md border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  required
                />
                <button
                  type="submit"
                  className="h-14 px-10 rounded-md bg-primary text-white font-semibold hover:brightness-110 transition-all"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 text-xs text-gray-400 text-center lg:text-left tracking-wide uppercase">
                No spam. Just thoughtful reads and literary love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
