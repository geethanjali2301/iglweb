import { BookOpen, FileText, Truck, Shield, Headphones, BarChart3, Image } from "lucide-react";

const platforms = [
  {
    icon: BookOpen,
    title: "Digital Content Platforms",
    subtitle: "Complete digital content lifecycle management",
    features: [
      "Secure digital lending & access systems with patron authentication",
      "eBook platform supporting EPUB, PDF, and proprietary formats",
      "Audiobook delivery with adaptive streaming and offline access",
      "DRM-compliant distribution with Adobe, Readium, and custom solutions",
      "Subscription services with metered access and concurrent user limits",
    ],
  },
  {
    icon: FileText,
    title: "Metadata & Catalog Systems",
    subtitle: "Industry-standard metadata management",
    features: [
      "Publisher metadata management with ONIX 2.1 and 3.0 support",
      "Cover images, sample content & enrichment pipelines",
      "Library catalog integrations with MARC21 and Dublin Core",
      "Global discovery APIs powering millions of daily searches",
      "Real-time synchronization across 50+ distribution channels",
    ],
  },
  {
    icon: Truck,
    title: "Enterprise Ordering & Operations",
    subtitle: "Streamlined B2B commerce operations",
    features: [
      "Ordering management processing 10M+ transactions annually",
      "Content ingestion with automated validation and QA workflows",
      "Data exchanges supporting FTP, SFTP, AS2, and modern APIs",
      "Financial reporting with multi-currency and tax compliance",
      "Warehouse and fulfillment integration for physical goods",
    ],
  },
  {
    icon: Shield,
    title: "Cloud & Security Infrastructure",
    subtitle: "Enterprise-grade security and compliance",
    features: [
      "Enterprise cloud hosting with SOC 2 Type II certification",
      "Identity management with SSO, SAML, and OAuth 2.0",
      "End-to-end encryption with customer-managed keys option",
      "24/7 monitoring, logging & automated incident response",
      "Regulatory compliance: GDPR, CCPA, COPPA, and more",
    ],
  },
];

const additionalPlatforms = [
  { icon: Headphones, label: "Audio Processing" },
  { icon: Image, label: "Digital Asset Management" },
  { icon: BarChart3, label: "Analytics & Reporting" },
];

export function Platforms() {
  return (
    <section className="py-24 bg-muted/50" id="platforms">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Platforms & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end digital infrastructure for content organizations, built on proven technology and designed for enterprise scale.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={platform.title}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <platform.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.subtitle}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Platforms */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Additional platforms:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {additionalPlatforms.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
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
