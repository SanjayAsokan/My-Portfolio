// src/components/Tools.jsx
import React from "react";
import { motion } from "framer-motion";

// Import your images
import jsIcon from "../assets/js.png";
import tsIcon from "../assets/ts.jpeg";
import reactIcon from "../assets/react.jpeg";
import reduxIcon from "../assets/redux.jpeg";
import htmlIcon from "../assets/html.jpeg";
import cssIcon from "../assets/css.jpeg";
import nodeIcon from "../assets/node.jpeg";
import expressIcon from "../assets/express.jpeg";
import mongoIcon from "../assets/mongo.jpeg";
import mysqlIcon from "../assets/mysql.jpeg";
import djangoIcon from "../assets/django.jpeg";
import firebaseIcon from "../assets/firebase.jpeg";
import canvaIcon from "../assets/canva.jpeg";
import vscodeIcon from "../assets/vscode.jpeg";
import renderIcon from "../assets/render.jpeg";
import netlifyIcon from "../assets/netlify.jpeg";
import gitIcon from "../assets/git.jpeg";
import githubIcon from "../assets/github.jpeg";

const toolsData = {
  frontend: [
    { img: jsIcon, name: "JavaScript" },
    { img: tsIcon, name: "TypeScript" },
    { img: reactIcon, name: "React" },
    { img: reduxIcon, name: "Redux" },
    { img: htmlIcon, name: "HTML" },
    { img: cssIcon, name: "CSS" },
  ],
  backend: [
    { img: nodeIcon, name: "Node" },
    { img: expressIcon, name: "Express" },
    { img: mongoIcon, name: "MongoDB" },
    { img: mysqlIcon, name: "MySQL" },
    { img: djangoIcon, name: "Django" },
    { img: firebaseIcon, name: "Firebase" },
  ],
  others: [
    { img: canvaIcon, name: "Canva" },
    { img: vscodeIcon, name: "VSCode" },
    { img: renderIcon, name: "Render" },
    { img: netlifyIcon, name: "Netlify" },
    { img: gitIcon, name: "Git" },
    { img: githubIcon, name: "GitHub" },
  ],
};

export default function Tools({ isDark }) {
  return (
    <section
      className={`w-full transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Tools & Technologies I Work With
        </h2>

        {Object.entries(toolsData).map(([section, tools]) => (
          <div key={section} className="flex flex-col items-center gap-6 w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4 capitalize text-center">
              {section}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center w-full">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  className={`relative w-full max-w-[120px] rounded-xl p-4 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition duration-300 ${
                    isDark
                      ? "bg-gray-800 text-white border border-gray-700 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.9)]"
                      : "bg-white text-gray-900 border border-gray-300 hover:border-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.9)]"
                  }`}
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Shiny hover effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/20 opacity-0 transition-opacity duration-700 hover:opacity-100 pointer-events-none blur-xl animate-shimmer"
                    style={{ mixBlendMode: isDark ? "screen" : "overlay" }}
                  ></div>

                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2 relative z-10"
                  />
                  <span className="text-sm md:text-base font-medium relative z-10 text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
