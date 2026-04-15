import { ChevronRight } from "lucide-react";

const categories = [
  { id: "vapes", name: "Vapes", emoji: "💨", count: 45 },
  { id: "tobacco", name: "Tobacco", emoji: "🍂", count: 32 },
  { id: "disposables", name: "Disposables", emoji: "⚡", count: 28 },
  { id: "accessories", name: "Accessories", emoji: "🔧", count: 56 },
  { id: "papers", name: "Papers & Wraps", emoji: "📜", count: 24 },
  { id: "glass", name: "Glass & Novelties", emoji: "✨", count: 18 },
];

interface CategoryGridProps {
  onCategorySelect?: (id: string) => void;
}

const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((cat, i) => (
        <button
          key={cat.id}
          onClick={() => onCategorySelect?.(cat.id)}
          className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all active:scale-[0.98] animate-fade-in-up"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span className="text-2xl">{cat.emoji}</span>
          <div className="text-left flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{cat.name}</p>
            <p className="text-xs text-muted-foreground">{cat.count} items</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
