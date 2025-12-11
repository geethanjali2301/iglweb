import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Search, Shield, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Digital Lending Platform",
    description: "Secure digital lending infrastructure supporting eBooks, audiobooks, and multimedia content with flexible licensing models.",
    features: ["Patron authentication", "Concurrent user management", "Offline access", "Multi-format support"],
  },
  {
    icon: Search,
    title: "Discovery & Catalog",
    description: "Powerful discovery APIs and catalog management with MARC21, Dublin Core, and modern schema support.",
    features: ["Real-time search", "Faceted navigation", "Custom taxonomies", "Cross-catalog federation"],
  },
  {
    icon: Users,
    title: "Patron Services",
    description: "Comprehensive patron management including authentication, preferences, reading history, and personalized recommendations.",
    features: ["SSO integration", "Mobile apps", "Reading lists", "Accessibility features"],
  },
  {
    icon: Shield,
    title: "Content Protection",
    description: "Industry-standard DRM enforcement with Adobe ACS4, Readium LCP, and watermarking to protect publisher content.",
    features: ["Multi-DRM support", "Usage tracking", "Lending limits", "Territory controls"],
  },
];

const stats = [
  { value: "15,000+", label: "Libraries Served" },
  { value: "500M+", label: "Annual Checkouts" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "50+", label: "Countries" },
];

const libraryTypes = [
  "Public Libraries",
  "Academic Libraries",
  "School Libraries",
  "Special Libraries",
  "Corporate Libraries",
  "Government Libraries",
];

const LibrarySolutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Library Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powering{" "}
              <span className="gradient-text">Modern Libraries</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Digital lending infrastructure serving millions of patrons worldwide with seamless content access, discovery, and management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/capabilities">
                <Button variant="heroOutline" size="xl">
                  View Platform Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background" id="digital-lending">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern library operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Types */}
      <section className="py-24 bg-muted/50" id="catalog">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving All Library Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible solutions tailored to your institution's unique needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {libraryTypes.map((type) => (
              <div
                key={type}
                className="px-6 py-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <span className="font-medium text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground" id="patron">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Transform Your Library Experience
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of libraries delivering exceptional digital content to their patrons.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LibrarySolutions;
