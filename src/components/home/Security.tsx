import { Shield, Lock, Eye, FileCheck, ClipboardCheck, UserCheck, Server, Fingerprint } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Digital Rights Management (DRM)",
    description: "Industry-standard DRM enforcement including Adobe ACS4, Readium LCP, and custom watermarking solutions protecting publisher content across all distribution channels.",
  },
  {
    icon: Lock,
    title: "Secure Content Storage",
    description: "AES-256 encrypted storage with customer-managed keys, controlled access policies, and comprehensive audit trails for complete content protection and traceability.",
  },
  {
    icon: Eye,
    title: "Data Privacy & Protection",
    description: "Comprehensive data privacy frameworks ensuring GDPR, CCPA, COPPA, and FERPA compliance with automated data handling policies and user consent management.",
  },
  {
    icon: FileCheck,
    title: "Contract Compliance",
    description: "Automated enforcement of publisher contracts and licensing terms including territorial restrictions, lending limits, and usage caps with real-time monitoring.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Readiness",
    description: "Financial and content audit-ready systems with SOC 2 Type II certification, detailed reporting, and complete transaction history for regulatory compliance.",
  },
  {
    icon: UserCheck,
    title: "Identity & Access Management",
    description: "Enterprise IAM with SSO, SAML 2.0, OAuth 2.0, and multi-factor authentication. Role-based access control and fine-grained permissions across all systems.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Multi-layer security with WAF, DDoS protection, intrusion detection, and automated threat response. Regular penetration testing and vulnerability assessments.",
  },
  {
    icon: Fingerprint,
    title: "Content Forensics",
    description: "Advanced forensic watermarking and content fingerprinting for tracking unauthorized distribution. Real-time piracy detection and takedown workflows.",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Compliant" },
  { name: "GDPR", status: "Ready" },
  { name: "PCI DSS", status: "Level 1" },
  { name: "HIPAA", status: "Capable" },
];

export function Security() {
  return (
    <section className="py-24 bg-muted/50" id="security">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Enterprise Standards
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Security, Compliance & Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            iGenie Labs operates to the highest enterprise-grade publishing and data standards. Our security-first architecture protects your content, data, and business operations.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Certifications & Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-xl border border-border px-6 py-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-lg font-bold text-foreground">{cert.name}</div>
                <div className="text-sm text-primary font-medium">{cert.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
