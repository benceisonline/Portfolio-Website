import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// Components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SectionTitle from "./components/SectionTitle";
import WorkExperienceItem from "./components/WorkExperienceItem";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ProjectLinks from "./components/ProjectLinks";
import SocialIcon from "./components/SocialIcon";
import ScrollProgressBar from "./components/ScrollProgressBar";
import FadeInOnScroll from "./components/FadeInOnScroll";

// Profile & Icons
import profilePic from "../public/pfp-2026.png";
import explorer from "../public/explorer-dynamic-colorx.png";
import hash from "../public/hash-dynamic-color.png";
import bulb from "../public/bulb-dynamic-color.png";

// Project Images
import p1 from "../public/P1.png";
import p1_2 from "../public/P1_2.png";
import p2 from "../public/P2.png";
import p2_2 from "../public/P2_2.png";
import p3 from "../public/P3.png";
import p3_2 from "../public/P3_2.png";
import p4 from "../public/P4.png";
import p4_2 from "../public/P4_2.png";
import p5 from "../public/P5.png";
import p5_2 from "../public/P5_2.png";
import p6 from "../public/P6.png";
import p6_2 from "../public/P6_2.png";
import p7 from "../public/P7.png";
import p7_2 from "../public/P7_2.png";
import p8 from "../public/P8.png";
import p8_2 from "../public/P8_2.png";
import p9 from "../public/P9.png";
import p9_2 from "../public/P9_2.png";
import p10 from "../public/P10.png";
import p10_2 from "../public/P10_2.png";

// Watermarked Images
import some1 from "../public/some1Watermarked.png";
import some2 from "../public/some2Watermarked.png";

// Other Images
import brazil from "../public/brazil.jpg";
import brazil_2 from "../public/brazil_2.jpg";
import inside from "../public/inside.jpg";
import limbo from "../public/limbo.jpg";
import snoopy from "../public/snoopy.jpg";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://bence-is-online.web.app"),
  title: "Bence Szabo | Software Developer, QA Engineer",
  description:
    "Bence Szabo is a software engineer focused on React, Next.js, Node.js, QA automation, and cloud-based delivery. The portfolio highlights work in web development, testing, AI, and scalable systems.",
  keywords: [
    "Bence Szabo",
    "software engineer",
    "full-stack developer",
    "QA automation",
    "React developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "DevOps",
    "CI/CD",
    "Google Cloud Platform",
    "Firebase",
    "Docker",
    "Kubernetes",
    "machine learning",
    "AI",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Bence Szabo" }],
  creator: "Bence Szabo",
  publisher: "Bence Szabo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Bence Szabo | Software Developer, QA Engineer",
    description:
      "Bence Szabo is a software engineer focused on React, Next.js, Node.js, QA automation, and cloud-based delivery. The portfolio highlights work in web development, testing, AI, and scalable systems.",
    url: "https://bence-is-online.web.app",
    type: "website",
    siteName: "Bence Szabo | Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://bence-is-online.web.app/pfp-2026.png",
        width: 800,
        height: 600,
        alt: "Bence Szabo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bence Szabo | Software Developer, QA Engineer",
    description:
      "Bence Szabo is a software engineer focused on React, Next.js, Node.js, QA automation, and cloud-based delivery. The portfolio highlights work in web development, testing, AI, and scalable systems.",
    creator: "@benceszabo",
  },
  alternates: {
    canonical: "https://bence-is-online.web.app",
  },
};

export default function Home() {
  const skillsData = [
    {
      icon: explorer,
      title: "Coding & QA",
      description:
        "Full-stack developer with expertise in Test-Driven Development and QA automation. Proficient in multiple paradigms (imperative C, OOP Java/C++, ML Python). Experienced with unit, integration, and end-to-end testing in large-scale projects.",
      tools: [
        "JavaScript/TypeScript - Node.js, Next.js, React, Express, Dart, Flutter, React Native",
        "Google Cloud Services, Docker, Kubernetes, NGINX, Grafana k6",
        "Python - Pandas, Keras, PyTorch, Tensorflow",
        "SQL, MongoDB, Firebase, Supabase",
        "Java - JUnit 5, JavaFX",
        "C++ - Unreal Engine",
        "C - CuTest",
        "R",
      ],
    },
    {
      icon: hash,
      title: "Agile & Project Management",
      description:
        "Experienced with Scrum, Kanban, and Nexus Framework. Skilled at leading and collaborating with teams while prioritizing clear communication and thorough documentation. Proven track record delivering successful projects from conception to completion, including large scale user studies with 200+ participants.",
      tools: [
        "Jira, YouTrack, TestRail, Sentry",
        "Git, Perforce, Jenkins",
        "Prolific, Qualtrics",
        "Scrum & Kanban",
        "Confluence",
        "Agile SD",
      ],
    },
    {
      icon: bulb,
      title: "Design & Theory",
      description:
        "Strong background in software architecture and design patterns. Experienced in translating client requirements into wireframes, mock-ups, and functional prototypes. Deep understanding of algorithms, data structures, and system complexity.",
      tools: [
        "Balsamiq Wireframes",
        "Visual Paradigm",
        "Adobe Products",
        "Draw.io",
        "Figma",
      ],
    },
    {
      icon: hash,
      title: "Leadership & Communication",
      description:
        "Teaching Assistant and Project Supervisor with strong mentoring abilities. Excellent at translating complex technical concepts for diverse stakeholder and coordinating cross-functional teams. Proven experience managing international partnerships across multiple time zones.",
      tools: [
        "Cross-cultural Collaboration",
        "Stakeholder Management",
        "Technical Fluency",
        "Team Coordination",
        "Mentoring",
      ],
    },
  ];

  const projects = [
    {
      title: "Master's Project: AI-Driven Browser-Level Privacy Protection Tool (2026)",
      description:
        "Master’s thesis documenting the development and evaluation of a browser extension that turns dense cookie popups into clear, actionable privacy controls. The system combines context-aware LLM explanations with a transparent recommendation model to help users understand tracking choices and act with greater agency.",
      images: [
        { src: p10, alt: "P10 Image 1" },
        { src: p10_2, alt: "P10 Image 2" },
      ],
      github: "https://github.com/benceisonline/Cookie-Slayer-Masters-Thesis",
      doc: "/P10_Documentation.pdf",
      docName: "Cookie_Slayer_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title:
        "Digital Agency in Online Consent: Seamful Design Research (2025)",
      description:
        "Master’s research project examining how seamful design can restore user agency in online consent management. Five prototypes were developed and evaluated through a participatory design workshop and a controlled user study with 200 participants.",
      images: [
        { src: p9, alt: "P9 Image 1" },
        { src: p9_2, alt: "P9 Image 2" },
      ],
      github: "https://github.com/loui981c/user-study-website-1",
      doc: "/P9_Documentation.pdf",
      docName: "Digital_Agency_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },

    {
      title:
        "SoundLink: Real-Time Location-Based Music Sharing Platform (2025)",
      description:
        "Master’s research project exploring community-driven interaction through music. The platform integrates Spotify, geolocation, and anonymous identity handling in a microservice architecture built with Flutter and Fastify, allowing users to create time-limited music hotspots.",
      images: [
        { src: p8, alt: "P8 Image 1" },
        { src: p8_2, alt: "P8 Image 2" },
      ],
      github: "https://github.com/saraselmn/SoundLink",
      doc: "/P8_Documentation.pdf",
      docName: "SoundLink_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
    },
    {
      title: "Madboks: Scalable Booking & Event Platform (2025)",
      description:
        "First master’s project delivering a booking and event management platform for a non-profit. The system includes secure authentication, email workflows, Cloudflare WAF rules, and a responsive frontend built on a resilient microservice architecture.",
      images: [
        { src: p7, alt: "P7 Image 1" },
        { src: p7_2, alt: "P7 Image 2" },
      ],
      github: "https://github.com/AAU-madboks-collab",
      doc: "/P7_Documentation.pdf",
      docName: "Madboks_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Bachelor Project: ML Recommender System for Ekstra Bladet (2024)",
      description:
        "Bachelor project for Ekstra Bladet focused on a machine-learning recommender system to improve mobile app engagement. The stack used GitHub CI/CD, FastAPI model serving, and a modular architecture; the custom LightFM model achieved an AUC of 0.90.",
      images: [
        { src: p6, alt: "P6 Image 1" },
        { src: p6_2, alt: "P6 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-6-Backend-2024",
      doc: "/P6_Documentation.pdf",
      docName: "Ekstra_Bladet_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title:
        "Educado: Educational Platform for a United Nations Project (2023)",
      description:
        "Erasmus-funded partnership between Aalborg University and the University of Brasília. The project delivered a socially gamified mobile platform for waste pickers in Brazil and attracted consideration from the UN Development Programme. I led React Native frontend development and supported CI/CD automation across teams and universities.",
      images: [
        { src: p5, alt: "P5 Image 1" },
        { src: p5_2, alt: "P5 Image 2" },
      ],
      github: "https://github.com/ErasmusEgalitarian",
      doc: "/P5_Documentation.pdf",
      docName: "Educado_UN_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
    },
    {
      title: "Custom Compiler for 8-bit Hardware (2023)",
      description:
        "Developed a compiler that translates a modern programming language into Assembly 6502, the instruction set used by systems such as the SNES and Furby. The language supports variables, procedures, loops, and conditionals, and the compiler implements lexical, syntactic, semantic, and code-generation phases in Java.",
      images: [
        { src: p4, alt: "P4 Image 1" },
        { src: p4_2, alt: "P4 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-4-2023",
      doc: "/P4_Documentation.pdf",
      docName: "Compiler_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Café Management System for The Living Room (2022)",
      description:
        "Desktop application for Copenhagen café 'The Living Room' that manages tasks, employees, schedules, and internal communication with real-time data sync. The project focused on a clear UI/UX and a structured Java and MongoDB codebase.",
      images: [
        { src: p3, alt: "P3 Image 1" },
        { src: p3_2, alt: "P3 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-3-2022",
      doc: "/P3_Documentation.pdf",
      docName: "Management_System_Project_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Budget & Expense Tracker (2022)",
      description:
        "Full-stack web app for students to track expenses, manage budgets, and set goals with real-time updates. Built with an MVC architecture using Node.js, Express, and MongoDB Atlas.",
      images: [
        { src: p2, alt: "P2 Image 1" },
        { src: p2_2, alt: "P2 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-2-2022",
      doc: "/P2_Documentation.pdf",
      docName: "Budget_Tracker_Project_Documentation",
      heightClass: "h-60 sm:h-68 lg:h-76",
      widthClass: "max-w-4xl",
    },
    {
      title: "Recruitment Process Automation (2021)",
      description:
        "First university project, developed with Danish companies including Novo Nordisk, DSB, and Jyske Bank. The command-line application analyzes job applications, ranks candidates through keyword matching, and extracts relevant information automatically.",
      images: [
        { src: p1, alt: "P1 Image 1" },
        { src: p1_2, alt: "P1 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-1-2021",
      doc: "/P1_Documentation.pdf",
      docName: "Recruitement_Project_Documentation",
      heightClass: "h-80 sm:h-[26rem] lg:h-[30rem]",
    },
  ];

  return (
    <div>
      <ScrollProgressBar />
      <main className="bg-white px-4 sm:px-8 md:px-16 lg:px-40 animate-fade-in">
        <section className="min-h-screen py-10 md:py-12">
          <Navigation />

          <HeroSection
            image={profilePic}
            name="Bence"
            subtitle="Software Engineer"
            description={[
              {
                period: "2024 - 2026",
                text: "I earned an MSc in Software Engineering with a specialization in Human-Computer Interaction at Aalborg University Copenhagen. The program emphasized production-ready software, thorough testing, and user-centered design. I graduated with an 11.7 GPA, which corresponds to an A in US grading system.",
              },
              {
                period: "2021 - 2024",
                text: "I earned a BSc in Civil Engineering (Software) at Aalborg University Copenhagen, with a specialization in Machine Learning. The program followed a problem-based learning model centered on collaborative problem solving.",
              },
            ]}
            socials={[
              {
                href: "https://www.linkedin.com/in/bencesz/",
                name: "LinkedIn",
                Icon: AiFillLinkedin,
                color: "text-blue-600",
                hoverColor: "text-blue-700",
              },
              {
                href: "https://github.com/benceisonline",
                name: "GitHub",
                Icon: AiFillGithub,
                color: "text-black",
                hoverColor: "text-gray-700",
              },
            ]}
            location={"Copenhagen"}
            contact={"benceisonline@gmail.com"}
          />
        </section>

        {/* Work Experience Section */}
        <FadeInOnScroll>
          <section id="work" className="py-10 md:py-12">
            <SectionTitle id="work" icon="👨‍💻">
              Work Experience
            </SectionTitle>

            <FadeInOnScroll>
              <WorkExperienceItem title="QA Engineer at Playdead (2026 - )">
                {[
                  "I continued at Playdead as a full-time QA Engineer after my student position.",
                  "My work covers QA tooling, debug tool development, playtest facilitation and planning, documentation, and cross-team collaboration to support efficient delivery of high-quality games.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <WorkExperienceItem
                title="Quality Assurance Student Worker at Playdead (2024 – 2026)"
                images={[
                  { src: inside, alt: "Playdead Image 1" },
                  { src: limbo, alt: "Playdead Image 2" },
                ]}
              >
                {[
                  "During my studies, I worked as a functional tester at Playdead, the studio behind Limbo and Inside.",
                  "I designed and implemented functional and automated test plans, supported functional and user testing, documented bugs, and extended the QA team's tooling with real-time data analysis and other software solutions. My work primarily involved Perforce, Unreal Engine, and C++.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <WorkExperienceItem
                title="Teaching Assistant & UN Egalitarian Project Supervisor at Aalborg University / United Nations (2024 – 2025)"
                images={[
                  { src: brazil, alt: "Egalitarian Image 1" },
                  { src: brazil_2, alt: "Egalitarian Image 2" },
                ]}
              >
                {[
                  "I coordinated software development and communication between Aalborg University, Saxion University, the University of Minho, and the University of Brasília in the Educado project under the UN Egalitarian Initiative.",
                  "As a teaching assistant, I provided daily technical support and Agile guidance to AAU students. I worked with Google Cloud services, Docker microservices, React web development, database management, and CI/CD automation.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <WorkExperienceItem
                title="Social Media Manager of an independent online entertainment page (2018 - 2020)"
                images={[
                  { src: some1, alt: "SoMe Image 1" },
                  { src: some2, alt: "SoMe Image 2" },
                ]}
                heightClass="h-80 sm:h-[26rem] lg:h-[30rem]"
                widthClass="max-w-4xl"
              >
                {[
                  "With a group of friends, I managed Facebook and Instagram accounts for an independent online entertainment page for two years. During that time, I produced engagement analytics and ran small-scale advertising campaigns.",
                  "The page focused on humorous takes on popular culture and combined original and curated content. After reaching 100,000 followers and more than 10M monthly engagements in 2020, it was sold and rebranded.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <WorkExperienceItem title="Service Worker at Rema 1000 (2016 - 2018)">
                <>
                  <div className="text-base sm:text-lg py-2 leading-7 md:leading-8 text-gray-800">
                    Like many Danish teenagers, I worked at a local grocery
                    store during high school. The role gave me experience in
                    customer service and in contributing to a healthy work
                    environment.
                  </div>

                  <div className="flex justify-center -mt-1">
                    <div className="w-40 sm:w-48 md:w-56">
                      <Image
                        src={snoopy}
                        alt="Snoopy"
                        className="w-full h-auto object-contain pointer-events-none"
                        sizes="(max-width: 640px) 160px, 224px"
                      />
                    </div>
                  </div>
                </>
              </WorkExperienceItem>
            </FadeInOnScroll>
          </section>
        </FadeInOnScroll>

        {/* Skills Section */}
        <FadeInOnScroll>
          <section id="skills" className="py-10 md:py-12">
            <SectionTitle id="skills" icon="👨‍🏭">
              Skills
            </SectionTitle>

            <p className="text-base sm:text-lg md:text-md py-4 md:py-6 leading-8 text-gray-800 max-w-4xl">
              During my studies, I built technical and soft skills through
              semester projects that translated theory into practical
              solutions. Each project added experience in design,
              implementation, testing, and teamwork.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 pt-4 auto-rows-fr">
              {skillsData.map((skill, index) => (
                <FadeInOnScroll key={index}>
                  <SkillCard
                    icon={skill.icon}
                    title={skill.title}
                    description={skill.description}
                    tools={skill.tools}
                  />
                </FadeInOnScroll>
              ))}
            </div>
          </section>
        </FadeInOnScroll>

        {/* Projects Section */}
        <FadeInOnScroll>
          <section id="projects" className="py-10 md:py-12">
            <SectionTitle id="projects" icon="🚀">
              Team-Based Projects
            </SectionTitle>

            <div className="space-y-12 md:space-y-16">
              {projects.map((project, index) => (
                <FadeInOnScroll key={index}>
                  <div>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      images={project.images}
                      heightClass={project.heightClass}
                      widthClass={project.widthClass}
                    />
                    {(project.github || project.doc) && (
                      <ProjectLinks
                        githubUrl={project.github}
                        docUrl={project.doc}
                        docName={project.docName}
                      />
                    )}
                  </div>
                </FadeInOnScroll>
              ))}
            </div>

            <div className="text-center pt-16 md:pt-20 pb-10 text-gray-800">
              Contact:{" "}
              <a
                href="mailto:benceisonline@gmail.com"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-500"
              >
                benceisonline@gmail.com
              </a>
            </div>
          </section>
        </FadeInOnScroll>
      </main>

      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-linear-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md hover:scale-105 drop-shadow-lg transition-transform duration-500 text-sm md:text-base font-semibold"
      >
        ↑
      </a>
    </div>
  );
}
