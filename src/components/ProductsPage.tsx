import { useState } from "react";
import { Search, Filter, Star, Plus, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  emoji: string;
  category: string;
  badge?: string;
  inStock: boolean;
}

const allProducts: Product[] = [
  { id: "1", name: "Elf Bar BC5000", price: 14.99, rating: 4.8, emoji: "💨", category: "vapes", badge: "Best Seller", inStock: true },
  { id: "2", name: "RAZ CA6000", price: 16.99, originalPrice: 19.99, rating: 4.7, emoji: "⚡", category: "vapes", badge: "Sale", inStock: true },
  { id: "3", name: "Lost Mary MO5000", price: 13.99, rating: 4.6, emoji: "🌬️", category: "vapes", inStock: true },
  { id: "4", name: "Geek Bar Pulse", price: 17.99, rating: 4.9, emoji: "🔥", category: "vapes", badge: "New", inStock: true },
  { id: "5", name: "Marlboro Gold Pack", price: 12.99, rating: 4.5, emoji: "🍂", category: "tobacco", inStock: true },
  { id: "6", name: "Camel Blue Pack", price: 11.99, rating: 4.4, emoji: "🍂", category: "tobacco", inStock: true },
  { id: "7", name: "RAW Classic Papers", price: 3.99, rating: 4.8, emoji: "📜", category: "papers", badge: "Popular", inStock: true },
  { id: "8", name: "Backwoods Honey", price: 8.99, rating: 4.6, emoji: "📜", category: "papers", inStock: true },
  { id: "9", name: "Glass Water Pipe 12\"", price: 49.99, originalPrice: 64.99, rating: 4.7, emoji: "✨", category: "glass", badge: "Sale", inStock: true },
  { id: "10", name: "Torch Lighter Pro", price: 9.99, rating: 4.5, emoji: "🔧", category: "accessories", inStock: true },
  { id: "11", name: "Grinder 4-Piece", price: 14.99, rating: 4.8, emoji: "🔧", category: "accessories", inStock: true },
  { id: "12", name: "ZOVOO Dragbar Z700", price: 12.99, rating: 4.5, emoji: "🌈", category: "disposables", badge: "New", inStock: true },
  { id: "13", name: "Funky Republic Ti7000", price: 15.99, rating: 4.8, emoji: "🎯", category: "disposables", badge: "New", inStock: true },
  { id: "14", name: "Orion Bar 7500", price: 14.99, rating: 4.6, emoji: "🚀", category: "disposables", inStock: true },
];

const categories = [
  { id: "all", label: "All" },
  { id: "vapes", label: "Vapes" },
  { id: "tobacco", label: "Tobacco" },
  { id: "disposables", label: "Disposables" },
  { id: "accessories", label: "Accessories" },
  { id: "papers", label: "Papers" },
  { id: "glass", label: "Glass" },
];

interface ProductsPageProps {
  cartCount: number;
  onAddToCart: () => void;
}

const ProductsPage = ({ cartCount, onAddToCart }: ProductsPageProps) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = allProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-4 pb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground font-display">Shop</h1>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-foreground" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full gradient-gold text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-10 pl-9 pr-10 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "gradient-gold text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((product) => (
          <div key={product.id} className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="relative h-28 bg-secondary flex items-center justify-center">
              <span className="text-4xl">{product.emoji}</span>
              {product.badge && (
                <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  product.badge === "Sale" ? "bg-destructive text-destructive-foreground" :
                  product.badge === "New" ? "bg-emerald-500 text-foreground" :
                  "gradient-gold text-primary-foreground"
                }`}>
                  {product.badge}
                </span>
              )}
              <button
                onClick={onAddToCart}
                className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-gold active:scale-90 transition-transform"
              >
                <Plus className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            <div className="p-2.5">
              <p className="text-xs font-semibold text-foreground truncate">{product.name}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-gold fill-gold" />
                <span className="text-[10px] text-muted-foreground">{product.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-sm font-bold text-gold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-[10px] text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              <span className="text-[10px] text-emerald-400">✓ In Stock</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-sm">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
