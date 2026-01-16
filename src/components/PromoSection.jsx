const PromoSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden relative shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center relative z-10 min-h-[520px]">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-16 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-secondary/30 blur-3xl rounded-full animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=500"
                  alt="Featured Book"
                  className="relative w-72 md:w-96 rounded-xl shadow-2xl "
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-16 text-center md:text-left text-white">
              <span className="inline-block bg-secondary/20 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                Limited Time Offer
              </span>

              <h2 className="text-5xl md:text-6xl font-serif font-bold mt-8 leading-tight">
                Enjoy <span className="text-red-200 italic">30% Off</span>{" "}
                Your First Order
              </h2>

              <p className="mt-6 text-white/75 text-xl leading-relaxed max-w-xl">
                Discover your next favorite book at a special price. This
                exclusive welcome offer is available for a limited time only.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <button className="btn bg-white text-primary hover:bg-gray-100 border-none px-10 rounded-md">
                  Claim Discount
                </button>
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-10 rounded-md">
                  Browse Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
