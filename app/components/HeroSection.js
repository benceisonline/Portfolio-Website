import Image from "next/image";

export default function HeroSection({ image, name, subtitle, description }) {
  return (
    <div className="text-center pt-4 pb-8 md:pt-6 md:pb-12 px-4">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl py-2 text-teal-600 font-bold">
        Hi, my name is {name} <span className="wave">👋</span>
      </h2>
      <h3 className="text-xl sm:text-2xl lg:text-3xl py-4">{subtitle}</h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:space-x-4 py-6">
        <div className="flex-1 max-w-xl px-4">
          <p className="text-teal-600 pb-1 font-bold text-sm md:text-base">{description[0].period}</p>
          <p className="text-base sm:text-lg leading-7 md:leading-8 text-gray-800">
            {description[0].text}
          </p>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-gray-400 w-full md:w-auto md:h-32 my-4 md:my-0"></div>

        <div className="flex-1 max-w-xl px-4">
          <p className="text-teal-600 pb-1 font-bold text-sm md:text-base">{description[1].period}</p>
          <p className="text-base sm:text-lg leading-7 md:leading-8 text-gray-800">
            {description[1].text}
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto bg-linear-to-b from-teal-400 rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 m-12 overflow-hidden hover:scale-105 drop-shadow-lg transition-transform duration-500"
      >
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
