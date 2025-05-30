"use client";
import { motion } from "framer-motion"; // Ensure you're using framer-motion
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Homepro = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

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
  ];

  return (
    <section id="projects">
      <div className="mb-5 flex items-center justify-between gap-4 "
      >
        <h2 className="text-3xl text-black dark:text-white font-semibold tracking-tighter font-sans">
          Projects
        </h2>

        <motion.div
          animate={{ width: isHovered ? "100%" : "50px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-1 bg-violet-500 rounded"
        />

        {pathname !== "/projects" && (
          <Link
            href="/projects"
            className="text-black dark:text-white font-semibold rounded-full transition hover:scale-105"
          >
            More
          </Link>
        )}
      </div>

      {/* Projects grid with hover tracking */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col md:flex-col gap-8 mt-9"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};  

type Project = {
  name: string;
  description: string;
  techStack: string[];
  link: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name}`}
      className="rounded-lg border dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md p-6 hover:shadow-lg transition"
    >
      <h3 className="text-lg font-bold font-sans text-black dark:text-white mb-2 tracking-tight">
        {project.name}
      </h3>
      <p className="text-black dark:text-gray-400 mb-4 font-sans">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-black dark:text-white">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-neutral-700 dark:bg-green-300 text-black text-sm  py-1 px-2 rounded-lg font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default Homepro;
