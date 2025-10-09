import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu as MenuIcon, X, FileText } from "lucide-react";

export default function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  // Navbar items: Tools before Projects
  const navItems = ["home", "about", "tools", "projects", "contact"];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Resume button handler
  const handleResumeClick = () => {
    const fileUrl = "/Sanjay_Asokan.pdf"; // PDF in public folder

    // Open in new tab
    const newTab = window.open(fileUrl, "_blank");
    if (newTab) newTab.focus();

    // Trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Sanjay_Asokan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        {/* Desktop nav links */}
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

        {/* Right side controls: Theme toggle, then Resume */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-violet-600 text-white hover:bg-pink-500 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Resume button (desktop) */}
          <button
            onClick={handleResumeClick}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300"
          >
            <FileText size={18} /> Resume
          </button>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
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

            {/* Mobile Resume button */}
            <li className="text-center mt-2">
              <button
                onClick={handleResumeClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300"
              >
                <FileText size={18} /> Resume
              </button>
            </li>
          </motion.ul>
        </>
      )}
    </motion.nav>
  );
}
