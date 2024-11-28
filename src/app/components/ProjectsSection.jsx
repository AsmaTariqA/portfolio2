"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Quiz App using React",
    description: "Interactive quiz application built with React.",
    image: "/images/projects/quiz.png",
    gitUrl: "https://github.com/AsmaTariqA/Islamic-quiz-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "News App using React",
    description:
      "Real-time news app that fetches the latest headlines and updates from a news API.",
    image: "/images/projects/newsapp.png",
    gitUrl: "https://github.com/AsmaTariqA/newsapp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Verse Finder using React",
    description: "App for searching and displaying Quranic verses based on keywords.",
    image: "/images/projects/verse.png",
    gitUrl: "https://github.com/AsmaTariqA/verse-finder",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Car Control App Design",
    description:
      "Design for a car control app, allowing users to manage car features seamlessly.",
    image: "/images/projects/car.png",
    gitUrl: "/", // Represents a Figma design with no GitHub link
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bitcoin Website Landing Page Design",
    description:
      "Modern landing page design for a Bitcoin-related website with real-time price tracking.",
    image: "/images/projects/bitcoin.png",
    gitUrl: "/", // Represents a Figma design with no GitHub link
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Prayer Globe using react",
    description:
      "A web application that provides a visual representation of prayer times around the globe.",
    image: "/images/projects/globe.png",
    gitUrl: "https://github.com/AsmaTariqA/prayer-globe",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-10 p-10">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
