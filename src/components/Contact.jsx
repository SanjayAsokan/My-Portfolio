import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ message: "", success: true });

  const contacts = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      action: () => navigator.clipboard.writeText("sanjayasokan1382000@gmail.com"),
    },
    {
      icon: <FaLinkedin size={24} />,
      title: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/sanjaysan2001/", "_blank"),
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      action: () => window.open("https://github.com/SanjayAsokan", "_blank"),
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "Sending...", success: true });

    try {
      const res = await fetch("https://my-portfolio-fxtx.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setFormStatus({ message: data.message, success: data.success });
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setFormStatus({ message: "Failed to send message. Try again.", success: false });
    } finally {
      setTimeout(() => setFormStatus({ message: "", success: true }), 4000);
    }
  };

  return (
    <section
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } py-0`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s <span className="text-blue-500 dark:text-blue-400">Connect</span> 🚀
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Reach out via the form or the icons below!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className={`w-full max-w-3xl mx-auto flex flex-col gap-4 rounded-2xl p-8 shadow-xl border-2 transition-colors duration-300 mb-10 ${
            isDark
              ? "bg-gray-800 border-gray-700 shadow-gray-700"
              : "bg-white border-gray-300 shadow-gray-300"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`flex-1 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`flex-1 p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className={`w-full p-4 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold transition-colors duration-300 ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Send Message
          </button>

          {formStatus.message && (
            <p
              className={`text-center mt-4 ${
                formStatus.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </motion.form>

        <motion.div className="flex justify-center gap-10 mt-6">
          {contacts.map((c, i) => (
            <motion.button
              key={i}
              onClick={c.action}
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-blue-600 hover:text-white shadow-gray-700"
                  : "bg-white text-gray-900 hover:bg-blue-500 hover:text-white shadow-gray-300"
              }`}
              title={c.title}
            >
              {c.icon}
            </motion.button>
          ))}
        </motion.div>

        <p className="text-sm mt-4 opacity-80">
          You can reach me directly using the icons above.
        </p>
      </div>
    </section>
  );
}
