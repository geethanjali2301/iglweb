import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Database, BarChart3, FileCheck, Server, Headphones, ArrowRight } from "lucide-react";

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
  { icon: Database, label: "Data Security", value: "SOC 2 Type II" },
  { icon: BarChart3, label: "Financial Transparency", value: "Real-time reporting" },
  { icon: FileCheck, label: "Contract Compliance", value: "Automated enforcement" },
  { icon: Server, label: "Platform Stability", value: "99.99% SLA" },
  { icon: Headphones, label: "24/7 Support", value: "Dedicated teams" },
];

const benefits = [
  "Reduce time-to-market for digital content by 60%",
  "Eliminate revenue leakage with automated rights management",
  "Gain real-time visibility into global distribution metrics",
  "Scale seamlessly from thousands to millions of transactions",
];

export function Publishers() {
  return (
    <section className="py-24 bg-muted/50" id="publishers">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Partner with Confidence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            For Publishers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed specifically for publisher needs. Trusted by 5 of the Big 5 publishers and hundreds of independent publishers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Capabilities */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Publisher-Focused Capabilities
            </h3>
            <p className="text-muted-foreground mb-6">
              Comprehensive solutions built for the publishing industry:
            </p>
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitments */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Commitment
            </h3>
            <p className="text-muted-foreground mb-6">
              We understand the critical importance of trust in publisher partnerships. Our commitment extends beyond technology to encompass every aspect of your content protection and business operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {commitments.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
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

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Key Publisher Benefits:</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/publishers">
              <Button variant="gradient" size="lg">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
