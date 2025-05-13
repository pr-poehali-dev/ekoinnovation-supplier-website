
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/sections/HeroBanner";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeatureSection from "@/components/sections/FeatureSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Прокручиваем страницу вверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CategoryGrid />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
