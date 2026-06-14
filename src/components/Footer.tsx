import {
  Phone,
  MapPin,
  Globe,
  Send,
  Camera,
  Share2,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#071633] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#132445] p-3 rounded-xl">
                <img
                  src="/logo.png"
                  alt="PrimeShield"
                  className="w-6 h-6"
                />
              </div>

              <h2 className="text-3xl font-bold leading-tight">
                PrimeShield
                <br />
                Security
              </h2>
            </div>

            <p className="text-gray-300 leading-8">
              Trusted provider of trained,
              licensed security guards and
              integrated protection services for
              businesses, residences and public
              venues across the country.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <div className="bg-[#132445] p-3 rounded-xl hover:bg-[#1b315c] cursor-pointer">
                <Share2 size={20} />
              </div>

              <div className="bg-[#132445] p-3 rounded-xl hover:bg-[#1b315c] cursor-pointer">
                <Globe size={20} />
              </div>

              <div className="bg-[#132445] p-3 rounded-xl hover:bg-[#1b315c] cursor-pointer">
                <Send size={20} />
              </div>

              <div className="bg-[#132445] p-3 rounded-xl hover:bg-[#1b315c] cursor-pointer">
                <Camera size={20} />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#f7b22c] font-bold text-xl mb-6">
              COMPANY
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <a href="/about">About Us</a>
              <a href="/training">Training & Recruitment</a>
              <a href="/industries">Industries</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#f7b22c] font-bold text-xl mb-6">
              SERVICES
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <p>Corporate Security</p>
              <p>Residential Security</p>
              <p>Event Security</p>
              <p>Industrial Security</p>
              <p>Hospital Security</p>
              <p>Hotel Security</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f7b22c] font-bold text-xl mb-6">
              CONTACT
            </h3>

            <div className="flex flex-col gap-6 text-gray-300">

              <div className="flex gap-3">
                <Phone className="text-[#f7b22c]" />
                <span>+1 (800) 555-0199</span>
              </div>

              <div>
                contact@primeshieldsecurity.com
              </div>

              <div className="flex gap-3">
                <MapPin
                  className="text-[#f7b22c]"
                  size={20}
                />
                <span>
                  240 Sentinel Avenue,
                  Suite 1200,
                  New York, NY 10001
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1d2f54] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">

          <p>
            © 2026 PrimeShield Security Services.
            All rights reserved.
          </p>

          <p>
            Licensed • Bonded • Insured
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;