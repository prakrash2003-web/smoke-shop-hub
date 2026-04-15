import { Award, ChevronRight, Gift, Star, TrendingUp } from "lucide-react";

interface LoyaltyCardProps {
  onNavigate: (tab: string) => void;
}

const LoyaltyCard = ({ onNavigate }: LoyaltyCardProps) => {
  return (
    <button
      onClick={() => onNavigate("loyalty")}
      className="w-full gradient-gold rounded-2xl p-4 text-left active:scale-[0.98] transition-transform relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-background/10 -mr-8 -mt-8" />
      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-background/10 -ml-4 -mb-4" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-primary-foreground" />
          <span className="text-sm font-bold text-primary-foreground">Loyalty Rewards</span>
        </div>
        <p className="text-xs text-primary-foreground/80 mb-3">
          Earn points on every purchase. Join free today!
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-[11px] text-primary-foreground/80">Free rewards</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-[11px] text-primary-foreground/80">VIP tiers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-primary-foreground/80" />
            <span className="text-[11px] text-primary-foreground/80">Bonus days</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs font-semibold text-primary-foreground">Join Now</span>
          <ChevronRight className="w-3.5 h-3.5 text-primary-foreground" />
        </div>
      </div>
    </button>
  );
};

export default LoyaltyCard;
