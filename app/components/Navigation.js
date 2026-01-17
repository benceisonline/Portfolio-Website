import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav className="pt-2 pb-4 md:pt-4 md:pb-6 mb-2 md:mb-5 flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-300 gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
        <NavLink href="#work">Work Experience</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Team-Based Projects</NavLink>
      </div>
      <ul className="flex items-center justify-center sm:justify-start hover:scale-105 drop-shadow-lg transition-transform duration-500 py-2">
        <li>
          <a
            className="font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 sm:px-4 py-2 rounded-md whitespace-nowrap text-sm md:text-base"
            href="/resume.pdf"
            download="Bence_Szabo_Resume"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
