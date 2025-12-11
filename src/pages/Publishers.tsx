import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, Shield, BarChart3, FileCheck, Server, Headphones, Globe, 
  ArrowRight, CheckCircle, Zap 
} from "lucide-react";

const capabilities = [
  "Secure digital distribution infrastructure with global CDN",
  "Metadata & catalog platforms with ONIX 3.0 and MARC support",
  "DRM-compliant delivery systems (Adobe, Readium LCP, watermarking)",
  "Library and subscription interoperability across 15,000+ institutions",
  "Enterprise reporting, analytics & settlement systems",
  "Global distribution to 50+ countries with localization support",
];

const commitments = [
  { icon: Shield, label: "Rights Protection", value: "Multi-layer DRM" },
  { icon: Server, label: "Data Security", value: "SOC 2 Type II" },
  { icon: BarChart3, label: "Financial Transparency", value: "Real-time reporting" },
  { icon: FileCheck, label: "Contract Compliance", value: "Automated enforcement" },
  { icon: Zap, label: "Platform Stability", value: "99.99% SLA" },
  { icon: Headphones, label: "24/7 Support", value: "Dedicated teams" },
];

const benefits = [
  "Reduce time-to-market for digital content by 60%",
  "Eliminate revenue leakage with automated rights management",
  "Gain real-time visibility into global distribution metrics",
  "Scale seamlessly from thousands to millions of transactions",
];

const partners = [
  "Major Trade Publishers",
  "Academic Publishers",
  "Independent Publishers",
  "University Presses",
  "Educational Publishers",
];

const Publishers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">For Publishers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise Infrastructure for{" "}
              <span className="gradient-text">Modern Publishers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Trusted by 5 of the Big 5 publishers and hundreds of independent publishers worldwide for secure, compliant digital content distribution.
            </p>
            <p className="text-muted-foreground mb-10">
              DRM-compliant delivery • Audit-ready reporting • Publisher contract compliance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/capabilities">
                <Button variant="heroOutline" size="xl">
                  View Platform Overview
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
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-primary-foreground/70">Publisher Partners</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1B+</div>
              <p className="text-primary-foreground/70">Content Deliveries</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-primary-foreground/70">Countries</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.99%</div>
              <p className="text-primary-foreground/70">Platform Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Commitments */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capabilities */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Publisher-Focused Capabilities
              </h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive solutions built specifically for the publishing industry:
              </p>
              <ul className="space-y-4">
                {capabilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitments */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Commitment to Publishers
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand the critical importance of trust in publisher partnerships:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {commitments.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Publisher Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by Leading Publishers
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            From the Big 5 to independent publishers, we serve the entire publishing ecosystem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 rounded-full bg-muted text-muted-foreground font-medium"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join 500+ publishers who trust iGenie Labs for their digital infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="mailto:partnerships@igenielabs.com">
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                partnerships@igenielabs.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publishers;
