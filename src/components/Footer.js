import React from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer class="relative z-50 bg-gray-900 text-white px-8 pb-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex sm:flex-row flex-col mb-4 ">
          <div class="w-full">
            <div class="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
              <SocialLink href="https://github.com/Brijendra-Singh2003">
                <FaGithub className="duration-500" />
              </SocialLink>
              <SocialLink href="https://twitter.com/BrijendraS_op">
                <FaXTwitter className="duration-500" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/brijendra-singh-047400241/">
                <FaLinkedinIn className="duration-500" />
              </SocialLink>
              <SocialLink href="https://instagram.com/brijendra361?igshid=YmMyMTA2M2Y=">
                <GrInstagram className="duration-500" />
              </SocialLink>
            </div>
          </div>
          <div class="px-4 mt-4 flex items-center flex-col md:flex-row md:justify-end gap-2 md:gap-8">
            <div className="flex gap-2 w-fit items-center h-full text-nowrap">
              <FaPhoneAlt />
              <span>+91 9098 775 414</span>
            </div>
            <div className="flex gap-2 w-fit items-center h-full">
              <MdEmail />
              <span>brijendra0369@gmail.com</span>
            </div>
          </div>
        </div>
        <hr class="my-2 border-[#888]" />
        <div class="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div class="text-center lg:text-left">
            <div class="text-md mt-2 py-1 font-normal ">
              Made with ❤️ by{" "}
              <span className="text-[#f0276e]">Brijendra Singh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href = "/", children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative grid place-items-center h-8 w-8  hover:text-[#eee]"
  >
    {children}
  </a>
);
