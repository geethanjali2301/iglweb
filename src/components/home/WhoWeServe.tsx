import { Building2, BookOpen, Truck, Monitor, GraduationCap, Film } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Publishers",
    description: "Major trade and academic publishers trust our platforms for secure content distribution, rights management, and global metadata syndication. We serve 5 of the Big 5 publishers.",
    stat: "500+",
    statLabel: "Publisher Partners",
  },
  {
    icon: BookOpen,
    title: "Libraries",
    description: "Public, academic, and special libraries worldwide leverage our digital lending infrastructure, serving millions of patrons with seamless content access and discovery.",
    stat: "15,000+",
    statLabel: "Libraries Served",
  },
  {
    icon: Truck,
    title: "Content Distributors",
    description: "Distribution partners rely on our ordering, fulfillment, and supply chain platforms to efficiently move content from publishers to retailers and institutions.",
    stat: "10M+",
    statLabel: "Annual Transactions",
  },
  {
    icon: Monitor,
    title: "Digital Media Platforms",
    description: "Media organizations use our cloud infrastructure for content delivery at scale, supporting streaming, downloads, and multi-format distribution globally.",
    stat: "99.99%",
    statLabel: "Platform Uptime",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Universities, K-12 schools, and corporate learning platforms benefit from our subscription management, LMS integrations, and accessible content delivery systems.",
    stat: "2,500+",
    statLabel: "Educational Partners",
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    description: "Newspapers, magazines, and entertainment companies leverage our content management and digital distribution infrastructure for their audiences worldwide.",
    stat: "1B+",
    statLabel: "Content Deliveries",
  },
];

const trustBadges = [
  "Enterprise Publishers",
  "Academic Institutions",
  "Public Libraries",
  "Digital Retailers",
  "Media Companies",
];

export function WhoWeServe() {
  return (
    <section className="py-24 bg-background" id="who-we-serve">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations in the global content ecosystem. From enterprise publishers to regional libraries, we power digital transformation at every scale.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.title}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                <client.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {client.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {client.description}
              </p>
              <div className="pt-6 border-t border-border">
                <div className="text-3xl font-bold gradient-text mb-1">
                  {client.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {client.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by Industry Leaders Worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="px-6 py-3 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
