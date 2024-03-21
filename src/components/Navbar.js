import React from "react";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center items-center absolute top-0">
      <div className="max-w-7xl w-full flex justify-between p-4 lg:px-16 lg:py-8 items-center">
        <a href="/" className="text-3xl font-semibold">
          Brijendra.
        </a>
        <div className="lg:flex gap-8 text-gray-500 font-semibold hidden text-xl h-fit">
          <a href="/" className=" text-amber-600">
            Home
          </a>
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </header>
  );
}
