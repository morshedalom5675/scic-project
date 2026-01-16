import Authors from "@/components/Features";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PromoSection from "@/components/PromoSection";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import PopularBooks from "@/components/PopularBooks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Hero />
        <Categories />
        <Stats />
        <PopularBooks />
        <Features />
        <PromoSection />
        <Newsletter />
      </div>
    </div>
  );
}
