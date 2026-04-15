import { Clock, MapPin, Phone, Star } from "lucide-react";

const StoreInfo = () => {
  const hours = [
    { day: "Mon - Fri", time: "9:00 AM - 9:00 PM" },
    { day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "11:00 AM - 7:00 PM" },
  ];

  return (
    <div className="space-y-4" id="store-hours">
      {/* Hours */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-gold" />
          <h3 className="text-sm font-bold text-foreground">Store Hours</h3>
        </div>
        <div className="space-y-2">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{h.day}</span>
              <span className="text-foreground font-medium">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gold" />
          <h3 className="text-sm font-bold text-foreground">Visit Us</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-2">123 Main Street, Suite 100<br />Anytown, USA 12345</p>
        <div className="flex gap-3">
          <a href="https://maps.google.com/?q=One+Stop+Smoke+Shop" target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-gold">Get Directions →</a>
          <a href="tel:+15551234567" className="text-xs font-medium text-gold flex items-center gap-1">
            <Phone className="w-3 h-3" /> Call
          </a>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <h3 className="text-sm font-bold text-foreground">Customer Reviews</h3>
          <span className="text-xs text-muted-foreground ml-auto">4.8 / 5</span>
        </div>
        <div className="space-y-3">
          {[
            { name: "Mike R.", text: "Best smoke shop in town! Great selection and friendly staff.", stars: 5 },
            { name: "Sarah L.", text: "Love the loyalty program. Always getting great deals here.", stars: 5 },
          ].map((review) => (
            <div key={review.name} className="border-t border-border pt-2 first:border-0 first:pt-0">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                ))}
                <span className="text-xs font-medium text-foreground ml-1">{review.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
