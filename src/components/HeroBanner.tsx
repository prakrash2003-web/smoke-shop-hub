import { useMemo } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

const dailyDeals = [
  { day: 1, title: "Vape Deal Monday", subtitle: "20% off all vape devices", color: "from-blue-900/80 to-blue-700/40" },
  { day: 2, title: "Tobacco Tuesday", subtitle: "Buy 2, get 1 free on select tobacco", color: "from-amber-900/80 to-amber-700/40" },
  { day: 3, title: "Midweek Bundle", subtitle: "Special bundle offers today only", color: "from-emerald-900/80 to-emerald-700/40" },
  { day: 4, title: "Accessory Thursday", subtitle: "15% off all accessories", color: "from-purple-900/80 to-purple-700/40" },
  { day: 5, title: "Weekend Kickoff", subtitle: "Friday specials on best sellers", color: "from-red-900/80 to-red-700/40" },
  { day: 6, title: "Best Seller Saturday", subtitle: "Top picks at special prices", color: "from-orange-900/80 to-orange-700/40" },
  { day: 0, title: "Loyalty Exclusive", subtitle: "Members-only Sunday deals", color: "from-gold-dark/80 to-gold/40" },
];

const HeroBanner = () => {
  const todayDeal = useMemo(() => {
    const day = new Date().getDay();
    return dailyDeals.find((d) => d.day === day) || dailyDeals[0];
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-2xl mx-auto">
      <img
        src={heroBanner}
        alt="One Stop Smoke Shop promotion"
        className="absolute inset-0 w-full h-full object-cover"
        width={1280}
        height={600}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${todayDeal.color}`} />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">
          Today&apos;s Deal
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display">
          {todayDeal.title}
        </h2>
        <p className="text-sm text-foreground/80 mt-0.5">{todayDeal.subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
