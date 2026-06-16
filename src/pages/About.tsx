import {
  Building2,
  Users,
  GraduationCap,
  Award,
  Target,
  Eye,
  Shield,
  BadgeCheck,
  UserCheck,
  CheckCircle,
} from "lucide-react";

function About() {
  const values = [
    {
      title: "Integrity",
      desc: "We operate with uncompromising honesty in every interaction and contract.",
    },
    {
      title: "Discipline",
      desc: "Military-grade standards of conduct, presentation and operational rigor.",
    },
    {
      title: "Reliability",
      desc: "Predictable, consistent service every shift, every site, every time.",
    },
    {
      title: "Professionalism",
      desc: "Trained officers who represent your brand with respect and courtesy.",
    },
  ];

  const leaders = [
    {
      name: "Marcus Reyes",
      role: "Founder & CEO",
      desc: "25 years in protective services; former federal law enforcement.",
    },
    {
      name: "Elena Petrova",
      role: "Chief Operations Officer",
      desc: "Built nationwide command centers serving Fortune 500 clients.",
    },
    {
      name: "James Whitfield",
      role: "Head of Training",
      desc: "Designs PrimeShield's 200-hour officer certification curriculum.",
    },
    {
      name: "Aisha Khan",
      role: "Director of Client Success",
      desc: "Leads our dedicated account management organization.",
    },
  ];

  const timeline = [
    {
      year: "2007",
      title: "Founded in New York",
      desc: "Started with 12 officers protecting two corporate campuses.",
    },
    {
      year: "2012",
      title: "Expanded to 10 Cities",
      desc: "Crossed 1,000 deployed officers and ISO certification.",
    },
    {
      year: "2017",
      title: "24/7 Command Center",
      desc: "Launched centralized supervision and incident response hub.",
    },
    {
      year: "2021",
      title: "Integrated Facility Services",
      desc: "Added concierge and facility management divisions.",
    },
    {
      year: "2026",
      title: "12,000+ Officers",
      desc: "Serving 850+ clients across 42 cities.",
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#08152f] to-[#0b255f] text-white pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            About Us
          </p>

          <h1 className="text-6xl font-bold max-w-4xl mt-6 leading-tight">
            Eighteen years of protecting what matters most.
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl mt-8">
            PrimeShield Security is a national, full-service security agency
            built on discipline, transparency and a relentless focus on the
            people we protect.
          </p>

        </div>
      </section>

      {/* STORY */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold mt-4">
              A security partner you can count on
            </h2>

            <p className="text-slate-600 text-xl mt-8 leading-relaxed">
              Founded in 2007 by former law-enforcement and corporate-security
              leaders, PrimeShield was built to solve the most common complaints
              about contract guarding.
            </p>

            <p className="text-slate-600 text-xl mt-6 leading-relaxed">
              Every officer goes through 200+ hours of classroom and field
              training. Every site is supervised by a 24/7 command center.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="border rounded-3xl p-8">
              <Building2 className="text-blue-600" size={34} />
              <h3 className="text-5xl font-bold mt-6">850+</h3>
              <p className="text-slate-500 mt-2">Active Clients</p>
            </div>

            <div className="border rounded-3xl p-8">
              <Users className="text-blue-600" size={34} />
              <h3 className="text-5xl font-bold mt-6">12,000+</h3>
              <p className="text-slate-500 mt-2">Trained Officers</p>
            </div>

            <div className="border rounded-3xl p-8">
              <GraduationCap className="text-blue-600" size={34} />
              <h3 className="text-5xl font-bold mt-6">200+ hrs</h3>
              <p className="text-slate-500 mt-2">Training Per Officer</p>
            </div>

            <div className="border rounded-3xl p-8">
              <Award className="text-blue-600" size={34} />
              <h3 className="text-5xl font-bold mt-6">ISO 9001</h3>
              <p className="text-slate-500 mt-2">Certified Operations</p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION VISION */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="bg-white p-10 rounded-3xl border">
            <Target size={40} className="text-yellow-500" />
            <h3 className="text-4xl font-bold mt-6">Our Mission</h3>
            <p className="text-slate-600 text-xl mt-6">
              Deliver dependable technology-enabled security services that
              allow our clients to focus on running their business.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border">
            <Eye size={40} className="text-yellow-500" />
            <h3 className="text-4xl font-bold mt-6">Our Vision</h3>
            <p className="text-slate-600 text-xl mt-6">
              To be the most trusted security partner in every market we
              serve.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center uppercase tracking-[4px] text-blue-600">
            Our Values
          </p>

          <h2 className="text-center text-5xl font-bold mt-4">
            The standards we live by
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="border rounded-3xl p-10 text-center"
              >
                <Shield className="mx-auto text-yellow-500" size={40} />

                <h3 className="text-3xl font-semibold mt-6">
                  {value.title}
                </h3>

                <p className="text-slate-600 mt-4">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center uppercase tracking-[4px] text-blue-600">
            Leadership
          </p>

          <h2 className="text-center text-5xl font-bold mt-4">
            The team behind PrimeShield
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="h-64 bg-gradient-to-br from-[#08152f] to-blue-600"></div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {leader.name}
                  </h3>

                  <p className="text-blue-600 mt-2">
                    {leader.role}
                  </p>

                  <p className="text-slate-600 mt-4">
                    {leader.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRAINING */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <p className="uppercase tracking-[4px] text-blue-600">
              Training & Compliance
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Officers prepared for every scenario
            </h2>

            <ul className="space-y-5 mt-10">
              {[
                "State licensing & verified ID badges",
                "Continuous background re-screening",
                "Drug & alcohol testing program",
                "Live-fire and unarmed defense modules",
                "Customer service & soft-skills training",
              ].map((item) => (
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-100 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold">
              Certifications & Licenses
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "ISO 9001:2015",
                "ISO 14001",
                "OSHA Compliant",
                "PSARA Licensed",
                "BSCAA Member",
                "ASIS International",
              ].map((cert) => (
                <div
                  key={cert}
                  className="bg-white border rounded-xl p-4 text-center font-semibold"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-center uppercase tracking-[4px] text-blue-600">
            Our Journey
          </p>

          <h2 className="text-center text-5xl font-bold mt-4">
            Milestones along the way
          </h2>

          <div className="mt-20 space-y-16">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="border-l-4 border-blue-600 pl-8"
              >
                <p className="text-blue-600 font-bold text-xl">
                  {item.year}
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-[#08152f] to-[#14337a] p-12 text-white flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>
              <h2 className="text-5xl font-bold">
                Need Reliable Security Staff?
              </h2>

              <p className="text-slate-300 mt-4 text-xl">
                Speak with a PrimeShield consultant today.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold">
                Request Consultation
              </button>

              <button className="border px-8 py-4 rounded-xl">
                Call Now
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;