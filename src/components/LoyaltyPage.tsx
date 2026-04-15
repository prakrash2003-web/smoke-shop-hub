import { Award, Gift, Star, TrendingUp, ChevronRight, Crown, Zap } from "lucide-react";

const tiers = [
  { name: "Bronze", min: 0, max: 99, color: "from-amber-700 to-amber-600", icon: Award },
  { name: "Silver", min: 100, max: 249, color: "from-slate-400 to-slate-300", icon: Star },
  { name: "Gold", min: 250, max: 499, color: "from-yellow-500 to-yellow-400", icon: Crown },
  { name: "VIP", min: 500, max: 999, color: "from-purple-600 to-purple-400", icon: Zap },
];

const rewards = [
  { points: 100, reward: "$5 Off Any Purchase", icon: "🎁" },
  { points: 250, reward: "$15 Off + Free Accessory", icon: "🎉" },
  { points: 500, reward: "VIP Reward: $30 Off + Exclusive Item", icon: "👑" },
];

const LoyaltyPage = () => {
  // Demo state
  const demoPoints = 175;
  const currentTier = tiers.find((t) => demoPoints >= t.min && demoPoints <= t.max) || tiers[0];
  const nextTier = tiers[tiers.indexOf(currentTier) + 1];
  const progress = nextTier
    ? ((demoPoints - currentTier.min) / (nextTier.min - currentTier.min)) * 100
    : 100;

  return (
    <div className="space-y-5 pb-4">
      <h1 className="text-xl font-bold text-foreground font-display">Loyalty Rewards</h1>

      {/* Points Card */}
      <div className="gradient-gold rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-background/10 -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-background/10 -ml-6 -mb-6" />
        <div className="relative">
          <p className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider">Your Points</p>
          <p className="text-4xl font-bold text-primary-foreground mt-1">{demoPoints}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-primary-foreground/80">
              {currentTier.name} Member
            </span>
            {nextTier && (
              <>
                <span className="text-primary-foreground/40">•</span>
                <span className="text-xs text-primary-foreground/80">
                  {nextTier.min - demoPoints} pts to {nextTier.name}
                </span>
              </>
            )}
          </div>
          {nextTier && (
            <div className="mt-3">
              <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-foreground rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="text-sm font-bold text-foreground mb-3">How It Works</h3>
        <div className="space-y-3">
          {[
            { icon: TrendingUp, text: "Earn 1 point for every $1 spent" },
            { icon: Gift, text: "Redeem points for discounts & free items" },
            { icon: Star, text: "Bonus points on promotional days" },
            { icon: Award, text: "Birthday reward & referral bonuses" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rewards */}
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">Available Rewards</h3>
        <div className="space-y-3">
          {rewards.map((r) => {
            const canRedeem = demoPoints >= r.points;
            return (
              <div
                key={r.points}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                  canRedeem
                    ? "bg-primary/10 border-primary/30"
                    : "bg-card border-border opacity-60"
                }`}
              >
                <span className="text-2xl">{r.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{r.reward}</p>
                  <p className="text-xs text-muted-foreground">{r.points} points</p>
                </div>
                {canRedeem ? (
                  <button className="text-xs font-bold text-gold flex items-center gap-0.5">
                    Redeem <ChevronRight className="w-3 h-3" />
                  </button>
                ) : (
                  <span className="text-xs text-muted-foreground">{r.points - demoPoints} pts away</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tier levels */}
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">Member Tiers</h3>
        <div className="grid grid-cols-2 gap-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const isCurrentTier = tier.name === currentTier.name;
            return (
              <div
                key={tier.name}
                className={`p-3 rounded-xl border text-center ${
                  isCurrentTier ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tier.color} mx-auto flex items-center justify-center mb-2`}>
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-sm font-bold text-foreground">{tier.name}</p>
                <p className="text-[10px] text-muted-foreground">{tier.min}+ points</p>
                {isCurrentTier && (
                  <span className="text-[10px] font-bold text-gold mt-1 inline-block">Current</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPage;
