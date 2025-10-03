// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";

// Import your project images
import ecommerceImg from "../assets/ecommerce.png";
import learningImg from "../assets/learning.png";
import tickentryImg from "../assets/tickentry.png";
import revampedImg from "../assets/revamped.png";

// Project data with actual GitHub & Deploy links
const projects = [
  {
    title: "Multi-Vendor E-Commerce Marketplace",
    demoLink: "https://idyllic-swan-5001c9.netlify.app/",
    codeLink: "https://github.com/SanjayAsokan/Marketplace-backend",
    description: [
      "Built a scalable multi-vendor platform with role-based authentication, vendor dashboards, and real-time inventory/order management.",
      "Integrated Razorpay payment gateway with secure JWT workflows for split payments, refunds, and commission handling.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    image: ecommerceImg,
  },
  {
    title: "Language Learning Platform",
    demoLink: "https://gregarious-bavarois-88043f.netlify.app/",
    codeLink: "https://github.com/SanjayAsokan/Language_Learning_Platform",
    description: [
      "Developed a responsive multi-language platform with interactive lessons, quizzes, flashcards, and cultural tips.",
      "Implemented authentication and protected routes with Firebase, delivering a gamified learning experience.",
    ],
    techStack: ["React.js", "Firebase (Auth, Firestore)", "JSON", "Lucide Icons"],
    image: learningImg,
  },
  {
    title: "Tickentry – Online Event Management",
    demoLink: "https://sanjayasokan.github.io/Online-Event-Management-Platform/",
    codeLink: "https://github.com/SanjayAsokan/Online-Event-Management-Platform",
    description: [
      "Built a responsive event management platform with ticket booking, live chats, polls, and feedback features.",
      "Integrated Firebase for real-time engagement and Chart.js for dynamic analytics.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Firebase (Auth, Firestore)", "Chart.js"],
    image: tickentryImg,
  },
  {
    title: "Revamped Event Creation & Management",
    demoLink: "https://chimerical-smakager-36e645.netlify.app/",
    codeLink: "https://github.com/SanjayAsokan/Revamped-Event-Creation-and-Management-Platform",
    description: [
      "Full-stack platform to create, manage, and attend events with RSVP tracking, interactive timelines, and real-time tools.",
      "Organizers monitor engagement while attendees interact through live features for smooth experiences.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: revampedImg,
  },
];

export default function Projects({ isDark }) {
  return (
    <section
      className={`w-full transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`flex flex-col rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-blue-500/50 ${
                isDark
                  ? "bg-gray-800 text-white border-gray-700 hover:border-blue-700"
                  : "bg-white text-gray-900 border-gray-300 hover:border-blue-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col gap-4">
                {/* Title + Icons */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-3 text-lg">
                    <a
                      href={project.demoLink}
                      className="hover:text-blue-600 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaRocket />
                    </a>
                    <a
                      href={project.codeLink}
                      className="hover:text-gray-500 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside text-sm space-y-2">
                  {project.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-4">
                  <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-xs font-medium border-2 shadow-sm transition-all duration-300 ${
                          isDark
                            ? "bg-blue-700/20 border-blue-700 text-blue-200 hover:bg-blue-700/40 hover:text-white"
                            : "bg-blue-100 border-blue-700 text-blue-800 hover:bg-blue-500/20 hover:text-blue-900"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
