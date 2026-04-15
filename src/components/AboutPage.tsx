import storeInterior from "@/assets/store-interior.jpg";
import logo from "@/assets/logo.png";
import { Heart, Shield, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality First", desc: "We only stock authentic, verified products from trusted brands." },
  { icon: Users, title: "Community Focused", desc: "We know our customers by name. You're family here." },
  { icon: Heart, title: "Customer Care", desc: "Knowledgeable staff ready to help you find exactly what you need." },
  { icon: Sparkles, title: "Always Fresh", desc: "New products weekly. We stay ahead of trends so you don't miss out." },
];

const AboutPage = () => {
  return (
    <div className="space-y-6 pb-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="One Stop Smoke Shop" className="w-10 h-10" width={40} height={40} />
        <h1 className="text-xl font-bold text-foreground font-display">About Us</h1>
      </div>

      <div className="relative rounded-2xl overflow-hidden h-48">
        <img src={storeInterior} alt="Store interior" className="w-full h-full object-cover" width={1280} height={720} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h2 className="text-lg font-bold text-foreground font-display">Your Neighborhood<br /><span className="text-gradient-gold">Smoke Shop</span></h2>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="text-sm font-bold text-foreground mb-2">Our Story</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          One Stop Smoke Shop started as a small family-owned store with a simple mission:
          provide premium smoking products at fair prices with a welcoming, no-pressure experience.
          Today, we've grown into the go-to shop in our community — known for our curated selection,
          unbeatable deals, and a team that genuinely cares about every customer who walks through our doors.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-foreground">What Sets Us Apart</h3>
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={i} className="flex gap-3 p-3 bg-card rounded-xl border border-border animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{v.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{v.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-card rounded-xl border border-border p-4 text-center">
        <p className="text-sm text-muted-foreground italic">
          "We're not just selling products — we're building relationships.
          Every customer leaves with a smile."
        </p>
        <p className="text-xs text-gold mt-2 font-medium">— The One Stop Family</p>
      </div>
    </div>
  );
};

export default AboutPage;
