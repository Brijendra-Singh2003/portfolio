import React from "react";
import Background from "../components/Background";
import image from "../assets/myImage2.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

export default function Home() {
  return (
    <main className="w-full flex justify-center pt-16 pb-4 px-4 items-center">
      <Background />

      <div className="flex lg:py-20 flex-col max-w-7xl w-full lg:grid grid-cols-2">
        <div className="lg:order-2">
          <img
            src={image || "https://avatars.githubusercontent.com/u/113870500"}
            alt=""
            className="mx-auto mt-8 lg:mt-0 rounded-full bg-amber-100 max-h-md max-w-md h-full w-full object-cover"
          />
        </div>
        <div className="p-2 sm:p-8 flex mx-auto flex-col text-center lg:text-left justify-center">
          <h1 className="text-xl sm:text-4xl font-h text-amber-800">
            Hi, I am
          </h1>
          <h1 className="text-2xl sm:text-5xl font-h text-amber-900">
            Brijendra Singh
          </h1>
          <h3 className="sm:text-3xl font-bold lg:mt-6">
            Full-Stack Developer
          </h3>
          <div className="flex gap-8 p-4 justify-center lg:justify-start">
            <button className="py-2 px-4 rounded bg-amber-500 text-white font-semibold">
              Resume
            </button>
            <button className="py-2 px-4 rounded bg-amber-500 text-white font-semibold">
              Connect
            </button>
          </div>
        </div>
        <div className="order-3 mx-auto sm:px-8 flex gap-4 lg:gap-8 justify-center lg:justify-start">
          <SocialLink>
            <TbBrandGithubFilled className="absolute h-8 w-8 group-hover:text-white duration-500" />
          </SocialLink>
          <SocialLink>
            <FaTwitter className="absolute h-6 w-6 group-hover:text-white duration-500" />
          </SocialLink>
          <SocialLink>
            <FaLinkedinIn className="absolute h-6 w-6 group-hover:text-white duration-500" />
          </SocialLink>
          <SocialLink>
            <GrInstagram className="absolute h-6 w-6 group-hover:text-white duration-500" />
          </SocialLink>
        </div>
      </div>
    </main>
  );
}

const SocialLink = ({ href = "/", children }) => (
  <a
    href={href}
    className="group relative grid place-items-center h-12 w-12 border-2 border-gray-900 text-gray-900 rounded-full overflow-hidden"
  >
    <div className="absolute left-0 duration-500 h-full w-0 bg-gray-900 group-hover:w-full" />
    {children}
  </a>
);
