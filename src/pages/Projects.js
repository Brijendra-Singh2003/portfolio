import React from "react";
import project1 from "../assets/CSE.gif";
import project2 from "../assets/CN.gif";
import project3 from "../assets/port.gif";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="py-8 px-2 w-full border-b border-teal-600">
      <div className="max-w-7xl w-full flex flex-col items-center mx-auto py-8">
        <h1 className="text-5xl font-h text-center pb-8">
          Recent <span className="text-teal-400">Projects</span>
        </h1>
        <div className="flex flex-wrap sm-px-8 gap-6 justify-center">
          <ProjectCard
            image={project1}
            title={"Collage, Freshers Portal"}
            projectLink="https://csebootcamp2.vercel.app/"
            codeLink="https://github.com/Brijendra-Singh2003/BootCamp_2.0"
          >
            A portal for freshers to learn about their own batchmates, seniors,
            societies and access shared resources like notes, questions, and
            slides.
          </ProjectCard>
          <ProjectCard
            image={project2}
            title={"CN IIIT-BH"}
            projectLink="https://coding-ninja.vercel.app/"
            codeLink="https://github.com/Brijendra-Singh2003/Coding-Ninja"
          >
            A website for our collage's Coding Ninjas Student Chapter to post
            information about upcomming events as well as past events organised
            by them.
          </ProjectCard>
          <ProjectCard
            image={project3}
            title={"Portfolio Website"}
            projectLink="/"
            codeLink="https://github.com/Brijendra-Singh2003/portfolio"
          >
            A responsive portfolio to offer insights into technical skills, work
            experience, completed projects and to connect with potential
            collaborations.
          </ProjectCard>
        </div>
      </div>
    </div>
  );
}
