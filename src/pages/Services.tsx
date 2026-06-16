import {
  Shield,
  ShieldCheck,
  Building2,
  Factory,
  Siren,
  Home,
  Hotel,
  HeartPulse,
  Warehouse,
  HardHat,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Shield,
      title: "Armed Security Guards",
      description:
        "Licensed armed officers for high-risk environments, cash-in-transit and executive protection.",
      responsibilities: [
        "Threat detection & response",
        "Access control at sensitive points",
        "Escort of valuables and personnel",
      ],
      benefits: [
        "Immediate deterrence",
        "Higher level of protection",
        "Coordinated law enforcement response",
      ],
    },

    {
      icon: ShieldCheck,
      title: "Unarmed Security Guards",
      description:
        "Professional unarmed officers for static posts, patrols, lobbies and visitor management.",
      responsibilities: [
        "Front desk & reception support",
        "Patrol & perimeter checks",
        "Incident logging and reporting",
      ],
      benefits: [
        "Approachable presence",
        "Cost-effective coverage",
        "Strong customer-service skills",
      ],
    },

    {
      icon: Building2,
      title: "Corporate Security",
      description:
        "Integrated security programs for headquarters, campuses and offices.",
      responsibilities: [
        "Lobby management",
        "Access control",
        "Executive protection",
      ],
      benefits: [
        "Brand representation",
        "Policy compliance",
        "Reduced incidents",
      ],
    },

    {
      icon: Factory,
      title: "Industrial Security",
      description:
        "Manufacturing facility protection with strict safety adherence.",
      responsibilities: [
        "Gate management",
        "Perimeter patrols",
        "Material verification",
      ],
      benefits: [
        "Loss prevention",
        "OSHA-aligned safety",
        "Reduced shrinkage",
      ],
    },

    {
      icon: Siren,
      title: "Event Security",
      description:
        "Crowd management, VIP protection and emergency response.",
      responsibilities: [
        "Entry screening",
        "Crowd control",
        "VIP escort",
      ],
      benefits: [
        "Guest safety",
        "Rapid escalation",
        "Venue coordination",
      ],
    },

    {
      icon: Home,
      title: "Residential Security",
      description:
        "Gated community and luxury residence protection.",
      responsibilities: [
        "Visitor screening",
        "Vehicle patrols",
        "Emergency response",
      ],
      benefits: [
        "Peace of mind",
        "Visitor records",
        "Professional presence",
      ],
    },

    {
      icon: Hotel,
      title: "Hotel Security",
      description:
        "Hospitality-trained officers protecting guests and staff.",
      responsibilities: [
        "Lobby patrols",
        "Event support",
        "Guest dispute mediation",
      ],
      benefits: [
        "Guest experience",
        "Reduced incidents",
        "24/7 reporting",
      ],
    },

    {
      icon: HeartPulse,
      title: "Hospital Security",
      description:
        "Healthcare-trained officers for hospitals and clinics.",
      responsibilities: [
        "ER access control",
        "Patient management",
        "Restricted-area enforcement",
      ],
      benefits: [
        "HIPAA-conscious operations",
        "De-escalation training",
        "Improved staff safety",
      ],
    },

    {
      icon: Warehouse,
      title: "Warehouse Security",
      description:
        "Distribution center and logistics protection.",
      responsibilities: [
        "Truck logging",
        "Dock patrols",
        "CCTV monitoring",
      ],
      benefits: [
        "Lower shrinkage",
        "Audit-ready records",
        "Faster operations",
      ],
    },

    {
      icon: HardHat,
      title: "Construction Site Security",
      description:
        "Access control and after-hours patrols for active job sites.",
      responsibilities: [
        "Tool protection",
        "Credential verification",
        "Perimeter inspections",
      ],
      benefits: [
        "Reduced theft",
        "Lower insurance exposure",
        "Safer operations",
      ],
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#08152f] to-[#0b255f] text-white pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Our Services
          </p>

          <h1 className="text-6xl font-bold max-w-5xl mt-6 leading-tight">
            Comprehensive security guard services for every environment.
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl mt-8">
            From a single uniformed officer to a fully managed program,
            PrimeShield designs the right security solution for your operation.
          </p>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="border rounded-3xl p-10 bg-white"
              >
                <div className="grid lg:grid-cols-[120px_1fr_220px] gap-8 items-center">

                  {/* ICON */}

                  <div className="w-20 h-20 rounded-3xl bg-[#08152f] flex items-center justify-center">
                    <Icon size={40} className="text-yellow-400" />
                  </div>

                  {/* CONTENT */}

                  <div>

                    <h2 className="text-4xl font-bold text-[#08152f]">
                      {service.title}
                    </h2>

                    <p className="text-slate-500 text-xl mt-4">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-8">

                      <div>
                        <h3 className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
                          Key Responsibilities
                        </h3>

                        <div className="space-y-3">
                          {service.responsibilities.map((item) => (
                            <div className="flex gap-3 items-start">
                              <CheckCircle
                                size={18}
                                className="text-blue-600 mt-1"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
                          Benefits
                        </h3>

                        <div className="space-y-3">
                          {service.benefits.map((item) => (
                            <div className="flex gap-3 items-start">
                              <CheckCircle
                                size={18}
                                className="text-yellow-500 mt-1"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* BUTTON */}

                  <div className="flex justify-center lg:justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition">
                      Inquire Now
                      <ArrowRight size={18} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-[#08152f] via-[#02163f] to-[#17347d] text-white p-16 flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>
              <h2 className="text-5xl font-bold">
                Not sure which service fits your needs?
              </h2>

              <p className="text-slate-300 text-xl mt-4 max-w-2xl">
                Our consultants will assess your site and recommend the right
                mix of officers, technology and supervision.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold">
                Request Consultation
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-xl">
                Call Now
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;