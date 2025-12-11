import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Shield, Zap, Globe, Lock } from "lucide-react";

const badges = [
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Database, label: "Data Platforms" },
  { icon: Shield, label: "DRM & Security" },
  { icon: Zap, label: "High Availability" },
  { icon: Globe, label: "Global Distribution" },
  { icon: Lock, label: "Compliance Ready" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Enterprise-Grade Digital Technology Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Enterprise Digital{" "}
            <br className="hidden md:block" />
            Platforms for{" "}
            <span className="gradient-text">Content, Commerce & Data</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            iGenie Labs builds and operates secure, scalable digital platforms for content distribution, metadata systems, eCommerce, DRM enforcement, and enterprise cloud infrastructure.
          </p>

          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Trusted by publishers, libraries, and digital content organizations worldwide for compliant, high-availability technology systems with 99.9% uptime guarantee.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/capabilities">
              <Button variant="hero" size="xl">
                Explore Our Platforms
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/company">
              <Button variant="heroOutline" size="xl">
                Technology & Infrastructure
              </Button>
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {badges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
