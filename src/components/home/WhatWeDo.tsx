import { Layers, Cloud, ShoppingCart, Brain, Server, GitBranch } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Digital Platform Engineering",
    description: "We architect, build, and operate enterprise-grade platforms that power the modern content ecosystem:",
    features: [
      "End-to-end digital content delivery systems with global CDN integration",
      "Library and institutional distribution platforms supporting millions of transactions",
      "Publisher metadata management with ONIX, MARC, and custom schema support",
      "Subscription-based content services with flexible licensing models",
      "Real-time inventory and availability systems across multiple channels",
    ],
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud & Infrastructure",
    description: "Cloud-native solutions engineered for enterprise scale, security, and reliability:",
    features: [
      "Multi-cloud hosting on Azure, AWS, and GCP with intelligent failover",
      "Secure content storage with AES-256 encryption at rest and in transit",
      "High-availability architectures with 99.99% uptime SLA guarantees",
      "Automated disaster recovery and business continuity protocols",
      "Global edge computing for sub-100ms content delivery worldwide",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Commerce, Data & Integration",
    description: "Seamless business operations platforms connecting publishers, libraries, and distributors:",
    features: [
      "Ordering and transaction platforms processing millions of orders annually",
      "EDI integrations with EDIFACT, X12, and modern REST/GraphQL APIs",
      "Financial reporting, settlements, and royalty management systems",
      "Publisher–library interoperability with standardized data exchange",
      "Real-time analytics dashboards and business intelligence tools",
    ],
  },
  {
    icon: Brain,
    title: "Applied AI & Automation",
    description: "AI as a strategic capability enhancing platform intelligence and operational efficiency:",
    features: [
      "Advanced search & discovery with semantic understanding and NLP",
      "Personalization engines driving 40%+ improvement in content engagement",
      "Intelligent workflow automation reducing manual operations by 60%",
      "Predictive analytics for demand forecasting and inventory optimization",
      "Content classification and metadata enrichment using ML models",
    ],
  },
];

const additionalCapabilities = [
  { icon: Server, label: "Microservices Architecture" },
  { icon: GitBranch, label: "DevOps & CI/CD" },
];

export function WhatWeDo() {
  return (
    <section className="py-24 bg-background" id="what-we-do">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital technology solutions powering the modern content ecosystem with enterprise-grade security, scalability, and compliance at every layer.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                  <capability.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Note */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12 border border-primary/10">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">AI is integrated as a supporting capability</span> within our broader digital platform stack, enhancing every layer of our solutions.
          </p>
        </div>

        {/* Additional Capabilities */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Also specializing in:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {additionalCapabilities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
