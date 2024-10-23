import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";

const tags = ["all", "frontend", "full-stack", "app", "game"];

export default function Projects() {
  const [tag, setTag] = useState("all");

  const list =
    tag === "all" ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <div id="projects" className="py-8 w-full">
      <div className="max-w-7xl w-full flex flex-col items-center mx-auto py-8">
        <h1 className="text-5xl font-h text-center mb-12">
          Recent <span className="text-highlight">Projects</span>
        </h1>

        <div className="flex gap-4 items-center justify-center flex-wrap mb-6">
          {tags.map((t) => (
            <button
              key={t}
              className={
                "border transition-all py-1 px-3 rounded capitalize " +
                (t === tag
                  ? "bg-highlight text-white"
                  : "border border-highlight text-highlight")
              }
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:px-8 gap-6 justify-center">
          {list.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              projectLink={project.projectLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
              children={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
