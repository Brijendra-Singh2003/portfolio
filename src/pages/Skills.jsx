import React, { useRef } from "react";
import { SiDocker, SiExpress, SiFastapi, SiGithub, SiHelm, SiHtml5, SiPostgresql, SiTerraform } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss, SiTypescript, SiJavascript, SiKubernetes } from "react-icons/si";
import { BiLogoGit, BiLogoPostgresql } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import { useInView } from "framer-motion";
import { FaAws } from "react-icons/fa6";

export default function Skills() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="skills"
      className="py-8 w-full sm:px-4 flex justify-center rounded-t-xl"
    >
      <div className="w-full max-w-7xl py-8">
        <h1 className="pb-8 text-center text-5xl font-h">
          Skills & <span className="text-highlight">Abilities</span>
        </h1>
        <div
          ref={ref}
          className="max-w-5xl mx-auto flex gap-6 bg-opacity-40 flex-wrap items-center justify-center px-4 py-8 rounded-lg "
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          <Card isInView={isInView} name="Docker">
            <SiDocker className="size-14 text-sky-500" />
          </Card>
          <Card isInView={isInView} name="Kubernetes">
            <SiKubernetes className="size-14 text-blue-600" />
          </Card>
          <Card isInView={isInView} name="AWS">
            <FaAws className="size-14 text-gray-800" />
          </Card>
          <Card isInView={isInView} name="Terraform">
            <SiTerraform className="size-14 text-blue-700" />
          </Card>
          <Card isInView={isInView} name="Helm">
            <SiHelm className="size-14 text-blue-900" />
          </Card>
          <Card isInView={isInView} name="GitHub">
            <SiGithub className="size-14" />
          </Card>
          <Card isInView={isInView} name="Pyhton">
            <img
              className="size-14 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} name="FastAPI">
            <SiFastapi className="size-14 text-teal-600" />
          </Card>
          <Card isInView={isInView} name="ReactJS">
            <FaReact className="size-14 text-sky-400" />
          </Card>
          <Card isInView={isInView} name="NextJS">
            <SiNextdotjs className="size-16 p-1" />
          </Card>
          <Card isInView={isInView} name="HTML">
            <SiHtml5 className="size-14 text-orange-600" />
          </Card>
          <Card isInView={isInView} name="CSS3">
            <SiCss className="size-14 text-purple-800" />
          </Card>
          <Card isInView={isInView} name="JavaScript">
            <SiJavascript className="size-14 text-yellow-300 bg-black" />
          </Card>
          <Card isInView={isInView} name="TypeScript">
            <SiTypescript className="size-14 text-sky-600" />
          </Card>
          <Card isInView={isInView} name="NodeJS">
            <FaNodeJs className="size-14 text-green-600" />
          </Card>
          <Card isInView={isInView} name="ExpressJS">
            <SiExpress className="size-16 p-1" />
          </Card>
          <Card isInView={isInView} name="MongoDB">
            <img
              className="size-14 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} name="Postgresql">
            <BiLogoPostgresql className="size-14 scale-110 text-sky-800" />
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ name = "", children }) {
  return (
    <div className="w-20 sm:w-32 aspect-square flex items-center justify-center sm:gap-2 flex-col rounded hover:scale-110 hover:-translate-y-2 duration-300">
      {children}
      <h1 className="text-center text-sm sm:text-base">{name}</h1>
    </div>
  );
}
