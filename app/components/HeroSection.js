import Image from "next/image";
import SocialIcon from "./SocialIcon";

export default function HeroSection({
  image,
  name,
  subtitle,
  description,
  socials = [],
  location,
  contact,
}) {
  return (
    <div className="text-center pt-8 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl py-2 text-teal-600 font-bold">
        Hi, my name is {name} <span className="wave">👋</span>
      </h2>
      <h3 className="text-xl sm:text-2xl lg:text-3xl py-2">{subtitle}</h3>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 py-8">
        <div className="shrink-0">
          <div className="relative rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden drop-shadow-lg hover:scale-105 transition-transform duration-500 my-4 md:my-0">
            <Image
              src={image}
              alt={name}
              priority
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            {socials.map((s, idx) => (
              <SocialIcon
                key={idx}
                href={s.href}
                Icon={s.Icon}
                color={s.color}
                hoverColor={s.hoverColor}
                sizeClass={s.sizeClass || "text-3xl sm:text-4xl"}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-3xl text-center md:text-left px-4 md:px-6">
          <p className="text-teal-600 pb-1 font-bold text-sm md:text-base">
            {description[0].period}
          </p>
          <p className="text-base sm:text-lg leading-7 md:leading-8 text-gray-800">
            {description[0].text}
          </p>

          <div className="border-t md:border-t-0 md:border-l border-gray-200 w-full my-6 md:my-4"></div>

          <p className="text-teal-600 pb-1 font-bold text-sm md:text-base">
            {description[1].period}
          </p>
          <p className="text-base sm:text-lg leading-7 md:leading-8 text-gray-800">
            {description[1].text}
          </p>

          <div className="mt-6 text-sm text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
              <div>
                {location && (
                  <p className="font-medium">
                    Based in <span className="text-teal-600">{location}</span>
                  </p>
                )}
                {contact && (
                  <p className="mt-1">
                    Contact me at{" "}
                    <a
                      className="text-teal-600 hover:text-teal-700"
                      href={`mailto:${contact}`}
                    >
                      {contact}
                    </a>
                  </p>
                )}
              </div>

              {contact && (
                <div className="shrink-0 mt-2 sm:mt-0 flex justify-center sm:justify-end md:ml-auto">
                  <a
                    className="font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 sm:px-4 py-2 rounded-md whitespace-nowrap text-sm md:text-base hover:scale-105 drop-shadow-lg transition-transform duration-200"
                    href="/resume.pdf"
                    download="Bence_Szabo_Resume"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
