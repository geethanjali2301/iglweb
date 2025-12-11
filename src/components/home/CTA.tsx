import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText, PlayCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build the Future of{" "}
            <span className="text-primary">Digital Content Infrastructure</span>
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-4">
            Ready to transform your content operations with enterprise-grade technology? Let's discuss how iGenie Labs can power your digital ecosystem.
          </p>

          <p className="text-primary-foreground/60 mb-10">
            Join 500+ publishers, 15,000+ libraries, and leading content organizations who trust iGenie Labs for their digital infrastructure needs.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                Schedule a Demo
                <PlayCircle className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link to="/capabilities" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Request Platform Overview</span>
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link to="/company" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <FileText className="w-4 h-4" />
              <span className="text-sm">View Case Studies</span>
            </Link>
          </div>

          {/* Contact Email */}
          <a
            href="mailto:partnerships@igenielabs.com"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Mail className="w-5 h-5" />
            <span>partnerships@igenielabs.com</span>
            <span className="text-primary-foreground/50 text-sm">For partnership inquiries</span>
          </a>
        </div>
    </section>
  );
}
