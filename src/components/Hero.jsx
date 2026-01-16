import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-8xl font-serif text-primary leading-tight tracking-tight">
          Winning in the <br />
          <span className="text-secondary relative inline-block italic">
            digital Age
            <svg
              className="absolute -bottom-2 left-0 w-full text-secondary/40"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 15C30 5 70 5 100 15C130 25 170 25 199 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="mt-6 text-black max-w-lg mx-auto text-lg">
          Explore the collection of books that will change your perspective on
          life and technology.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4">
        {/* Left Side: Review */}
        <div className="hidden md:block text-left space-y-4 bg-white/5 p-6 rounded-lg border border-primary/5">
          <div className="rating rating-xs">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                className="mask mask-star-2 bg-primary"
                disabled
              />
            ))}
          </div>
          <p className="text-sm text-black italic leading-relaxed">
            "This platform has completely transformed how I discover new
            architectural and digital insights."
          </p>
          <div>
            <p className="font-bold text-primary">Judith Black</p>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
              CEO - Mahinva
            </p>
          </div>
        </div>

        {/* Center: Real 3D Book Image */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Badge - ইমেজের উপরে সুন্দর করে সেট করা */}
          <div className="absolute -top-12 -right-8 z-30 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold text-center leading-tight shadow-2xl border-4 border-base-100 text-white transform rotate-12 transition-transform group-hover:rotate-0 duration-500">
            OVER <br /> 5 MILLION <br /> COPIES SOLD
          </div>

          {/* Book Wrapper */}
          <div className="relative group perspective-1000">
            {/* বইয়ের নিচের গ্লো শ্যাডো */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full transform scale-90 group-hover:scale-110 transition-transform duration-700"></div>

            {/* The Book Body */}
            <div className="relative w-[280px] md:w-[320px] aspect-[3/4.5] shadow-[10px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-1">
              {/* বইয়ের বাম পাশের স্পাইন (Binding side) - যা এটাকে আসল বই বানাবে */}
              <div className="absolute inset-y-0 left-0 w-[12px] bg-black/20 z-10 rounded-l-sm backdrop-blur-[2px]"></div>

              {/* মেইন ইমেজ */}
              <img
                src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
                alt="Atomic Habits"
                className="w-full h-full object-cover rounded-sm border-r border-white/10"
              />

              {/* বইয়ের ওপরের হালকা গ্লসি ইফেক্ট (আসল বইয়ের প্রলেপের মতো) */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/5 pointer-events-none"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 z-20">
            <button className="relative group px-12 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <span className="relative z-10">Start Reading Now</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Right Side: Review */}
        <div className="hidden md:block text-right space-y-4 bg-white/5 p-6 rounded-lg border border-primary/5">
          <div className="rating rating-xs justify-end w-full">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                className="mask mask-star-2 bg-primary"
                disabled
              />
            ))}
          </div>
          <p className="text-sm text-black italic leading-relaxed">
            "The curated list of books here is top-notch. Highly recommended for
            every digital creator."
          </p>
          <div>
            <p className="font-bold text-primary">Judith Black</p>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
              CEO - Mahinva
            </p>
          </div>
        </div>
      </div>

      {/* Floating Scroll Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-5 h-9 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
