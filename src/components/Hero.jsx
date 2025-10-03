import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero({ isDark }) {
  const titles = [
    "Future-Focused Software Engineer",
    "Full Stack Developer",
    "Passionate About Development",
    "Building Scalable Applications",
    "Creative Problem Solver",
    "Driven by Innovation",
    "Crafting Efficient Web Solutions"
  ];

  const emojis = ["🚀", "✨", "💻", "🌟", "🎯"];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 min-h-[55vh] overflow-hidden">
      
      {/* Floating Emojis in background */}
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl pointer-events-none select-none opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 10,
            repeatType: "loop",
            delay: Math.random() * 3
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-4">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Hi, I’m <span className={isDark ? "text-blue-400" : "text-blue-600"}>Sanjay A</span>
        </h1>

        <h2
          className={`text-lg md:text-2xl font-medium mb-4 ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <Typewriter
            words={titles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1dL9XStUQ0PDXYkByG76UtCZkSY8I6W-u/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            Resume
          </a>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <a
              href="https://github.com/SanjayAsokan"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-colors ${
                isDark ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"
              }`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjaysan2001/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-colors ${
                isDark ? "text-white hover:text-blue-400" : "text-black hover:text-blue-600"
              }`}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
