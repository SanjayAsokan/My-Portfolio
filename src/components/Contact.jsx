// src/components/Contact.jsx
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ isDark }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      action: () => handleCopy("sanjayasokan1382000@gmail.com"),
      description: "Click to copy my email",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      action: () => window.open("https://www.linkedin.com/in/sanjaysan2001/", "_blank"),
      description: "Visit my LinkedIn",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      action: () => window.open("https://github.com/SanjayAsokan", "_blank"),
      description: "Check my GitHub",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      action: () => window.open("https://wa.me/919159625947", "_blank"),
      description: "Chat on WhatsApp",
    },
  ];

  const floatingEmojis = ["📧", "💻", "🚀", "🌟", "📱"];

  return (
    <section
      className={`relative w-full transition-colors duration-500 py-16 px-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Floating Emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 95}%`,
            zIndex: 0,
          }}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 4,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative z-10">
        Contact Me
      </h2>

      {/* Quote */}
      <p className="text-center text-lg md:text-xl italic mb-12 relative z-10">
        "Opportunities don't happen, you create them." – Chris Grosser
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {contacts.map((contact, i) => (
          <motion.div
            key={i}
            onClick={contact.action}
            className={`cursor-pointer flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg border-2 transition-all duration-300 text-center
              ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  : "bg-white border-gray-300 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl">{contact.icon}</div>
            <h3 className="text-xl font-semibold">{contact.name}</h3>
            <p className="text-sm">{contact.description}</p>
          </motion.div>
        ))}
      </div>

      {copied && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Email copied to clipboard!
        </motion.div>
      )}
    </section>
  );
}
