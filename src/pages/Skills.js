import React from "react";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <div className="py-8 w-full sm:px-4 bg-amber-50 flex justify-center">
      <div className="w-full max-w-7xl py-8">
        <h1 className="py-8 text-center text-5xl font-h text-gray-800">
          Skills & Abilities
        </h1>
        <div className="max-w-5xl mx-auto flex gap-8 flex-wrap items-center justify-center px-4 pb-8 rounded-lg ">
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt=""
            />
            <h1 className=" text-center">ReactJS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <SiNextdotjs className="h-12 w-12 sm:h-16 sm:w-16 p-1" />
            <h1 className=" text-center">NextJS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <SiExpress className="h-12 w-12 sm:h-16 sm:w-16 p-1" />
            <h1 className=" text-center">ExpressJS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <FaNodeJs className="h-12 w-12 sm:h-16 sm:w-16 p-1 text-green-600" />
            <h1 className=" text-center">NodeJS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg"
              alt=""
            />
            <h1 className=" text-center">MongoDB</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
              alt=""
            />
            <h1 className=" text-center">Postgresql</h1>
          </div>
          {/* <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/SQL_Image.svg"
              alt=""
            />
            <h1 className=" text-center">SQL</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <SiRedux className="h-12 w-12 sm:h-16 sm:w-16 p-1 text-purple-600" />
            <h1 className=" text-center">ReduxJS</h1>
          </div> */}
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <SiPrisma className="h-12 w-12 sm:h-16 sm:w-16 p-1" />
            <h1 className=" text-center">Prisma</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"
              alt=""
            />
            <h1 className=" text-center">Docker</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <SiTailwindcss className="h-12 w-12 sm:h-16 sm:w-16 p-1 text-sky-400" />
            <h1 className=" text-center">TailwindCSS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt=""
            />
            <h1 className=" text-center">HTML</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
              alt=""
            />
            <h1 className=" text-center">CSS3</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
              alt=""
            />
            <h1 className=" text-center">JavaScript</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.png"
              alt=""
            />
            <h1 className=" text-center">Java</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
              alt=""
            />
            <h1 className=" text-center">Python</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
              alt=""
            />
            <h1 className=" text-center">C</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <img
              className="h-12 w-12 sm:h-16 sm:w-16 p-1 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt=""
            />
            <h1 className=" text-center">C++</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <BiLogoGit className="h-12 w-12 sm:h-16 sm:w-16 p-1 text-orange-600" />
            <h1 className=" text-center">Git VCS</h1>
          </div>
          <div className="w-24 sm:w-32 aspect-square flex items-center justify-center flex-col rounded border hover:-translate-y-1 hover:shadow-lg duration-300 bg-white">
            <RxGithubLogo className="h-12 w-12 sm:h-16 sm:w-16 p-1 text-black" />
            <h1 className=" text-center">GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
