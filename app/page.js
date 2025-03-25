import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import myface from "../public/myface.png";
import explorer from "../public/explorer-dynamic-colorx.png";
import hash from "../public/hash-dynamic-color.png";
import bulb from "../public/bulb-dynamic-color.png";
import p7_2 from "../public/P7_2.png";
import p7 from "../public/P7.png";
import p6 from "../public/P6.png";
import p6_2 from "../public/P6_2.png";
import p5 from "../public/P5.png";
import p5_2 from "../public/P5_2.png";
import p4 from "../public/P4.png";
import p4_2 from "../public/P4_2.png";
import p3 from "../public/P3.png";
import p3_2 from "../public/P3_2.png";
import p2 from "../public/P2.png";
import p2_2 from "../public/P2_2.png";
import p1 from "../public/P1.png";
import p1_2 from "../public/P1_2.png";
import some1 from "../public/some1Watermarked.png";
import some2 from "../public/some2Watermarked.png";
import inside from "../public/inside.jpg";
import limbo from "../public/limbo.jpg";
import brazil from "../public/brazil.jpg";
import brazil_2 from "../public/brazil_2.jpg";

export const metadata = {
  title: "Bence Szabo - Software Engineer, QA Specialist & Project Manager",
  description:
    "Explore Bence Szabo's expertise in software engineering, QA, and project management. Discover projects in web development, AI, and cloud computing.",
  keywords: [
    "Bence Szabo",
    "Software Engineer",
    "QA Specialist",
    "Project Management",
    "Full-Stack Developer",
    "Web Development",
    "AI",
    "Cloud Computing",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "MongoDB",
    "Firebase",
    "Supabase",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "Machine Learning",
    "Unreal Engine",
  ],
  authors: [{ name: "Bence Szabo" }],
  openGraph: {
    title: "Bence Szabo - Software Engineer, QA Specialist & Project Manager",
    description:
      "Discover the projects, skills, and experience of Bence Szabo in software engineering, QA, and cloud computing.",
    url: "https://bence-is-online.web.app/",
    type: "website",
    site_name: "Bence Szabo Portfolio",
  },
};

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-5 flex flex-col sm:flex-row sm:justify-between border-b-2 border-gray-300">
            <div className="flex flex-col sm:flex-row items-center">
              <a
                href="#work"
                className="text-gray-800 font-semibold px-4 py-2 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-4 hover:text-teal-600 transition-colors duration-500 whitespace-nowrap"
              >
                Work Experience
              </a>
              <a
                href="#skills"
                className="text-gray-800 font-semibold px-4 py-2 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-4 hover:text-teal-600 transition-colors duration-500 whitespace-nowrap"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-800 font-semibold px-4 py-2 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-4 hover:text-teal-600 transition-colors duration-500 whitespace-nowrap"
              >
                Team-Based Projects
              </a>
            </div>
            <ul className="flex items-center justify-center sm:justify-start hover:scale-105 drop-shadow-lg transition-transform duration-500 py-2">
              <li>
                <a
                  className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md whitespace-nowrap"
                  href="/resume.pdf"
                  download="Bence_Szabo_Resume"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-6xl">
              Hi, my name is Bence <span className="wave">👋</span>
            </h2>
            <h3 className="text-2xl py-4 md:text-3xl">
              I am a Software Engineering student
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-6">
              <div className="flex-1 max-w-xl">
                <p className="text-teal-600 pb-1 font-bold"> 2024 - 2026 </p>
                <p className="text-md leading-8 text-gray-800 md:text-xl">
                  I am enrolled in the MSc in Software Engineering program at
                  Aalborg University Copenhagen, an education with a focus on
                  <span className="text-teal-600">
                    {" "}
                    developing software that is thoroughly prepared, tested and
                    ready for use
                  </span>
                  .
                </p>
              </div>

              <div className="border-l border-gray-400 h-32 hidden md:block"></div>

              <div className="flex-1 max-w-xl">
                <p className="text-teal-600 pb-1 font-bold"> 2021 - 2024 </p>
                <p className="text-md leading-8 text-gray-800 md:text-xl">
                  I completed my BSc in Civil Engineering Software at Aalborg
                  University Copenhagen, an education with a focus on the
                  problem-based learning model and
                  <span className="text-teal-600">
                    {" "}
                    real-world problem-solving
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              className="hover:text-blue-500 transition-colors duration-500"
              href="https://www.linkedin.com/in/bencesz/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="hover:text-purple-500 transition-colors duration-500"
              href="https://github.com/benceisonline"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
          <div
            className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 m-20 overflow-hidden md:h-96 md:w-96 
                          hover:scale-105 drop-shadow-lg transition-transform duration-500"
          >
            <Image
              src={myface}
              alt="My Face"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section id="work">
          <div>
            <hr className="border-t-2 border-gray-300 mb-6 mx-auto w-full" />
            <h3 className="text-3xl py-5 font-semibold">Work Experience 👨‍💻</h3>

            <div>
              <h2 className="text-2xl py-4">
                Quality Assurance Student Worker at Playdead (2024 – )
              </h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                I am currently a QA Student Worker at Playdead, the
                internationally renowned video game studio known for its
                atmospheric and artistic games, <em>Limbo</em> and{" "}
                <em>Inside</em>.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                My role involves planning and conducting technical and user
                tests, documenting issues and bugs, and enhancing the QA
                team&apos;s toolbox with new software solutions. I work in a
                highly dynamic environment where effective communication and a
                deep understanding of each colleague&apos;s area of expertise
                are essential. My work primarily involves Perforce, Unreal
                Engine, and C++ programming.
              </p>
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={inside}
                    alt="Playdead Image 1"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={limbo}
                    alt="Playdead Image 2"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl py-4">
                Teaching Assistant & UN Egalitarian Project Supervisor at
                Aalborg University / United Nations (2024 – 2025)
              </h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                I assisted in the Educado Project under the UN&apos;s
                Egalitarian Initiative (co-funded by the European Untion),
                coordinating effective communication and software development
                efforts between Aalborg University, Saxion University,
                University of Minho, and University of Brasília.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                Focusing on the teaching assistant side, I provided day-to-day
                technical support and Agile guidance to assist AAU students in
                their software development efforts. During this time, I worked
                with Google Cloud services, Docker microservices React web
                development, database management, and CI/CD optimisation and
                automation.
              </p>
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={brazil}
                    alt="Egalitarian Image 1"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={brazil_2}
                    alt="Egalitarian Image 2"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl py-4">
              Social Media Manager of an independent online entertainment page
              (2018 - 2020)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              In collaboration with some friends, I spent two years running
              social media accounts (Facebook and Instagram) for an independent
              online entertainment page. During my time, I gained experience in
              producing engagement analytics and conducting small-scale
              advertisement campaigns.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The accounts featured humorous reflections on popular culture,
              consisting of a mix of original and curated content. Following
              popular culture, the account handles were changed numerous times
              but still managed to garner a large following amongst younger
              users. Shortly after surpassing 100.000 Followers and 10M+ monthly
              engagements in 2020, the site was sold and rebranded.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={some1}
                alt="SoMe Image 1"
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={some2}
                alt="SoMe Image 2"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl py-4">
              Service Worker at Rema 1000 (2016 - 2018)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              Similarly to many other Danish teenagers, I spent my high school
              years working at a local grocery store. Here, I gained experience
              in customer service, and I learned to participate in creating a
              healthy work environment.
            </p>
          </div>
        </section>

        <section id="skills">
          <div>
            <hr className="border-t-2 border-gray-300 mb-6 mx-auto w-full" />
            <h3 className="text-3xl py-5 font-semibold">Skills 👨‍🏭</h3>
            <p className="text-md py-4 leading-8 text-gray-800">
              During my studies, I have gained a wide range of technical and
              soft skills. In addition to the courses, each semester proposed a
              new challenge in the form of a comprehensive project requiring us
              to
              <span className="text-teal-600">
                {" "}
                apply the technical knowledge in practice{" "}
              </span>
              to solve real-world problems. These projects were team-based and
              other than developing quality code, they also required us to
              <span className="text-teal-600">
                {" "}
                improve soft skills such as communication and teamwork
              </span>
              .
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center">
                {" "}
                {/* Centering container */}
                <Image src={explorer} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Project Management
              </h3>
              <p className="py-2">
                Throughout numerous semester-long projects, I have been
                responsible for being a project leader of 5+ people. As a
                result, I have gained experience in iterative development and a
                thorough understanding of the software development life cycle.
                Effective planning and communication with the team and client
                were essential to the success of the projects.
              </p>
              <h4 className="py-4 text-teal-600">Tools I have used</h4>
              <p className="text-gray-800 py-1">
                Agile Development & Scrum Framework
              </p>
              <p className="text-gray-800 py-1">
                Git, Perforce - Version Control & CI/CD
              </p>
              <p className="text-gray-800 py-1">Google Workspace</p>
              <p className="text-gray-800 py-1">Azure Boards</p>
              <p className="text-gray-800 py-1">Trello</p>
              <p className="text-gray-800 py-1">YouTrack</p>
              <p className="text-gray-800 py-1">Jira</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center">
                {" "}
                {/* Centering container */}
                <Image src={hash} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Coding & QA</h3>
              <p className="py-2">
                Possessing a full-stack programming background, I acquired
                imperative programming skills through C, delved into
                object-oriented programming using Java, and explored machine
                learning with Python. I have also gained experience in web/app
                development creating dynamic and fully responsive websites/apps
                communicating with databases. I have worked in a Test-Driven
                Development setting, and have implemented unit, integration, and
                end-to-end testing in large projects.
              </p>
              <h4 className="py-4 text-teal-600">Tools I have used</h4>
              <p className="text-gray-800 py-1">
                JavaScript/TypeScript - Node.js, Next.js, React, React Native,
                Express, HTML, Tailwind, CSS
              </p>
              <p className="text-gray-800 py-1">
                SQL, Google Cloud Services, Docker, Kubernetes MongoDB,
                Firebase, Supabase
              </p>
              <p className="text-gray-800 py-1">
                Python - Pandas, Keras, PyTorch, Tensorflow
              </p>
              <p className="text-gray-800 py-1">Java - JUnit 5, JavaFX</p>
              <p className="text-gray-800 py-1">C++ - Unreal</p>
              <p className="text-gray-800 py-1">C - CuTest</p>
              <p className="text-gray-800 py-1">R</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center">
                {" "}
                {/* Centering container */}
                <Image src={bulb} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Design & Theory</h3>
              <p className="py-2">
                Building larger systems, I have learned the importance of
                software architecture and design patterns. Collaborating with
                clients, it was crucial to comprehend and translate user
                experience and interface design requirements into tangible media
                such as wireframes, mock-ups, and prototypes. While developing a
                compiler, I recognized the critical role of program complexity,
                algorithms, and data structures.
              </p>
              <h4 className="py-4 text-teal-600">Tools I have used</h4>
              <p className="text-gray-800 py-1">Balsamiq Wireframes</p>
              <p className="text-gray-800 py-1">Visual Paradigm</p>
              <p className="text-gray-800 py-1">Adobe Products</p>
              <p className="text-gray-800 py-1">Draw.io</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div>
            <hr className="border-t-2 border-gray-300 mb-6 mx-auto w-full" />
            <h3 className="text-3xl py-5 font-semibold">
              Team-Based Projects 🚀
            </h3>

            <div>
              <h2 className="text-2xl py-4">
                Madboks: A scalable booking and event management web-platform
                for a non-profit organization
              </h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                As the first master&apos;s project, this web-application is a
                culmination of web-development knowledge gathered throghout my
                experience with sustainable software design and coding. The main
                challanges included implementing a Cloudflare firewall, writing
                a reliable email service, ensuring secure authorization and
                session management, and creating a fully responsive frontend
                that works on any realistic screensize.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                Using scalable microservice architecture, the booking and event
                management website is designed to perform well under heavy
                loads, while providing a user-friendly user experience for both
                system admins and customers, developed in close collaboration
                with the organization and its users.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p7}
                  alt="P7 Image 1"
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p7_2}
                  alt="P7 Image 2"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
              <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
                <AiFillGithub
                  className=""
                  size={30}
                  href="https://github.com/AAU-madboks-collab"
                  target="_blank"
                />
                <a
                  href="https://github.com/AAU-madboks-collab"
                  target="_blank"
                  className="px-4 py-2 rounded-md"
                >
                  GitHub Repository
                </a>
              </div>
              <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
                <li>
                  <a
                    className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                    href="/P7_Documentation.pdf"
                    download="Bence_Szabo_P7_Documentation"
                  >
                    Download Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl py-4">
                Bachelor Project: A machine learning powered recommender system
                for Ekstra Bladet (2024)
              </h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                This collaboration with the Danish tabloid newspaper Ekstra
                Bladet aims to boost user engagement on their mobile application
                through the implementation of a machine-learning-based
                recommender system.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                The chosen technology stack includes GitHub for version control
                and continuous integration, FastAPI for efficient model serving,
                and offers various off-the-shelf options for machine learning
                models. The primary emphasis is on modularity, facilitating easy
                model swapping for Ekstra Bladet&apos;s data science team.
                Nevertheless, the configured LightFM model has demonstrated an
                impressive AUC score of 0.90 (+-0.01), ensuring accurate
                recommendations approximately 90% of the time.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p6}
                  alt="P6 Image 1"
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p6_2}
                  alt="P6 Image 2"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
              <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
                <AiFillGithub
                  className=""
                  size={30}
                  href="https://github.com/benceisonline/AAU-Project-6-Backend-2024"
                  target="_blank"
                />
                <a
                  href="https://github.com/benceisonline/AAU-Project-6-Backend-2024"
                  target="_blank"
                  className="px-4 py-2 rounded-md"
                >
                  GitHub Repository
                </a>
              </div>
              <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
                <li>
                  <a
                    className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                    href="/P6_Documentation.pdf"
                    download="Bence_Szabo_P6_Documentation"
                  >
                    Download Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl py-4">
                Educado Project: A large-scale educational mobile platform that
                got the attention of the UN (2023)
              </h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                The Educado project is a partnership initiative of Aalborg
                University and the University of Brasília, supported by Erasmus.
                The project aims to develop a mobile platform that provides a
                socially-gamified educational experience for waste pickers in
                Brazil. The project is in consideration to be funded by the
                United Nations Development Programme (UNDP).
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                The project&apos;s workflow followed the Nexus Framework (Scaled
                Scrum), so I have gained practical experience working in an
                Agile environment. My primary responsibility was to develop the
                front end of the mobile application using React Native and to
                create a highly automated CI/CD pipeline. For educational
                purposes, I had to familiarise myself with all aspects of the
                product, essentially working as a full-stack developer.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p5}
                  alt="P5 Image 1"
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image
                  src={p5_2}
                  alt="P5 Image 2"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
              <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
                <AiFillGithub
                  className=""
                  size={30}
                  href="https://github.com/Educado-App"
                  target="_blank"
                />
                <a
                  href="https://github.com/Educado-App"
                  target="_blank"
                  className="px-4 py-2 rounded-md"
                >
                  GitHub Repository
                </a>
              </div>
              <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
                <li>
                  <a
                    className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                    href="/P5_Documentation.pdf"
                    download="Bence_Szabo_P5_Documentation"
                  >
                    Download Documentation
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="text-2xl py-4">
              Modern Programming for Old Hardware (2023)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              In this project, we were tasked with developing a compiler for our
              own programming language. The result of this project is a modern
              general-purpose imperative programming language that can be
              compiled to Assembly 6502 (the language SNES and Furby used!)
              using our self-written compiler. The implementation language is
              Java.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The language incorporates most of the features of modern
              programming languages such as variables, procedures, loops, and
              conditionals. The compiler includes all crucial phases of a
              traditional compiler such as lexical analysis, syntax analysis,
              semantic analysis, and code generation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p4}
                alt="P4 Image 1"
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p4_2}
                alt="P4 Image 2"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub
                className=""
                size={30}
                href="https://github.com/benceisonline/AAU-Project-4-2023"
                target="_blank"
              />
              <a
                href="https://github.com/benceisonline/AAU-Project-4-2023"
                target="_blank"
                className="px-4 py-2 rounded-md"
              >
                GitHub Repository
              </a>
            </div>
            <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
              <li>
                <a
                  className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/P4_Documentation.pdf"
                  download="Bence_Szabo_P4_Documentation"
                >
                  Download Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl py-4">
              Task Management Software Solution for The Living Room (2022)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              This project aimed to create a software solution for The Living
              Room, a local café in Copenhagen. The purpose of the desktop
              application is to provide a platform for the café to manage their
              tasks and employees. The application is primarily written in Java
              and relies on a MongoDB database.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The focal points of this project were to develop a user-friendly
              and intuitive user interface and well-structured application in
              cooperation with a client. The application offers a work schedule,
              task management, employee management, and a communication
              platform. The application provides real-time data for both
              employees and managers.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p3}
                alt="P3 Image 1"
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p3_2}
                alt="P3 Image 2"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub
                className=""
                size={30}
                href="https://github.com/benceisonline/AAU-Project-3-2022"
                target="_blank"
              />
              <a
                href="https://github.com/benceisonline/AAU-Project-3-2022"
                target="_blank"
                className="px-4 py-2 rounded-md"
              >
                GitHub Repository
              </a>
            </div>
            <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
              <li>
                <a
                  className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/P3_Documentation.pdf"
                  download="Bence_Szabo_P3_Documentation"
                >
                  Download Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl py-4">
              Personal Budget and Expense Tracker (2022)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              During this project, we created a comprehensive full-stack web
              application designed for monitoring individual expenses and
              managing budgets. The main demographic of this budgeting app is
              students, and other than providing tools for expense planning and
              tracking, the application also encourages users to set goals and
              incorporate them into their budgets.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The application was built using the Model-View-Controller
              architectural pattern, focusing on the potential scalability of
              the product and the separation of concerns. The back-end of the
              website uses the Express Node.js web application framework, and
              the MongoDB database is hosted on MongoDB Atlas.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p2}
                alt="P2 Image 1"
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p2_2}
                alt="P2 Image 2"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub
                className=""
                size={30}
                href="https://github.com/benceisonline/AAU-Project-2-2022"
                target="_blank"
              />
              <a
                href="https://github.com/benceisonline/AAU-Project-2-2022"
                target="_blank"
                className="px-4 py-2 rounded-md"
              >
                GitHub Repository
              </a>
            </div>
            <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
              <li>
                <a
                  className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/P2_Documentation.pdf"
                  download="Bence_Szabo_P2_Documentation"
                >
                  Download Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl py-4">
              Streamlining a Recruitment Process (2021)
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              As the inaugural university project, key insights included gaining
              experience in team collaboration and tackling real-world
              challenges. Having conducted interviews with people from the HR
              departments of Novo Nordisk, DSB, and Jyske Bank, the group
              learned to identify a client&apos;s requirements and provide a
              suitable prototype to solve an issue.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The prototype is a command-line application built entirely in C
              and should act as a proof of concept. Processing text files and a
              list of keywords with weights as input, the program can read
              through, rate and rank job applications. Furthermore, the program
              extracts relevant snippets from the text files, such as contact
              information and potentially significant sentences.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p1}
                alt="P1 Image 1"
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image
                src={p1_2}
                alt="P1 Image 2"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub
                className=""
                size={30}
                href="https://github.com/benceisonline/AAU-Project-1-2021"
                target="_blank"
              />
              <a
                href="https://github.com/benceisonline/AAU-Project-1-2021"
                target="_blank"
                className="px-4 py-2 rounded-md"
              >
                GitHub Repository
              </a>
            </div>
            <ul className="flex items-center hover:scale-105 drop-shadow-lg transition-transform duration-500">
              <li>
                <a
                  className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  href="/P1_Documentation.pdf"
                  download="Bence_Szabo_P1_Documentation"
                >
                  Download Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center pt-20 pb-10 text-gray-800">
            Contact:{" "}
            <span className="text-teal-600"> benceisonline@gmail.com</span>
          </div>
        </section>

        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-black bg-opacity-50 text-white py-2 px-4 rounded-md hover:bg-opacity-70 transition-colors duration-500"
        >
          ↑
        </a>
      </main>
    </div>
  );
}
