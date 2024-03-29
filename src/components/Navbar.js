import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [prevScrollPos, setprevScrollPos] = useState(0);
  const [top, setTop] = useState(0);
  const [open, setopen] = useState(false);
  const navRef = useRef();

  function toggle() {
    setopen((prevState) => !prevState);
    setTop(0);
  }

  useEffect(() => {
    window.onscroll = function () {
      navRef.current.classList.remove("duration-300");
      let currentScrollPos = window.scrollY;
      if (navRef.current) {
        const newTop = top + prevScrollPos - currentScrollPos;
        if (newTop < -74) {
          setTop(-74);
        } else if (newTop > 0 || open) {
          setTop(0);
        } else {
          setTop(newTop);
        }
      }

      setprevScrollPos(currentScrollPos);
    };

    window.onscrollend = () => {
      navRef.current.classList.add("duration-300");
      if (top < -30 && window.scrollY > 74) {
        setTop(-74);
      } else {
        setTop(0);
      }
    };

    return () => {
      window.onscroll = null;
      window.onscrollend = null;
    };
  });

  return (
    <>
      <header
        className="w-full border-b border-teal-500 z-20 flex flex-col bg-gray-950 justify-center items-center fixed"
        style={{ top }}
        ref={navRef}
      >
        <div className="max-w-7xl w-full flex justify-between p-4 lg:px-16 items-center">
          <a href="/" className="text-3xl font-semibold">
            Brijendra.
          </a>
          <div className="sm:flex hidden gap-8 font-semibold text-xl h-fit text-gray-300">
            <a className="hover:text-teal-500 duration-200" href="/#home">
              Home
            </a>
            <a className="hover:text-teal-500 duration-200" href="/#skills">
              Skills
            </a>
            <a className="hover:text-teal-500 duration-200" href="/#projects">
              Projects
            </a>
            <a className="hover:text-teal-500 duration-200" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="bg-transparent flex flex-col justify-center sm:hidden">
            <div className="relative sm:max-w-xl mx-auto">
              <nav x-data="{ open: false }">
                <button
                  className="text-white w-10 h-10 relative focus:outline-none bg-transparent"
                  onClick={toggle}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className={
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "-rotate-45" : "-translate-y-1.5")
                      }
                    ></span>
                    <span
                      aria-hidden="true"
                      className={
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "opacity-0" : "")
                      }
                    ></span>
                    <span
                      aria-hidden="true"
                      className={
                        "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out " +
                        (open ? "rotate-45" : "translate-y-1.5")
                      }
                    ></span>
                  </div>
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div
          className={
            "flex flex-col overflow-hidden duration-300 text-xl font-bold text-center" +
            (open ? " h-64" : " h-0")
          }
          onClick={toggle}
        >
          <a className="py-4" href="/#home">
            Home
          </a>
          <a className="py-4" href="/#skills">
            Skills
          </a>
          <a className="py-4" href="/#projects">
            Projects
          </a>
          <a className="py-4" href="/#contact">
            Contact
          </a>
        </div>
      </header>
      {
        <div
          onClick={toggle}
          className={
            "fixed top-0 left-0 sm:hidden bg-black bg-opacity-60 backdrop-blur-md h-screen w-full z-10 duration-300 " +
            (open ? "" : "pointer-events-none opacity-0")
          }
        />
      }
    </>
  );
}
