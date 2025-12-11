import { CheckCircle } from "lucide-react";

const whyUs = [
  "15+ years of deep expertise in content platforms & library systems",
  "Proven cloud & enterprise infrastructure leadership with Fortune 500 clients",
  "Strong publisher & library ecosystem relationships globally",
  "Secure, compliant, and scalable by design from day one",
  "Long-term platform modernization mindset with continuous innovation",
  "Award-winning customer success and support programs",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50+", label: "Countries" },
  { value: "1B+", label: "Annual Transactions" },
];

export function About() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About iGenie Labs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              iGenie Labs is an enterprise digital technology company focused on building, operating, and scaling platforms for content distribution, commerce, and data infrastructure.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to transform how digital content reaches global audiences, we've built systems that support publishers, libraries, and digital media organizations with secure, compliant, high-availability platforms powering modern content ecosystems.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team combines deep domain expertise in publishing and library technology with cutting-edge engineering capabilities to deliver solutions that scale from startups to Fortune 500 enterprises.
            </p>

            {/* Why Us */}
            <h3 className="text-xl font-bold text-foreground mb-4">Why iGenie Labs</h3>
            <ul className="space-y-3">
              {whyUs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-bold text-2xl">iG</span>
                </div>
                <span className="font-bold text-2xl text-foreground">
                  iGenie<span className="text-primary">Labs</span>
                </span>
              </div>

              <p className="text-muted-foreground mb-12 text-lg">
                Powering the future of digital content infrastructure with enterprise-grade technology
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
