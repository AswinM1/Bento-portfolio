"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Globe } from "lucide-react";
import { BsGithub } from "react-icons/bs";
// Required if using React Router

const Projects = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
  };

  const projects = [
    {
      name: "Snap Talk Analyser",
      description: "An AI-powered audio analyser and feedback provider",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://snap-talk-wine.vercel.app/",
    },
    {
      name: "Job Mailer",
      description: "An AI-powered job mail generator. Generate job mails in seconds.",
      techStack: ["React", "Groq", "Full stack"],
      link: "https://jobmailer-io.vercel.app/",
    },
    {
      name: "ShortURL",
      description: "A URL shortener made with nanoid, with an admin dashboard to track clicks and views.",
      techStack: ["React", "MongoDB", "nanoid"],
      link: "https://url-shortner-nine-kappa.vercel.app/",
    },
    {
      name: "Constellations",
      description: "An eCommerce website made using the MERN stack and Clerk.",
      techStack: ["MongoDB", "Express", "React"],
      link: "https://constellation-ecommerce.vercel.app/",
    },
    {
      name: "Eden",
      description: "An Mordern component library with reusable nextjs components",
      techStack: ["Next.js", "Tailwind", "motion"],
      link: "https://constellation-ecommerce.vercel.app/",
    },
    {
      name: "RetrO ui",
      description: "Retro themed component library made with nextj.s",
      techStack: ["Next.js", "Tailwind", "motion"],
      link: "https://retro0.vercel.app/",
    },
    {
      name: "Bloggify",
      description: "A anonymous blogging app",
      techStack: ["Next.js", "mongoDB", "JWT"],
      link: "https://blogifyy-00.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-5 px-6"
      variants={parent}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        className="text-3xl mb-5 text-black dark:text-white font-semibold tracking-tight font-sans"
        variants={child}
      >
        Projects
      </motion.h2>
      <motion.p
        className="font-sans text-lg  text-neutral-800 dark:text-gray-400 mb-6 tracking-tight"
        variants={child}
      >
        I enjoy building user centric applications. These include projects I made throughout my journey.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-9">
  {projects.map((project, index) => (
    <SpotlightCard key={index} project={project} variants={child} />
  ))}
</div>

     
      <motion.div className="mt-10 text-center" variants={child}>
      
      </motion.div>
    </motion.section>
  );
};

const SpotlightCard = ({ project, variants }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });

    // Set CSS variables dynamically
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      variants={variants}
      className="rounded-lg relative group overflow-hidden p-6 border dark:border-neutral-700 shadow-md bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out"
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(99, 102, 241, 0.2), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-2 py-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold font-sans text-black dark:text-white tracking-tight">
            {project.name}
          </h3>
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              <button className="text-black dark:text-white transition">
                <Globe />
              </button>
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.name}`}
              >
                <button className="text-black dark:text-white transition hover:text-violet-500">
                  <BsGithub size={22} />
                </button>
              </a>
            )}
          </div>
        </div>
        <p className="text-black dark:text-neutral-300 mb-4">
          {project.description}
        </p>
        <div className="text-black dark:text-white flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="font-medium bg-neutral-700 dark:bg-neutral-600 text-sm text-neutral-300 dark:text-white py-1 px-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default Projects;
