import React, { useRef } from "react";
import project1 from "../assets/CSE.gif";
import project2 from "../assets/CN.gif";
import project3 from "../assets/port.gif";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useInView } from "framer-motion";

export default function Projects() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div id="projects" className="py-8 px-2 w-full border-b border-teal-600">
      <div className="max-w-7xl w-full flex flex-col items-center mx-auto py-8">
        <h1 className="text-5xl font-h text-center pb-8">
          Recent <span className="text-teal-400">Projects</span>
        </h1>
        <div ref={ref} className="flex flex-wrap sm-px-8 gap-6 justify-center">
          <Project
            image={project1}
            title={"Collage, Freshers Portal"}
            link="https://csebootcamp2.vercel.app/"
            code="https://github.com/Brijendra-Singh2003/BootCamp_2.0"
            isInView={isInView}
            delay="0.3s"
          >
            A portal for freshers to learn about their own batchmates, seniors,
            societies and access shared resources like notes, questions, and
            slides.
          </Project>
          <Project
            image={project2}
            title={"CN IIIT-BH"}
            link="https://coding-ninja.vercel.app/"
            code="https://github.com/Brijendra-Singh2003/Coding-Ninja"
            isInView={isInView}
            delay="0.6s"
          >
            A website for our collage's Coding Ninjas Student Chapter to post
            information about upcomming events as well as past events organised
            by them.
          </Project>
          <Project
            image={project3}
            title={"Portfolio Website"}
            link="/"
            code="https://github.com/Brijendra-Singh2003/portfolio"
            isInView={isInView}
            delay="0.9s"
          >
            A responsive portfolio website.
          </Project>
        </div>
      </div>
    </div>
  );
}

function Project({ image, title, children, link, code, isInView, delay }) {
  return (
    <div
      className="max-w-96 bg-gray-800 text-gray-100 border border-gray-700 p-3 rounded-md flex flex-col gap-2"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)" + delay,
      }}
    >
      <img
        className="w-full aspect-video bg-gray-600 rounded"
        src={image}
        alt=""
      />
      <h2 className=" font-semibold px-1 text-xl">{title}</h2>
      <p className="text-gray-300 text-justify px-1">{children}</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <a
          className="group flex items-center gap-2 hover:bg-white bg-gray-200 shadow-md transition text-black w-fit py-1.5 px-4 rounded"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <span>View</span>
          <FaExternalLinkAlt className="h-4 w-4 group-hover:ml-2 duration-300" />
        </a>
        <a
          className="group flex items-center gap-2 hover:bg-white bg-gray-200 shadow-md transition text-black w-fit py-1.5 px-4 rounded"
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          <span>Code</span>
          <SiGithub className="h-5 w-5 group-hover:ml-2 duration-300" />
        </a>
      </div>
    </div>
  );
}
