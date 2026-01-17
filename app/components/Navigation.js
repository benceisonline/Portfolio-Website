"use client";

import { useState } from "react";
import NavLink from "./NavLink";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="pt-2 pb-4 md:pt-4 md:pb-6 mb-2 md:mb-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden sm:flex items-center">
            <NavLink href="#work">Work Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Team-Based Projects</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <a
              className="font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 sm:px-4 py-2 rounded-md whitespace-nowrap text-sm md:text-base hover:scale-105 drop-shadow-lg transition-transform duration-200"
              href="/resume.pdf"
              download="Bence_Szabo_Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          open
            ? "opacity-100 scale-100 max-h-96 pointer-events-auto border-b border-gray-300"
            : "opacity-0 scale-95 max-h-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-3 gap-2">
          <NavLink href="#work" onClick={() => setOpen(false)}>
            Work Experience
          </NavLink>
          <NavLink href="#skills" onClick={() => setOpen(false)}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={() => setOpen(false)}>
            Team-Based Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
