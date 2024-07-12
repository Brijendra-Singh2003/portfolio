import React, { useRef } from "react";
// import Background from "../components/Background";
import image from "../assets/myImage.avif";
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
        className="w-full flex justify-center mt-16 pt-4 pb-16 px-4 items-center relative"
      >
        {/* <Background /> */}
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
            className="p-2 mt-4 sm:mt-0 sm:p-6 flex mx-auto flex-col text-center lg:text-left justify-center"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          >
            <h1 className="text-lg sm:text-4xl font-h">Hi, I am</h1>
            <h1 className="text-2xl text-highlight mt-2 sm:text-5xl font-h">
              Brijendra Singh
            </h1>
            <h3 className="sm:text-2xl lg:mt-4">Full-Stack Developer</h3>
            <div className="flex gap-8 mt-4 py-4 justify-center lg:justify-start">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1oXueXSDXL_jMnc__-hOLTBQdxnsCl_6o/view?usp=drive_link"
                className="group relative h-11 w-28 grid place-items-center border-2 border-gray-600 overflow-hidden"
              >
                <div className="absolute left-0 duration-500 h-full w-0 bg-gray-800 group-hover:w-full" />
                <button className="absolute font-bold py-2 px-4 rounded group-hover:text-white duration-500">
                  Resume
                </button>
              </a>
            </div>

            <div
              className="order-3 mt-4 flex gap-4 lg:gap-8 justify-center lg:justify-start"
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <SocialLink href="https://github.com/Brijendra-Singh2003">
                <TbBrandGithubFilled className="absolute size-7 group-hover:text-white duration-500" />
              </SocialLink>
              <SocialLink href="https://twitter.com/BrijendraS_op">
                <FaXTwitter className="absolute size-6 group-hover:text-white duration-500" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/brijendra-singh-047400241/">
                <FaLinkedinIn className="absolute size-6 group-hover:text-white duration-500" />
              </SocialLink>
              <SocialLink href="https://instagram.com/brijendra361?igshid=YmMyMTA2M2Y=">
                <GrInstagram className="absolute size-6 group-hover:text-white duration-500" />
              </SocialLink>
            </div>
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
    className="group relative grid place-items-center size-12 border-2 border-gray-600 text-black rounded-md overflow-hidden"
  >
    <div className="absolute left-0 duration-500 h-full w-0 bg-black group-hover:w-full" />
    {children}
  </a>
);
