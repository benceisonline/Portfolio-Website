import { AiFillGithub } from "react-icons/ai";

export default function ProjectLinks({ githubUrl, docUrl, docName }) {
  if (!githubUrl && !docUrl) return null;

  return (
    <div className="py-6 md:py-10 mb-8 md:mb-10 flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0">
      {githubUrl && (
        <div className="flex items-center text-black font-semibold hover:text-gray-700 transition-colors duration-500">
          <AiFillGithub size={24} className="md:w-7.5 md:h-7.5" />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 py-2 rounded-md text-sm md:text-base"
          >
            GitHub Repository
          </a>
        </div>
      )}

      {docUrl && (
        <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
          <li>
            <a
              className="font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 md:px-4 py-2 rounded-md text-sm md:text-base"
              href={docUrl}
              download={docName}
            >
              Download Documentation
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
