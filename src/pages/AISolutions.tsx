import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Search, MessageSquare, FileText, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Intelligent Search & Discovery",
    description: "AI-powered search with semantic understanding, natural language queries, and contextual relevance ranking across your entire content catalog.",
  },
  {
    icon: MessageSquare,
    title: "Conversational Interfaces",
    description: "Deploy intelligent chatbots and virtual assistants for customer support, content discovery, and patron services with natural dialogue capabilities.",
  },
  {
    icon: FileText,
    title: "Metadata Enrichment",
    description: "Automated metadata extraction, classification, and enhancement using ML models trained on publishing industry standards and taxonomies.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Intelligent process automation reducing manual operations by 60%, from content ingestion to quality assurance and distribution.",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Demand forecasting, inventory optimization, and usage prediction powered by machine learning for better business decisions.",
  },
  {
    icon: Shield,
    title: "Content Protection AI",
    description: "AI-driven piracy detection, watermark verification, and unauthorized distribution tracking to protect your intellectual property.",
  },
];

const useCases = [
  "Content recommendation engines driving 40%+ engagement improvement",
  "Automated subject classification and tagging at scale",
  "Intelligent OCR and document digitization pipelines",
  "Real-time sentiment analysis for market research",
  "Personalized learning paths for educational content",
];

const AISolutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">AI-Powered Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Applied AI for{" "}
              <span className="gradient-text">Content Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              AI as a strategic capability enhancing platform intelligence, operational efficiency, and user experience across the content ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Explore AI Solutions
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/capabilities">
                <Button variant="heroOutline" size="xl">
                  View All Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated AI solutions designed to enhance every layer of your content operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI solutions are integrated as supporting capabilities within our broader platform stack, ensuring practical impact and measurable business outcomes.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/10">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">60%</div>
                <p className="text-xl text-foreground font-semibold mb-2">Operations Automated</p>
                <p className="text-muted-foreground">Average reduction in manual workflows through AI-powered automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Add Intelligence to Your Platform?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Discover how our AI solutions can transform your content operations.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AISolutions;
