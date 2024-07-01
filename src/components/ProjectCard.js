import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

/** @type {React.FC<{ title: string; image: string; projectLink: string; codeLink: string; children: ReactNode;}>} */
const ProjectCard = ({ image, title, children, projectLink, codeLink }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="max-w-96 text-gray-100 p-3 flex flex-col gap-4"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <img
        className="w-full aspect-video bg-gray-600"
        src={image}
        alt=""
      />
      <h2 className="text-black font-bold px-1 text-xl">{title}</h2>
      <p className=" text-black text-justify px-1">{children}</p>
      <div className="flex gap-2 flex-wrap my-2">
        <a
          className="group flex items-center gap-2 bg-highlight transition text-white w-fit py-1.5 px-4"
          href={projectLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>View</span>
          <FaExternalLinkAlt className="h-4 w-4 group-hover:ml-2 duration-300" />
        </a>
        <a
          className="group flex items-center gap-2 bg-[#ffc600] transition text-black w-fit py-1.5 px-4"
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>Code</span>
          <SiGithub className="h-5 w-5 group-hover:ml-2 duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
