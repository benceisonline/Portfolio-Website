import Image from "next/image";

export default function SkillCard({ icon, title, description, tools }) {
  return (
    <div className="text-center shadow-lg p-6 md:p-8 rounded-xl hover:scale-105 transition-transform duration-500 flex flex-col h-full">
      <div className="flex justify-center items-center">
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className="sm:w-20 sm:h-20"
        />
      </div>
      <h3 className="text-lg md:text-xl font-medium pt-4 md:pt-5 pb-2">
        {title}
      </h3>
      <p className="py-2 text-sm md:text-base leading-relaxed">{description}</p>
      <h4 className="py-3 text-teal-600 font-medium text-sm md:text-base">
        Tools I have used
      </h4>
      <div className="space-y-1">
        {tools.map((tool, index) => (
          <p key={index} className="text-gray-800 py-1 text-sm md:text-base">
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
