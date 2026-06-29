import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Camera,
  Clock,
  Eye,
  Globe,
  GraduationCap,
  HardHat,
  Headset,
  Home,
  Hotel,
  Lock,
  Menu,
  Send,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Star,
  Stethoscope,
  Store,
  Users,
  Warehouse,
  Zap,
} from "lucide-react"

const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "ISO 9001 Certified" },
  { icon: Star, label: "4.9 / 5 Client Rating" },
]

const operations = [
  { icon: Eye, label: "Sites Monitored", value: "428" },
  { icon: Users, label: "Officers On Duty", value: "1,964" },
  { icon: Siren, label: "Incidents Resolved", value: "27 today" },
  { icon: Clock, label: "Avg. Response Time", value: "3.2 min" },
]

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "12,000+", label: "Guards Deployed" },
  { value: "850+", label: "Clients Served" },
  { value: "42", label: "Cities Covered" },
]

const services = [
  {
    icon: ShieldCheck,
    title: "Security Guards",
    description: "Licensed armed and unarmed officers for static posts, patrols and access control.",
  },
  {
    icon: Building2,
    title: "Corporate Security",
    description: "Lobby management, executive protection, and integrated workplace security programs.",
  },
  {
    icon: Home,
    title: "Residential Security",
    description: "Gated community patrols, visitor screening and 24/7 monitoring for residences.",
  },
  {
    icon: CalendarClock,
    title: "Event Security",
    description: "Crowd control, VIP escort and emergency response for events of any scale.",
  },
  {
    icon: Warehouse,
    title: "Industrial Security",
    description: "Plant protection, asset surveillance and loss-prevention for industrial sites.",
  },
  {
    icon: Lock,
    title: "Facility Management",
    description: "Integrated guarding plus housekeeping, front-desk and concierge support.",
  },
]

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Personnel",
    description: "Every officer carries valid state licenses, IDs and certifications.",
  },
  {
    icon: ShieldAlert,
    title: "Background Checked",
    description: "Multi-level background, criminal record and reference verification.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock command center with rapid replacement guarantees.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "200+ hours of classroom and on-field training before deployment.",
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    description: "Standard placement within 24–48 hours of service confirmation.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "A named account manager for every client, available around the clock.",
  },
]

const industries = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Home, label: "Residential Societies" },
  { icon: Hotel, label: "Hotels" },
  { icon: Stethoscope, label: "Hospitals" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: HardHat, label: "Construction Sites" },
  { icon: Store, label: "Retail Stores" },
]

const testimonials = [
  {
    quote:
      "PrimeShield transformed our site security. Their officers are disciplined, well-presented and consistently professional.",
    name: "Rachel Hartman",
    role: "Facilities Director, Northbridge Tower",
  },
  {
    quote:
      "We needed event security at short notice for a 5,000-guest gala. PrimeShield handled it flawlessly end-to-end.",
    name: "David Okafor",
    role: "Event Producer, Halcyon Group",
  },
  {
    quote:
      "The reporting and supervision standards are the best we've experienced in 15 years of contracting security.",
    name: "Priya Menon",
    role: "Operations Head, Meridian Logistics",
  },
]

const companyLinks = [
  "About Us",
  "Training & Recruitment",
  "Industries",
  "Contact",
  "Privacy Policy",
  "Terms & Conditions",
]

const socials = [Share2, Globe, Send, Camera]

const gridStyle = {
  backgroundImage:
    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
  backgroundSize: "56px 56px",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-navy">
              <Shield className="size-5 text-amber" />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              PrimeShield <span className="text-brand-blue">Security</span>
            </span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]" style={gridStyle} />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">PrimeShield Security</p>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Professional Security Solutions You Can <span className="text-amber">Trust</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              Trained, licensed and supervised security personnel for corporate offices, residential communities,
              industrial sites and events — backed by a 24/7 command center.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-amber-dark"
              >
                Get Free Consultation
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Request Security Personnel
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-slate-300">
                  <badge.icon className="size-5 text-amber" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Command Center */}
        <section className="relative overflow-hidden bg-navy pb-20">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]" style={gridStyle} />
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-navy-light/80 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-amber">
                    <Shield className="size-6 text-navy" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Command Center</p>
                    <p className="text-lg font-bold text-white">Live Operations</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  ACTIVE
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {operations.map((op) => (
                  <div key={op.label} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <op.icon className="size-5 text-amber" />
                      <span className="text-sm font-medium text-slate-200">{op.label}</span>
                    </div>
                    <span className="text-base font-bold text-white">{op.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="relative bg-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 -mt-2 translate-y-1/2 rounded-2xl bg-card p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-background py-24 pt-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Our Services</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                End-to-end security services
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                From a single officer at the lobby to a fully managed security program — PrimeShield delivers.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <service.icon className="size-6 text-brand-blue" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Learn more <ArrowRight className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why PrimeShield */}
        <section className="bg-[#eef2fb] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Why PrimeShield</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Reliability is built into every shift
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                A disciplined operating model, technology-enabled supervision and a service guarantee you can rely on.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5 rounded-2xl bg-card p-7 shadow-sm">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy">
                    <feature.icon className="size-6 text-amber" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Industries We Serve</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Trusted across every environment
              </h2>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <industry.icon className="size-6 text-brand-blue" />
                  </span>
                  <span className="text-lg font-medium text-foreground">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-navy py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">Client Testimonials</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Trusted by leaders across industries
              </h2>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col rounded-2xl border border-white/10 bg-navy-card p-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="mt-6 flex-1 text-lg leading-relaxed text-slate-200">{t.quote}</p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-navy to-[#16306b] p-10 sm:p-12">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Need Reliable Security Staff?
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-slate-300">
                    Speak with a PrimeShield consultant and receive a tailored security plan within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-amber-dark"
                  >
                    Request Consultation
                  </a>
                  <a
                    href="tel:+10000000000"
                    className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-navy-card">
                  <Shield className="size-5 text-amber" />
                </span>
                <span className="text-lg font-bold text-white">PrimeShield Security</span>
              </div>
              <p className="mt-5 leading-relaxed text-slate-400">
                Trusted provider of trained, licensed security guards and integrated protection services for
                businesses, residences and public venues across the country.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex size-10 items-center justify-center rounded-lg bg-navy-card text-slate-300 transition-colors hover:bg-amber hover:text-navy"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-amber">Company</h3>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-300 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500">
            © {new Date().getFullYear()} PrimeShield Security. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
