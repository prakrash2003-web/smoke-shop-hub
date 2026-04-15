import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Award, Settings, LogOut, ChevronRight, Bell, Gift, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="space-y-6 pb-4">
        <h1 className="text-xl font-bold text-foreground font-display">
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>

        <div className="bg-card rounded-2xl border border-border p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full h-11 pl-10 pr-4 bg-secondary border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full h-11 pl-10 pr-4 bg-secondary border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 pl-10 pr-10 bg-secondary border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff className="w-4 h-4 text-muted-foreground" /> : <Eye className="w-4 h-4 text-muted-foreground" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="gold" className="w-full h-11">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <div className="text-center mt-4">
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-xs text-gold font-medium">
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Sign up to earn loyalty points and get exclusive deals!
          </p>
        </div>
      </div>
    );
  }

  const menuItems = [
    { icon: Award, label: "My Rewards", desc: "175 points available", accent: true },
    { icon: Gift, label: "My Offers", desc: "3 active promotions" },
    { icon: CreditCard, label: "Order History", desc: "View past orders" },
    { icon: Bell, label: "Notifications", desc: "Deal alerts & updates" },
    { icon: Settings, label: "Settings", desc: "Preferences & account" },
  ];

  return (
    <div className="space-y-5 pb-4">
      <h1 className="text-xl font-bold text-foreground font-display">My Account</h1>

      {/* Profile card */}
      <div className="gradient-gold rounded-2xl p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-background/10 -mr-8 -mt-8" />
        <div className="relative flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <User className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <p className="text-base font-bold text-primary-foreground">{name || "Demo User"}</p>
            <p className="text-xs text-primary-foreground/70">{email || "demo@email.com"}</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-foreground/80 mt-0.5">
              <Award className="w-3 h-3" /> Silver Member • 175 pts
            </span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} className="w-full flex items-center gap-3 p-3.5 bg-card rounded-xl border border-border active:scale-[0.98] transition-transform">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                item.accent ? "gradient-gold" : "bg-secondary"
              }`}>
                <Icon className={`w-4.5 h-4.5 ${item.accent ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setIsLoggedIn(false)}
        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-destructive/30 text-destructive text-sm font-medium active:scale-[0.98] transition-transform"
      >
        <LogOut className="w-4 h-4" /> Sign Out
      </button>
    </div>
  );
};

export default AccountPage;
