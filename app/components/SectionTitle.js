export default function SectionTitle({ id, icon, children }) {
  return (
    <>
      <hr className="border-t-2 border-gray-300 mb-4 md:mb-6 mx-auto w-full" />
      <h3 id={id} className="text-2xl sm:text-3xl md:text-4xl py-3 md:py-5 font-semibold">
        {children} {icon}
      </h3>
    </>
  );
}
