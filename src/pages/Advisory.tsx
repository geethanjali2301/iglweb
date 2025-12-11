import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, Users, BarChart3, Lightbulb, Target, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Digital Strategy",
    description: "Strategic roadmapping for digital transformation initiatives, helping organizations navigate the evolving content landscape with confidence.",
    features: ["Technology assessment", "Market analysis", "Roadmap development", "Investment prioritization"],
  },
  {
    icon: Users,
    title: "Platform Selection",
    description: "Expert guidance on selecting and implementing the right technology platforms for your specific needs and growth objectives.",
    features: ["Requirements analysis", "Vendor evaluation", "POC management", "Implementation planning"],
  },
  {
    icon: BarChart3,
    title: "Operations Optimization",
    description: "Process improvement and operational efficiency consulting to streamline workflows and reduce costs across your organization.",
    features: ["Process audit", "Workflow redesign", "Automation strategy", "KPI framework"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Collaborative innovation programs exploring emerging technologies and their potential applications in your business context.",
    features: ["Technology exploration", "Pilot programs", "Innovation workshops", "Proof of concept"],
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your current state, challenges, and objectives through stakeholder interviews and technical assessment.",
  },
  {
    step: "02",
    title: "Analysis",
    description: "Comprehensive analysis of findings, industry benchmarks, and technology landscape to identify opportunities.",
  },
  {
    step: "03",
    title: "Strategy",
    description: "Development of actionable recommendations with clear priorities, timelines, and expected outcomes.",
  },
  {
    step: "04",
    title: "Execution",
    description: "Hands-on support during implementation with continuous monitoring and optimization.",
  },
];

const Advisory = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Strategic Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Expert Guidance for{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Strategic consulting services leveraging 15+ years of industry expertise to accelerate your digital transformation journey.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisory Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services tailored to the content industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology delivering measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Start Your Transformation Journey
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our advisory services can accelerate your digital initiatives.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="xl">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Advisory;
