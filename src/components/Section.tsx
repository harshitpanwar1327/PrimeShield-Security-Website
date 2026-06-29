import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(245,158,11,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(37,99,235,0.35), transparent 45%)"
      }} />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && <span className="eyebrow text-gold">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-white/75">{description}</p>}
      </div>
    </section>
  );
}

export function CTABanner({
  title = "Need Reliable Security Staff?",
  description = "Speak with a PrimeShield consultant and receive a tailored security plan within 24 hours.",
}: { title?: string; description?: string }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
              <p className="mt-3 max-w-xl text-white/75">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-gold">Request Consultation</a>
              <a href="tel:+18005550199" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
