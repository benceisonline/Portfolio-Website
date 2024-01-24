import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import myface from "../public/myface.png"
import explorer from "../public/explorer-dynamic-colorx.png"
import hash from "../public/hash-dynamic-color.png"
import bulb from "../public/bulb-dynamic-color.png"
import p5 from "../public/P5.png"
import p5_2 from "../public/P5_2.png"
import p4 from "../public/P4.png"
import p4_2 from "../public/P4_2.png"
import p3 from "../public/P3.png"
import p3_2 from "../public/P3_2.png"
import p2 from "../public/P2.png"
import p2_2 from "../public/P2_2.png"
import p1 from "../public/P1.png"
import p1_2 from "../public/P1_2.png"
import some1 from "../public/some1Watermarked.png"
import some2 from "../public/some2Watermarked.png"

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-5 flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center">
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
              <a
                href="#work"
                className="text-gray-800 font-semibold px-4 py-2 rounded-md mb-4 sm:mb-0 mr-0 sm:mr-4 hover:text-teal-600 transition-colors duration-500 whitespace-nowrap"
              >
                Work Experience
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
            <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-6xl">Hi, my name is Bence</h2>
            <h3 className="text-2xl py-4 md:text-3xl">I am a Software Engineering student</h3>
            <p className="text-md py-6 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              I am currently enrolled in the BSc Civil Engineer Software program at Aalborg University Copenhagen
              (2021 - 2024), an education with a focus on the problem-based learning model
              and <span className="text-teal-600"> real-world problem-solving</span>.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a className="hover: hover:text-blue-500 transition-colors duration-500" href="https://www.linkedin.com/in/bencesz/" target="_blank"><AiFillLinkedin /></a>
            <a className="hover: hover:text-purple-500 transition-colors duration-500" href="https://github.com/benceisonline" target="_blank"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 
                          hover:scale-105 drop-shadow-lg transition-transform duration-500">
            <Image src={myface} alt="My Face" className="object-cover w-full h-full" />
          </div>
        </section>

        <section id="skills">
          <div>
            <h3 className="text-3xl py-4">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              During my studies, I have gained a wide range of technical and soft skills.
              In addition to the courses, each semester proposed a new challenge in the form of a comprehensive project requiring us to
              <span className="text-teal-600"> apply the technical knowledge in practice </span>to solve real-world problems.
              These projects were team-based and other than developing quality code,
              they also required us to
              <span className="text-teal-600"> improve soft skills such as communication and teamwork</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center"> {/* Centering container */}
                <Image src={explorer} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Project Management</h3>
              <p className="py-2">
                Throughout numerous semester-long projects, I have been responsible for being a project leader of 5+ people.
                As a result, I have gained experience in Agile development and a thorough understanding of the software development life cycle.
                Effective planning and communication with the team and client were essential to the success of the projects.
              </p>
              <h4 className="py-4 text-teal-600">Tools I have used</h4>
              <p className="text-gray-800 py-1">Agile Development & Scrum Framework</p>
              <p className="text-gray-800 py-1">Git - Version Control & CI/CD</p>
              <p className="text-gray-800 py-1">Google Workspace</p>
              <p className="text-gray-800 py-1">Azure Boards</p>
              <p className="text-gray-800 py-1">Trello</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center"> {/* Centering container */}
                <Image src={hash} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Coding & QA</h3>
              <p className="py-2">
                Possessing a full-stack programming background, I acquired imperative programming skills through C, delved into object-oriented programming using Java,
                and explored machine learning with Python. I have also gained experience in web development creating dynamic and fully responsive websites communicating with databases.
                I have worked in a Test-Driven Development setting, and have implemented unit, integration, and end-to-end testing in large projects.
              </p>
              <h4 className="py-4 text-teal-600">Tools I have used</h4>
              <p className="text-gray-800 py-1">JavaScript/TypeScript - Node.js, Next.js, React, React Native, Express, HTML, Tailwind, CSS</p>
              <p className="text-gray-800 py-1">MongoDB, Firebase, SQL, Google Cloud Services</p>
              <p className="text-gray-800 py-1">Python - Keras, Tensorflow, Spyder</p>
              <p className="text-gray-800 py-1">Java - JUnit 5, JavaFX</p>
              <p className="text-gray-800 py-1">C - CuTest</p>
              <p className="text-gray-800 py-1">R</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-105 transition-transform duration-500">
              <div className="flex justify-center items-center"> {/* Centering container */}
                <Image src={bulb} alt="design" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Design & Theory</h3>
              <p className="py-2">
                Building larger systems, I have learned the importance of software architecture and design patterns.
                Collaborating with clients, it was crucial to comprehend and translate user experience and interface design requirements into tangible media such as wireframes, mock-ups, and prototypes.
                While developing a compiler, I recognized the critical role of program complexity, algorithms, and data structures.
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
            <h3 className="text-3xl py-10">Team-Based Projects</h3>
            <div>
              <h2 className="text-2xl py-4">Educado Project: a large-scale educational mobile platform that got the attention of the UN (2023)</h2>
              <p className="text-md py-2 leading-8 text-gray-800">
                The Educado project is a partnership initiative of Aalborg University and the University of Brasília, supported by Erasmus. The project aims to develop a mobile platform that provides
                a socially-gamified educational experience for waste pickers in Brazil. The project is in consideration to be funded by the United Nations Development Programme (UNDP).
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                The project&apos;s workflow followed the Nexus Framework (Scaled Scrum), so I have gained practical experience working in an Agile environment.
                My primary responsibility was to develop the front end of the mobile application using React Native and to create a highly automated CI/CD pipeline.
                For educational purposes, I had to familiarise myself with all aspects of the product, essentially working as a full-stack developer.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image src={p5} alt="P5 Image 1" className="rounded-lg object-cover w-full h-auto" />
              </div>
              <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
                <Image src={p5_2} alt="P5 Image 2" className="rounded-lg object-cover w-full h-auto" />
              </div>
            </div>
            <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
              <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
                <AiFillGithub className="" size={30} href="https://github.com/Educado-App" target="_blank" />
                <a
                  href="https://github.com/Educado-App" target="_blank"
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
            <h2 className="text-2xl py-4">Modern Programming for Old Hardware (2023)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              In this project, we were tasked with developing a compiler for our own programming language. The result of this project is a modern
              general-purpose imperative programming language that can be compiled to Assembly 6502 (the language SNES and Furby used!) using our self-written compiler.
              The implementation language is Java.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The language incorporates most of the features of modern programming languages such as variables, procedures, loops, and conditionals. The compiler
              includes all crucial phases of a traditional compiler such as lexical analysis, syntax analysis, semantic analysis, and code generation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p4} alt="P4 Image 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p4_2} alt="P4 Image 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub className="" size={30} href="https://github.com/benceisonline/AAU-Project-4-2023" target="_blank" />
              <a
                href="https://github.com/benceisonline/AAU-Project-4-2023" target="_blank"
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
            <h2 className="text-2xl py-4">Task Management Software Solution for The Living Room (2022)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              This project aimed to create a software solution for The Living Room, a local café in Copenhagen. The purpose of the desktop application
              is to provide a platform for the café to manage their tasks and employees. The application is primarily written in Java and relies on a MongoDB database.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The focal points of this project were to develop a user-friendly and intuitive user interface and well-structured application in cooperation with a client.
              The application offers a work schedule, task management, employee management, and a communication platform. The application provides real-time data for both employees and managers.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p3} alt="P3 Image 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p3_2} alt="P3 Image 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub className="" size={30} href="https://github.com/benceisonline/AAU-Project-3-2022" target="_blank" />
              <a
                href="https://github.com/benceisonline/AAU-Project-3-2022" target="_blank"
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
            <h2 className="text-2xl py-4">Personal Budget and Expense Tracker (2022)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              During this project, we created a comprehensive full-stack web application designed for monitoring individual expenses and managing budgets. The main demographic of this budgeting app is students,
              and other than providing tools for expense planning and tracking, the application also encourages users to set goals and incorporate them into their budgets.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The application was built using the Model-View-Controller architectural pattern, focusing on the potential scalability of the product and the separation of concerns.
              The back-end of the website uses the Express Node.js web application framework, and the MongoDB database is hosted on MongoDB Atlas.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p2} alt="P2 Image 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p2_2} alt="P2 Image 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub className="" size={30} href="https://github.com/benceisonline/AAU-Project-2-2022" target="_blank" />
              <a
                href="https://github.com/benceisonline/AAU-Project-2-2022" target="_blank"
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
            <h2 className="text-2xl py-4">Streamlining a Recruitment Process (2021)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              As the inaugural university project, key insights included gaining experience in team collaboration and tackling real-world challenges.
              Having conducted interviews with people from the HR departments of Novo Nordisk, DSB, and Jyske Bank, the group learned to identify a client&apos;s requirements
              and provide a suitable prototype to solve an issue.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The prototype is a command-line application built entirely in C and should act as a proof of concept. Processing text files and a list of keywords with weights as input,
              the program can read through, rate and rank job applications. Furthermore, the program extracts relevant snippets from the text files, such as contact information
              and potentially significant sentences.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p1} alt="P1 Image 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={p1_2} alt="P1 Image 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
          <div className="py-10 mb-10 flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex items-center text-gray-800 font-semibold mb-4 sm:mb-0 hover:text-teal-600 transition-colors duration-500">
              <AiFillGithub className="" size={30} href="https://github.com/benceisonline/AAU-Project-1-2021" target="_blank" />
              <a
                href="https://github.com/benceisonline/AAU-Project-1-2021" target="_blank"
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
        </section>

        <section id="work">
          <div>
            <h3 className="text-3xl py-10">Work Experience</h3>
            <h2 className="text-2xl py-4">Social Media Manager of an independent online entertainment page (2018 - 2020)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              In collaboration with some friends, I spent two years running social media accounts (Facebook and Instagram) for an independent online entertainment page.
              During my time, I gained experience in producing engagement analytics and conducting small-scale advertisement campaigns.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              The accounts featured humorous reflections on popular culture, consisting of a mix of original and curated content.
              Following popular culture, the account handles were changed numerous times but still managed to garner
              a large following amongst younger users. Shortly after surpassing 100.000 Followers and 10M+ monthly engagements in 2020,
              the site was sold and rebranded.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={some1} alt="SoMe Image 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-500">
              <Image src={some2} alt="SoMe Image 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl py-4">Service Worker at Rema 1000 (2016 - 2018)</h2>
            <p className="text-md py-2 leading-8 text-gray-800">
              Similarly to many other Danish teenagers, I spent my high school years working at a local grocery store.
              Here, I gained experience in customer service, and I learned to participate in creating a healthy work environment.
            </p>
          </div>

          <div className="text-center pt-20 pb-10 text-gray-800">
            Contact: <span className="text-teal-600"> benceisonline@gmail.com</span>
          </div>
        </section>

        <a href="#top" className="fixed bottom-6 right-6 bg-black bg-opacity-50 text-white py-2 px-4 rounded-md hover:bg-opacity-70 transition-colors duration-500">↑</a>
      </main>
    </div>
  )
}
