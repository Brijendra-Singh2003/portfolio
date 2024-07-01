import React, { useRef } from "react";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import { useInView } from "framer-motion";

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
        >
          <Card isInView={isInView} delay="0.3s" name="ReactJS">
            <FaReact className="size-16 p-1 text-sky-400" />
          </Card>
          <Card isInView={isInView} delay="0.4s" name="NextJS">
            <SiNextdotjs className="size-16 p-1" />
          </Card>
          <Card isInView={isInView} delay="0.5s" name="ExpressJS">
            <SiExpress className="size-16 p-1" />
          </Card>
          <Card isInView={isInView} delay="0.6s" name="NodeJS">
            <FaNodeJs className="size-16 p-1 text-green-600" />
          </Card>
          <Card isInView={isInView} delay="0.7s" name="MongoDB">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="0.8s" name="Postgresql">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="0.9s" name="Prisma">
            <SiPrisma className="size-16 p-1" />
          </Card>
          <Card isInView={isInView} delay="1s" name="Docker">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.1s" name="TailwindCSS">
            <SiTailwindcss className="size-16 p-1 text-sky-400" />
          </Card>
          <Card isInView={isInView} delay="1.2s" name="HTML">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.3s" name="CSS3">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.4s" name="JavaScript">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.5s" name="Java">
            <img
              className="size-16 p-1 object-contain"
              src="/java.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.6s" name="Pyhton">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.7s" name="C">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.8s" name="C++">
            <img
              className="size-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt=""
            />
          </Card>
          <Card isInView={isInView} delay="1.9s" name="Git VCS">
            <BiLogoGit className="size-16 p-1 text-orange-600" />
          </Card>
          <Card isInView={isInView} delay="2s" name="GitHub">
            <RxGithubLogo className="size-16 p-1" />
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ name = "", children, isInView, delay = "0.25s" }) {
  return (
    <div
      className="w-24 sm:w-32 aspect-square flex items-center justify-center sm:gap-2 flex-col rounded hover:shadow-md duration-300"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)" + delay,
      }}
    >
      {children}
      <h1 className="text-center text-sm sm:text-base">{name}</h1>
    </div>
  );
}
