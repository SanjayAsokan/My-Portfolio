import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Tools now comes before Projects
  const navItems = ["home", "about", "tools", "projects", "contact"];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.nav
      className={`w-full py-4 px-6 fixed top-0 left-0 z-50 transition-colors duration-500 border-b ${
        isDark
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-gray-900 border-gray-300 shadow-md"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Centered nav links (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize font-semibold hover:text-pink-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle (icon) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-violet-600 text-white hover:bg-pink-500 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu button (icon) */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg bg-violet-600 text-white hover:bg-pink-500 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Background blur + dropdown */}
      {isOpen && (
        <>
          {/* Blur background */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown menu */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 w-full md:hidden mt-0 rounded-b-lg shadow-lg p-4 space-y-3 transition-colors duration-500 z-50 ${
              isDark
                ? "bg-gray-700 text-white border-t border-gray-600"
                : "bg-gray-100 text-gray-900 border-t border-gray-300"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer capitalize font-semibold hover:text-pink-500 text-center transition-colors"
              >
                <a href={`#${item}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        </>
      )}
    </motion.nav>
  );
}
