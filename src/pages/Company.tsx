import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Globe, ArrowRight, CheckCircle, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we build, from code quality to customer experience.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We build long-term relationships with our clients, treating their success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new technologies and approaches to solve complex challenges.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We earn trust through transparency, security, and consistent delivery on our commitments.",
  },
];

import { Shield } from "lucide-react";

const milestones = [
  { year: "2008", event: "Company founded with a vision to transform digital content distribution" },
  { year: "2012", event: "Launched first enterprise library platform serving 1,000+ institutions" },
  { year: "2015", event: "Achieved SOC 2 Type II certification" },
  { year: "2018", event: "Expanded to serve publishers across 50+ countries" },
  { year: "2021", event: "Surpassed 1 billion annual content transactions" },
  { year: "2023", event: "Launched AI-powered content intelligence platform" },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "200+", label: "Team Members" },
  { value: "500+", label: "Publisher Partners" },
  { value: "15,000+", label: "Libraries Served" },
];

const Company = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Digital Content</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              iGenie Labs is an enterprise digital technology company focused on building, operating, and scaling platforms for content distribution, commerce, and data infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To transform how digital content reaches global audiences by providing secure, scalable, and compliant technology platforms that empower publishers, libraries, and content organizations worldwide.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine deep domain expertise in publishing and library technology with cutting-edge engineering capabilities to deliver solutions that scale from startups to Fortune 500 enterprises.
              </p>
              <Link to="/capabilities">
                <Button variant="outline">
                  Explore Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pt-3">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for building great technology.
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

export default Company;
