import { useState } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/industries", label: "Industries" },
  { path: "/training", label: "Training" },
  { path: "/contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-700 font-medium hover:text-blue-600 transition duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center shadow-lg">
            <Shield className="text-[#FBBF24]" size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
              PrimeShield
              <span className="text-[#2563EB]"> Security</span>
            </h1>
          </div>

        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex items-center gap-2 text-[#0F172A] font-medium">

            <Phone
              size={18}
              className="text-[#2563EB]"
            />

            <span>+1 (800) 555-0199</span>

          </div>

          <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-semibold">

            Get a Quote

          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="lg:hidden bg-white shadow-xl border-t border-slate-200"
          >

            <div className="flex flex-col gap-5 p-6">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={navClass}
                >
                  {item.label}
                </NavLink>

              ))}

              <div className="flex items-center gap-2 pt-4">

                <Phone
                  size={18}
                  className="text-[#2563EB]"
                />

                <span className="font-medium">
                  +1 (800) 555-0199
                </span>

              </div>

              <button className="bg-[#2563EB] text-white py-3 rounded-xl font-semibold shadow-lg">

                Get a Quote

              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Header;