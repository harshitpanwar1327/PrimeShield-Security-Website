import {
  Building2,
  Home,
  HeartPulse,
  GraduationCap,
  Factory,
  Warehouse,
  Hotel,
  Siren,
  CheckCircle,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices",
      challenges: [
        "Visitor management at scale",
        "Tailgating & credential abuse",
        "Executive protection needs",
      ],
      solutions: [
        "Trained lobby officers",
        "Access control programs",
        "Executive protection details",
      ],
      benefits: [
        "Polished front of house",
        "Reduced unauthorized access",
        "Workplace policy compliance",
      ],
    },

    {
      icon: Home,
      title: "Residential Communities",
      challenges: [
        "Unscreened visitors",
        "Vehicle access & parking",
        "After-hours patrol gaps",
      ],
      solutions: [
        "24/7 gatehouse officers",
        "Visitor log & ID verification",
        "Scheduled patrol routing",
      ],
      benefits: [
        "Safer environment",
        "Recorded visitor history",
        "Quick incident escalation",
      ],
    },

    {
      icon: HeartPulse,
      title: "Healthcare Facilities",
      challenges: [
        "ER aggression & disputes",
        "Drug storage protection",
        "Patient safety concerns",
      ],
      solutions: [
        "De-escalation trained officers",
        "Restricted area control",
        "ER & ward coverage",
      ],
      benefits: [
        "Safer clinical environment",
        "Compliance with regulations",
        "Staff retention & morale",
      ],
    },

    {
      icon: GraduationCap,
      title: "Educational Institutions",
      challenges: [
        "Campus access control",
        "Event & exam security",
        "Visitor screening",
      ],
      solutions: [
        "Campus patrol officers",
        "Event coverage teams",
        "Background-checked personnel",
      ],
      benefits: [
        "Safer learning environment",
        "Parent confidence",
        "Quick incident response",
      ],
    },

    {
      icon: Factory,
      title: "Manufacturing Units",
      challenges: [
        "Material pilferage",
        "Contractor management",
        "Safety compliance",
      ],
      solutions: [
        "Gate & dock supervision",
        "Material movement checks",
        "Site patrol officers",
      ],
      benefits: [
        "Lower shrinkage",
        "Audit-ready records",
        "Improved safety culture",
      ],
    },

    {
      icon: Warehouse,
      title: "Warehouses & Logistics",
      challenges: [
        "Inventory shrinkage",
        "Truck dwell time",
        "Multi-shift coverage",
      ],
      solutions: [
        "Truck logging",
        "Yard patrols",
        "24/7 supervision",
      ],
      benefits: [
        "Faster turnaround",
        "Lower losses",
        "Operational visibility",
      ],
    },

    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      challenges: [
        "Guest disputes",
        "Banquet traffic",
        "Back-of-house safety",
      ],
      solutions: [
        "Hospitality-trained officers",
        "Floor patrols",
        "Event coverage teams",
      ],
      benefits: [
        "Premium guest experience",
        "Brand alignment",
        "Reduced incidents",
      ],
    },

    {
      icon: Siren,
      title: "Events & Exhibitions",
      challenges: [
        "Large crowds",
        "VIP movement",
        "Emergency readiness",
      ],
      solutions: [
        "Crowd management teams",
        "VIP protection officers",
        "Emergency planning",
      ],
      benefits: [
        "Safer attendee experience",
        "Smooth ingress/egress",
        "Coordinated response",
      ],
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#08152f] to-[#0b255f] text-white pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Industries We Serve
          </p>

          <h1 className="text-6xl font-bold max-w-5xl mt-6 leading-tight">
            Sector-specific security programs that actually fit.
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl mt-8">
            Each industry has unique risks. PrimeShield designs the right team,
            training and technology to match yours.
          </p>

        </div>
      </section>

      {/* INDUSTRY CARDS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="border rounded-3xl overflow-hidden"
              >

                <div className="bg-slate-100 p-8 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-[#08152f] flex items-center justify-center">
                    <Icon className="text-yellow-400" size={40} />
                  </div>

                  <h2 className="text-4xl font-bold text-[#08152f]">
                    {industry.title}
                  </h2>
                </div>

                <div className="p-10 grid lg:grid-cols-3 gap-10">

                  <div>
                    <h3 className="text-red-500 uppercase font-semibold tracking-wide mb-5">
                      Common Challenges
                    </h3>

                    <div className="space-y-4">
                      {industry.challenges.map((item) => (
                        <div className="flex gap-3">
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
                    <h3 className="text-blue-600 uppercase font-semibold tracking-wide mb-5">
                      Our Solutions
                    </h3>

                    <div className="space-y-4">
                      {industry.solutions.map((item) => (
                        <div className="flex gap-3">
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
                    <h3 className="text-yellow-500 uppercase font-semibold tracking-wide mb-5">
                      Benefits
                    </h3>

                    <div className="space-y-4">
                      {industry.benefits.map((item) => (
                        <div className="flex gap-3">
                          <CheckCircle
                            size={18}
                            className="text-blue-600 mt-1"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
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
              <h2 className="text-5xl font-bold max-w-3xl">
                Get a security plan tailored to your industry
              </h2>

              <p className="text-slate-300 text-xl mt-4 max-w-2xl">
                Tell us about your site and operation — we'll build the right
                program in 24 hours.
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

export default Industries;