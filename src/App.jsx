import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 scroll-smooth ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />

      {/* Main container */}
      <div className="pt-20 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="flex justify-center items-center py-12">
          <Hero isDark={isDark} />
        </section>

        {/* About Section */}
        <section id="about" className="flex justify-center items-center py-12">
          <About isDark={isDark} />
        </section>

        {/* Tools Section */}
        <section id="tools" className="flex justify-center items-center py-8">
          <Tools isDark={isDark} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex justify-center items-center py-8">
          <Projects isDark={isDark} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex justify-center items-center py-8">
          <Contact isDark={isDark} />
        </section>
      </div>
    </div>
  );
}
