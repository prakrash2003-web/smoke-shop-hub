import { ShoppingBag, Award, MapPin, Phone, Clock } from "lucide-react";

interface QuickActionsProps {
  onNavigate: (tab: string) => void;
}

const actions = [
  { id: "products", label: "Shop", icon: ShoppingBag, gold: true },
  { id: "loyalty", label: "Rewards", icon: Award, gold: true },
  { id: "directions", label: "Directions", icon: MapPin, gold: false },
  { id: "call", label: "Call Us", icon: Phone, gold: false },
  { id: "hours", label: "Hours", icon: Clock, gold: false },
];

const QuickActions = ({ onNavigate }: QuickActionsProps) => {
  const handleClick = (id: string) => {
    if (id === "directions") {
      window.open("https://maps.google.com/?q=One+Stop+Smoke+Shop", "_blank");
    } else if (id === "call") {
      window.open("tel:+15551234567");
    } else if (id === "hours") {
      // scroll to hours section
      document.getElementById("store-hours")?.scrollIntoView({ behavior: "smooth" });
    } else {
      onNavigate(id);
    }
  };

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.id}
            onClick={() => handleClick(action.id)}
            className={`flex flex-col items-center gap-1.5 min-w-[64px] py-3 px-2 rounded-xl transition-all active:scale-95 ${
              action.gold
                ? "bg-primary/10 border border-primary/20"
                : "bg-secondary border border-border"
            }`}
          >
            <Icon className={`w-5 h-5 ${action.gold ? "text-gold" : "text-muted-foreground"}`} />
            <span className="text-[11px] font-medium text-foreground">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;
