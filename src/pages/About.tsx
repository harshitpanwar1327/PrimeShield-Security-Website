import { Helmet } from "react-helmet-async";
import {
  Shield,
  Users,
  Award,
  CheckCircle,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const features = [
  {
    icon: <Shield size={32} />,
    title: "Licensed Professionals",
    description:
      "All officers undergo screening, verification and professional training.",
  },
  {
    icon: <Users size={32} />,
    title: "24/7 Coverage",
    description:
      "Round-the-clock security support for businesses and communities.",
  },
  {
    icon: <Award size={32} />,
    title: "Quality Assurance",
    description:
      "Regular audits, supervision and performance monitoring on every site.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Security Officers",
  },
  {
    value: "250+",
    label: "Protected Sites",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Operations Support",
  },
];

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | PrimeShield Security</title>

        <meta
          name="description"
          content="Learn about PrimeShield Security, our mission, values and commitment to delivering professional security services."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#08152f] via-[#071d4a] to-[#0d2b75] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <span className="uppercase tracking-[0.25em] text-[#f8b321] text-sm">
            About PrimeShield
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-bold mt-6 max-w-4xl">
            Security built on trust, training and accountability.
          </h1>

          <p className="text-gray-300 text-xl mt-8 max-w-3xl">
            PrimeShield Security delivers reliable protection solutions
            through carefully selected officers, continuous training and
            proactive site supervision.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#0b1736]">
                Protecting people, property and operations.
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed">
                PrimeShield Security provides professional security
                services for corporate offices, residential communities,
                healthcare facilities, industrial sites, hotels and
                public events.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Our officers are selected through a structured
                recruitment process and trained using industry-approved
                programs to ensure every client receives dependable,
                professional protection.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                From access control and visitor management to emergency
                response and patrol operations, we provide tailored
                security programs designed around each client's needs.
              </p>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl p-16 flex justify-center">
              <Shield size={180} className="text-[#3461ff]" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center">
            <span className="uppercase tracking-[0.25em] text-[#3461ff] text-sm">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-bold text-[#0b1736] mt-4">
              A security partner you can depend on
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border"
              >
                <div className="text-[#3461ff]">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mt-5">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-[#3461ff]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl border">
              <Target
                size={40}
                className="text-[#3461ff]"
              />

              <h3 className="text-3xl font-bold mt-6">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                To provide dependable, professional security services
                that protect people, property and business operations
                while maintaining the highest standards of integrity and
                accountability.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border">
              <Eye
                size={40}
                className="text-[#3461ff]"
              />

              <h3 className="text-3xl font-bold mt-6">
                Our Vision
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                To become the most trusted security services provider by
                delivering innovative solutions, exceptional officer
                training and unmatched client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#0b1736]">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              "Integrity in every action",
              "Commitment to client success",
              "Continuous officer development",
              "Professional accountability",
              "Operational excellence",
              "Community safety and trust",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#f8fafc] p-6 rounded-xl"
              >
                <CheckCircle className="text-[#3461ff]" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="bg-gradient-to-r from-[#08152f] via-[#071d4a] to-[#16357f] rounded-3xl p-14 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-white text-5xl font-bold">
                Ready to secure your site?
              </h2>

              <p className="text-gray-300 mt-4">
                Speak with our consultants and receive a customized
                security proposal within 24 hours.
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

export default About;