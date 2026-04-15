import { Star, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  badge?: string;
}

const bestSellers: Product[] = [
  { id: "1", name: "Elf Bar BC5000", price: 14.99, rating: 4.8, image: "💨", badge: "Best Seller" },
  { id: "2", name: "RAZ CA6000", price: 16.99, originalPrice: 19.99, rating: 4.7, image: "⚡", badge: "Sale" },
  { id: "3", name: "Lost Mary MO5000", price: 13.99, rating: 4.6, image: "🌬️" },
  { id: "4", name: "Geek Bar Pulse", price: 17.99, rating: 4.9, image: "🔥", badge: "New" },
];

interface ProductCarouselProps {
  title: string;
  products?: Product[];
}

const ProductCarousel = ({ title, products = bestSellers }: ProductCarouselProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <button className="text-xs font-medium text-gold">View All</button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[150px] max-w-[150px] bg-card rounded-xl border border-border overflow-hidden flex-shrink-0 active:scale-[0.98] transition-transform"
          >
            <div className="relative h-28 bg-secondary flex items-center justify-center">
              <span className="text-4xl">{product.image}</span>
              {product.badge && (
                <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  product.badge === "Sale" ? "bg-destructive text-destructive-foreground" :
                  product.badge === "New" ? "bg-primary text-primary-foreground" :
                  "gradient-gold text-primary-foreground"
                }`}>
                  {product.badge}
                </span>
              )}
              <button className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-gold">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
