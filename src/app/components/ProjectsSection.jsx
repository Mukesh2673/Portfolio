"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerse Application",
    description: "Ordo Sell and Project things",
    image: "/images/projects/7.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://www.joinordo.io/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Create a Pro cart to advertise your business, jobs, and real estate.",
    image: "/images/projects/8.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://pcard.pro/",
  },
  {
    id: 3,
    title: "Application To Onboard Program",
    description: "The application allows users to create team chats, share posts, and make announcements within channels.",
    image: "/images/projects/meos.png",
    tag: ["All", "Web", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://d2g.meos.pro/user/dashboard",
  },
  {
    id: 4,
    title: "Changer Application",
    description: "Create an account, post issues (e.g., environment, culture), share videos, gather responses, and chat with others",
    image: "/images/projects/changer.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Mukesh2673/changer-application.git",
    previewUrl: "https://development.thechanger.io/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "Changer Backend",
    description: "Changer backend includes modules for WebSocket, Algolia Search, OpenAI, NLP for text generation, MongoDB, Swagger, AWS Cognito, S3 Bucket, and AWS MediaConvert job handling",
    image: "/images/projects/changerBackend.png",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ravel",
    description: "Create your Ravel account to explore churches, set up your merchant profile, offer services, chat with clients, and receive real-time notifications from customers or friends",
    image: "/images/projects/ravel.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "https://devgeektech@bitbucket.org/amanteam01/ravel-individualv2.git",
    previewUrl: "https://personal.ravel.faith",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
