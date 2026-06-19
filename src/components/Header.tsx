import { useState } from "react";
import { Menu, X, Phone ,Shield } from "lucide-react";
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
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
         <div className="w-10 h-10 text-yellow-500 bg-blue-700 flex items-center justify-center">
         <Shield size={16} />
         </div>

          <div>
            <h1 className="font-bold text-2xl text-gray-900">
              PrimeShield
              <span className="text-blue-600"> Security</span>
            </h1>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex items-center gap-2 text-gray-800 font-medium">
            <Phone size={18} />
            <span>+1 (800) 555-0199</span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Get a Quote
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col p-6 gap-5">

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

              <div className="flex items-center gap-2 pt-3">
                <Phone size={18} />
                <span>+1 (800) 555-0199</span>
              </div>

              <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold">
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