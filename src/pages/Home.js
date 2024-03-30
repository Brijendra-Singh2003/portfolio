import React, { useRef } from "react";
import Background from "../components/Background";
import image from "../assets/myImage.jpeg";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <main
        id="home"
        className="w-full border-b border-teal-600 flex justify-center mt-16 pt-4 pb-16 px-4 items-center relative"
      >
        <Background />
        <div
          ref={ref}
          className="flex lg:py-20 flex-col max-w-7xl w-full lg:grid grid-cols-2"
        >
          <div
            className="lg:order-2"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          >
            <img
              src={image || "https://avatars.githubusercontent.com/u/113870500"}
              alt=""
              className="mx-auto mt-8 lg:mt-0 rounded-full bg-[--frontground] max-h-96 max-w-96 h-full w-full object-cover"
            />
          </div>
          <div
            className="p-2 sm:p-8 flex mx-auto flex-col text-center lg:text-left justify-center"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          >
            <h1 className="text-xl sm:text-4xl font-h">Hi, I am</h1>
            <h1 className="text-2xl text-teal-400 sm:text-5xl font-h">
              Brijendra Singh
            </h1>
            <h3 className="sm:text-3xl font-bold lg:mt-6">
              Full-Stack Developer
            </h3>
            <div className="flex gap-8 mt-4 py-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1-rdNCMUHChF3o4J3fd6GnkcMWK_m1oFA/view?usp=sharing"
                className="group relative h-11 w-28 grid place-items-center border-2 border-gray-200  rounded-lg overflow-hidden"
              >
                <div className="absolute left-0 duration-500 h-full w-0 bg-gray-100 group-hover:w-full" />
                <button className="absolute font-bold py-2 px-4 rounded group-hover:text-gray-900 duration-500">
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div
            className="order-3 mx-auto sm:px-8 flex gap-4 lg:gap-8 justify-center lg:justify-start"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <SocialLink href="https://github.com/Brijendra-Singh2003">
              <TbBrandGithubFilled className="absolute h-8 w-8 group-hover:text-gray-900 duration-500" />
            </SocialLink>
            <SocialLink href="https://twitter.com/BrijendraS_op">
              <FaXTwitter className="absolute h-6 w-6 group-hover:text-gray-900 duration-500" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/brijendra-singh-047400241/">
              <FaLinkedinIn className="absolute h-6 w-6 group-hover:text-gray-900 duration-500" />
            </SocialLink>
            <SocialLink href="https://instagram.com/brijendra361?igshid=YmMyMTA2M2Y=">
              <GrInstagram className="absolute h-6 w-6 group-hover:text-gray-900 duration-500" />
            </SocialLink>
          </div>
        </div>
      </main>
    </>
  );
}

const SocialLink = ({ href = "/", children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative grid place-items-center h-12 w-12 border-2 border-teal-400 text-teal-400 rounded-full overflow-hidden"
  >
    <div className="absolute left-0 duration-500 h-full w-0 bg-teal-400 group-hover:w-full" />
    {children}
  </a>
);
