import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#111827] via-[#061742] to-[#082257] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold mb-6">
            Contact Us
          </p>

          <h1 className="text-6xl font-bold max-w-4xl leading-tight mb-8">
            Talk to a PrimeShield security consultant.
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl">
            Tell us about your site and we'll get back to you within 24
            hours with a tailored proposal.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* FORM */}

            <div className="border rounded-3xl p-10">

              <h2 className="text-5xl font-bold text-[#08152f] mb-3">
                Send us a message
              </h2>

              <p className="text-slate-500 mb-10 text-lg">
                All fields marked * are required.
              </p>

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block font-medium mb-2">
                      Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full border rounded-xl p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full border rounded-xl p-4 outline-none"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block font-medium mb-2">
                      Phone *
                    </label>

                    <input
                      type="text"
                      placeholder="+1 (555) 555-0123"
                      className="w-full border rounded-xl p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Email *
                    </label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border rounded-xl p-4 outline-none"
                    />
                  </div>

                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Service Required *
                  </label>

                  <select className="w-full border rounded-xl p-4 outline-none">
                    <option>Select a service...</option>
                    <option>Corporate Security</option>
                    <option>Residential Security</option>
                    <option>Event Security</option>
                    <option>Industrial Security</option>
                    <option>Hospital Security</option>
                    <option>Hotel Security</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Message *
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your site, requirements and timeline..."
                    className="w-full border rounded-xl p-4 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>

            </div>

            {/* CONTACT INFO */}

            <div className="space-y-6">

              <div className="border rounded-3xl p-8 flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152f] flex items-center justify-center">
                  <Phone className="text-yellow-400" />
                </div>

                <div>
                  <p className="uppercase text-blue-600 font-semibold">
                    Phone
                  </p>

                  <h3 className="text-4xl font-bold text-[#08152f]">
                    +1 (800) 555-0199
                  </h3>

                  <p className="text-slate-500">
                    24/7 command center
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-8 flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152f] flex items-center justify-center">
                  <Mail className="text-yellow-400" />
                </div>

                <div>
                  <p className="uppercase text-blue-600 font-semibold">
                    Email
                  </p>

                  <h3 className="text-3xl font-bold text-[#08152f]">
                    contact@primeshieldsecurity.com
                  </h3>

                  <p className="text-slate-500">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-8 flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152f] flex items-center justify-center">
                  <MapPin className="text-yellow-400" />
                </div>

                <div>
                  <p className="uppercase text-blue-600 font-semibold">
                    Head Office
                  </p>

                  <h3 className="text-3xl font-bold text-[#08152f]">
                    240 Sentinel Avenue, Suite 1200
                  </h3>

                  <p className="text-slate-500">
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-8 flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152f] flex items-center justify-center">
                  <Clock3 className="text-yellow-400" />
                </div>

                <div>
                  <p className="uppercase text-blue-600 font-semibold">
                    Business Hours
                  </p>

                  <h3 className="text-3xl font-bold text-[#08152f]">
                    Mon – Sat: 8:00 AM – 8:00 PM
                  </h3>

                  <p className="text-slate-500">
                    Operations open 24/7
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* MAP */}

          <div className="mt-12 grid lg:grid-cols-2 gap-12">

            <div />

            <div className="border rounded-3xl h-[350px] bg-slate-100 flex flex-col items-center justify-center">

              <MapPin
                size={50}
                className="text-blue-600 mb-4"
              />

              <h3 className="text-2xl font-bold text-center">
                240 Sentinel Avenue, NY 10001
              </h3>

              <p className="text-slate-500">
                Google Map embed placeholder
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}