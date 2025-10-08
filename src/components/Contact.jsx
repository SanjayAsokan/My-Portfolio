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
      action: () =>
        window.open("https://www.linkedin.com/in/sanjaysan2001/", "_blank"),
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      action: () =>
        window.open("https://github.com/SanjayAsokan", "_blank"),
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "Sending...", success: true });

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setFormStatus({ message: data.message, success: data.success });
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setFormStatus({ message: "Failed to send message. Try again.", success: false });
    }

    setTimeout(() => setFormStatus({ message: "", success: true }), 4000);
  };

  return (
    <section
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } py-12`}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            Let’s <span className="text-blue-500 dark:text-blue-400">Connect</span> 🚀
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300">
            Reach out via the form or the icons below!
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`w-full mx-auto flex flex-col gap-3 rounded-2xl p-6 shadow-xl border-2 transition-colors duration-300 ${
            isDark
              ? "bg-gray-800 border-gray-700 shadow-gray-700"
              : "bg-white border-gray-300 shadow-gray-300"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-sm ${
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
              className={`flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-sm ${
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
            rows={2}
            required
            className={`w-full p-3 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-sm ${
              isDark
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />

          <button
            type="submit"
            className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors duration-300 ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Send Message
          </button>

          {formStatus.message && (
            <p
              className={`text-center mt-2 text-sm ${
                formStatus.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {formStatus.message}
            </p>
          )}
        </motion.form>

        {/* Contact Icons */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-2">
            Or reach me directly via:
          </p>
          <motion.div className="flex flex-wrap justify-center gap-4">
            {contacts.map((c, i) => (
              <motion.button
                key={i}
                onClick={c.action}
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
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
        </div>
      </div>
    </section>
  );
}
