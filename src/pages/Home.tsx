import {
  Shield,
  Phone,
  ArrowRight,
  Building2,
  Home,
  Factory,
  Briefcase,
  Clock3,
  Star,
  UserCheck,
  BadgeCheck,
  Zap,
  Headphones,
} from "lucide-react";

function HomePage() {
  const services = [
    {
      title: "Security Guards",
      desc: "Licensed armed and unarmed officers for static posts, patrols and access control.",
    },
    {
      title: "Corporate Security",
      desc: "Lobby management, executive protection and workplace security.",
    },
    {
      title: "Residential Security",
      desc: "24/7 monitoring and gated community patrols.",
    },
    {
      title: "Event Security",
      desc: "Crowd control and emergency response.",
    },
    {
      title: "Industrial Security",
      desc: "Plant protection and asset surveillance.",
    },
    {
      title: "Facility Management",
      desc: "Integrated guarding and concierge support.",
    },
  ];

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="bg-[#08152f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <p className="text-yellow-400 tracking-[4px] uppercase font-semibold">
              PrimeShield Security
            </p>

            <h1 className="text-6xl font-bold leading-tight mt-6">
              Professional Security Solutions You Can
              <span className="block text-yellow-400">Trust</span>
            </h1>

            <p className="text-xl text-slate-300 mt-8">
              Trained, licensed and supervised security personnel for
              corporate offices, residential communities, industrial sites
              and events.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold">
                Get Free Consultation
              </button>

              <button className="border border-white px-8 py-4 rounded-xl">
                Request Security Personnel
              </button>
            </div>

            <div className="flex gap-8 mt-10 text-slate-300">
              <div>✓ Licensed & Insured</div>
              <div>✓ ISO 9001 Certified</div>
              <div>✓ 4.9/5 Rating</div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-slate-800 rounded-3xl p-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">COMMAND CENTER</p>
                <h3 className="text-2xl font-bold">
                  Live Operations
                </h3>
              </div>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-slate-700 p-4 rounded-xl flex justify-between">
                <span>Sites Monitored</span>
                <span>428</span>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl flex justify-between">
                <span>Officers On Duty</span>
                <span>1,964</span>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl flex justify-between">
                <span>Incidents Resolved</span>
                <span>27 Today</span>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl flex justify-between">
                <span>Response Time</span>
                <span>3.2 min</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-4 p-8">
          <div>
            <h2 className="text-5xl font-bold">18+</h2>
            <p>Years of Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">12,000+</h2>
            <p>Guards Deployed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">850+</h2>
            <p>Clients Served</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">42</h2>
            <p>Cities Covered</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-blue-600">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            End-to-End Security Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border rounded-2xl p-8 hover:shadow-lg"
            >
              <Shield className="text-blue-600" />

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-600 mt-4">
                {service.desc}
              </p>

              <button className="text-blue-600 mt-6 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[4px] text-blue-600">
              Why PrimeShield
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Reliability is built into every shift
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              "Verified Personnel",
              "Background Checked",
              "24/7 Availability",
              "Trained Professionals",
              "Quick Deployment",
              "Dedicated Support",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 border"
              >
                <BadgeCheck className="text-yellow-500" />
                <h3 className="text-2xl font-semibold mt-4">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-blue-600">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trusted across every environment
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            "Corporate Offices",
            "Residential Societies",
            "Hotels",
            "Hospitals",
            "Warehouses",
            "Educational Institutions",
            "Construction Sites",
            "Retail Stores",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl border p-8"
            >
              <Building2 className="text-blue-600" />
              <h3 className="text-xl font-semibold mt-4">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#08152f] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold mb-16">
            Trusted by leaders across industries
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-2xl p-8"
              >
                <div className="flex gap-1 text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mt-6 text-lg">
                  PrimeShield transformed our site security.
                </p>

                <h4 className="mt-8 font-bold">
                  Rachel Hartman
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#08152f] to-[#14337a] rounded-3xl p-12 text-white flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-bold">
              Need Reliable Security Staff?
            </h2>

            <p className="text-slate-300 mt-4">
              Speak with a consultant today.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold">
              Request Consultation
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Call Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;