import { Helmet } from "react-helmet-async";
import { Shield, Building2, Users, Lock, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const stats = [
  {
    label: "Security Officers",
    value: "500+",
  },
  {
    label: "Client Sites",
    value: "250+",
  },
  {
    label: "Coverage",
    value: "24/7",
  },
];

const services = [
  {
    title: "Corporate Security",
    text: "Professional officers for offices, headquarters and business campuses.",
  },
  {
    title: "Residential Security",
    text: "Gatehouse management, visitor screening and community patrols.",
  },
  {
    title: "Event Security",
    text: "Crowd control, VIP protection and emergency response planning.",
  },
  {
    title: "Industrial Security",
    text: "Facility protection, access control and perimeter monitoring.",
  },
  {
    title: "Hospital Security",
    text: "Healthcare-trained officers ensuring patient and staff safety.",
  },
  {
    title: "Hotel Security",
    text: "Hospitality-focused officers protecting guests and operations.",
  },
];

const industries = [
  "Corporate Offices",
  "Residential Communities",
  "Healthcare Facilities",
  "Educational Institutions",
  "Manufacturing Units",
  "Warehouses & Logistics",
];

function Home() {
  return (
    <>
      <Helmet>
        <title>PrimeShield Security | Professional Security Services</title>

        <meta
          name="description"
          content="PrimeShield Security provides trained, licensed security guards and integrated protection services for businesses, residences, healthcare facilities and events."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#08152f] via-[#071d4a] to-[#0d2b75] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
          <span className="text-[#f8b321] uppercase tracking-[0.25em] text-sm">
            Trusted Security Partner
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6 leading-tight max-w-4xl">
            Security solutions built around your business.
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            From a single officer to fully managed security programs,
            PrimeShield delivers trained professionals, advanced
            supervision and 24/7 protection.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <NavLink
              to="/services"
              className="bg-[#3461ff] hover:bg-[#2852e8] text-white px-8 py-4 rounded-lg font-semibold"
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="uppercase tracking-[0.25em] text-[#3461ff] text-sm">
                About PrimeShield
              </span>

              <h2 className="text-5xl font-bold text-[#0b1736] mt-4">
                Professional protection backed by proven processes.
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                PrimeShield Security provides licensed security officers,
                site supervision and integrated protection programs across
                commercial, residential, healthcare and industrial sectors.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Every officer is selected, screened, trained and supervised
                through a structured recruitment and training process to
                ensure consistent service quality.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10 border-t pt-6">
                {stats.map((item, index) => (
                  <div key={index}>
                    <p className="text-xs uppercase text-gray-500">
                      {item.label}
                    </p>

                    <p className="text-3xl font-bold text-[#3461ff] mt-2">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-2xl p-12 flex justify-center">
              <Shield size={180} className="text-[#3461ff]" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.25em] text-[#3461ff] text-sm">
              Our Services
            </span>

            <h2 className="text-5xl font-bold mt-4 text-[#0b1736]">
              Security services for every environment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border p-8 hover:shadow-lg transition"
              >
                <Shield className="text-[#3461ff]" size={36} />

                <h3 className="text-2xl font-semibold mt-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <span className="uppercase tracking-[0.25em] text-[#3461ff] text-sm">
              Industries We Serve
            </span>

            <h2 className="text-5xl font-bold text-[#0b1736] mt-4">
              Customized protection for every sector
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 bg-[#f8fafc]"
              >
                <Building2
                  className="text-[#3461ff]"
                  size={32}
                />

                <h3 className="mt-4 text-xl font-semibold">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-gradient-to-r from-[#08152f] via-[#071d4a] to-[#16357f] rounded-3xl p-14 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-white text-5xl font-bold max-w-2xl">
                Need a tailored security solution?
              </h2>

              <p className="text-gray-300 mt-4">
                Speak with our consultants and receive a customized
                protection plan within 24 hours.
              </p>
            </div>

            <NavLink
              to="/contact"
              className="bg-[#f8b321] text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
            >
              Request Consultation
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;