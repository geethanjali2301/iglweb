import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cloud, Database, Shield, Zap, Globe, Lock, Server, GitBranch, 
  Layers, Code, Workflow, ArrowRight, CheckCircle 
} from "lucide-react";

const capabilities = [
  {
    category: "Platform Engineering",
    icon: Layers,
    items: [
      "Microservices architecture design and implementation",
      "API development (REST, GraphQL, gRPC)",
      "Event-driven systems with Kafka and RabbitMQ",
      "Container orchestration with Kubernetes",
      "Serverless computing solutions",
    ],
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    items: [
      "Multi-cloud deployment (AWS, Azure, GCP)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "CI/CD pipeline automation",
      "Auto-scaling and cost optimization",
      "Disaster recovery and business continuity",
    ],
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: [
      "Data warehouse and lake architecture",
      "Real-time streaming analytics",
      "ETL/ELT pipeline development",
      "Business intelligence platforms",
      "Data governance and quality",
    ],
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    items: [
      "Identity and access management",
      "Encryption and key management",
      "Security monitoring and SIEM",
      "Compliance automation (SOC 2, GDPR)",
      "Vulnerability management",
    ],
  },
  {
    category: "Integration",
    icon: Workflow,
    items: [
      "Enterprise service bus (ESB)",
      "EDI integrations (EDIFACT, X12)",
      "Third-party API integrations",
      "Legacy system modernization",
      "B2B connectivity solutions",
    ],
  },
  {
    category: "DevOps",
    icon: GitBranch,
    items: [
      "GitOps workflows and automation",
      "Infrastructure monitoring and observability",
      "Incident management and SRE practices",
      "Performance optimization",
      "Release management",
    ],
  },
];

const techStack = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Terraform", category: "Infrastructure" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Kafka", category: "Messaging" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
];

const Capabilities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Technical Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Technology Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Comprehensive technical capabilities built on modern architecture patterns and industry-leading technologies.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.category}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{cap.category}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on proven, enterprise-grade technologies.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-6 py-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">99.99%</div>
              <p className="text-primary-foreground/70">Uptime SLA</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">&lt;100ms</div>
              <p className="text-primary-foreground/70">Response Time</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10M+</div>
              <p className="text-primary-foreground/70">Daily Transactions</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-primary-foreground/70">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how our technical capabilities can power your digital platform.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
