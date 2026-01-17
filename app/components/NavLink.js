export default function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-800 font-semibold px-3 sm:px-4 py-2 rounded-md mb-2 sm:mb-0 mr-0 sm:mr-3 md:mr-4 hover:text-teal-600 transition-colors duration-500 whitespace-nowrap text-sm md:text-base"
    >
      {children}
    </a>
  );
}
