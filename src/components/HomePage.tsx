import logo from "@/assets/logo.png";
import HeroBanner from "@/components/HeroBanner";
import QuickActions from "@/components/QuickActions";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousel from "@/components/ProductCarousel";
import LoyaltyCard from "@/components/LoyaltyCard";
import StoreInfo from "@/components/StoreInfo";

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="space-y-6 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="One Stop Smoke Shop" className="w-10 h-10" width={40} height={40} />
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">One Stop</h1>
            <p className="text-xs text-gold font-medium -mt-0.5">Smoke Shop</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-emerald-400">Open Now</span>
        </div>
      </div>

      <HeroBanner />

      <QuickActions onNavigate={onNavigate} />

      <section>
        <h2 className="text-base font-bold text-foreground mb-3">Shop by Category</h2>
        <CategoryGrid onCategorySelect={() => onNavigate("products")} />
      </section>

      <ProductCarousel title="Best Sellers" />

      <ProductCarousel
        title="New Arrivals"
        products={[
          { id: "5", name: "ZOVOO Dragbar Z700 SE", price: 12.99, rating: 4.5, image: "🌈", badge: "New" },
          { id: "6", name: "Funky Republic Ti7000", price: 15.99, rating: 4.8, image: "🎯", badge: "New" },
          { id: "7", name: "Orion Bar 7500", price: 14.99, rating: 4.6, image: "🚀" },
          { id: "8", name: "Breeze Pro", price: 11.99, originalPrice: 13.99, rating: 4.4, image: "💎", badge: "Sale" },
        ]}
      />

      <LoyaltyCard onNavigate={onNavigate} />

      <StoreInfo />
    </div>
  );
};

export default HomePage;
