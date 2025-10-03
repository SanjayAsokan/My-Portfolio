// src/components/About.jsx
import profilePic from "../assets/sanjay_photo.jpg";

export default function About({ isDark }) {
  return (
    <section
      className={`w-full transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Title */}
      <div
        className={`w-full py-3 mb-8 text-center font-bold text-2xl md:text-3xl ${
          isDark ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-800"
        }`}
      >
        About Me
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-6 pb-20">
        {/* Profile Image */}
        <div className="flex-shrink-0 relative group">
          <img
            src={profilePic}
            alt="Sanjay A"
            className="w-64 h-72 md:w-72 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-blue-400 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
        </div>

        {/* Content Paragraphs */}
        <div className="flex-1 flex flex-col space-y-5 md:space-y-6 text-justify md:text-justify">
          <p className="text-base md:text-lg lg:text-xl">
            I am <span className="font-semibold text-blue-500">Sanjay A</span> from Bangalore, an aspiring Full-Stack Developer specializing in the <span className="font-semibold text-blue-500">MERN stack</span>. I have a solid foundation in <span className="font-semibold text-blue-500">JavaScript</span> and have completed hands-on projects building responsive, user-friendly web applications.
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            Skilled in <span className="font-semibold text-blue-500">React, Redux, Node.js, Express, MongoDB</span>, I design <span className="font-semibold text-blue-500">RESTful APIs</span> and implement <span className="font-semibold text-blue-500">secure authentication systems</span>. I focus on writing clean, maintainable code while delivering efficient and scalable solutions.
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            I thrive in collaborative environments, enjoy solving complex challenges, and continuously strive to learn and adopt new technologies. My goal is to contribute to impactful projects that combine web development and modern technologies to deliver intelligent, user-friendly solutions.
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            Passionate about building scalable applications, I consistently aim to deliver high-quality work that is efficient, clean, and user-centric.
          </p>
        </div>
      </div>
    </section>
  );
}
