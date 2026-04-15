import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import HomePage from "@/components/HomePage";
import ProductsPage from "@/components/ProductsPage";
import LoyaltyPage from "@/components/LoyaltyPage";
import AboutPage from "@/components/AboutPage";
import AccountPage from "@/components/AccountPage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onNavigate={setActiveTab} />;
      case "products":
        return <ProductsPage cartCount={cartCount} onAddToCart={() => setCartCount((c) => c + 1)} />;
      case "loyalty":
        return <LoyaltyPage />;
      case "about":
        return <AboutPage />;
      case "account":
        return <AccountPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <main className="px-4 pt-4 pb-24 safe-top">
        {renderPage()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
