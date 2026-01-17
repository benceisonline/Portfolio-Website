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
import myface from "../public/myface.png";
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
import p5 from "../public/p5.png";
import p5_2 from "../public/p5_2.png";
import p6 from "../public/P6.png";
import p6_2 from "../public/P6_2.png";
import p7 from "../public/P7.png";
import p7_2 from "../public/P7_2.png";
import p8 from "../public/p8.png";
import p8_2 from "../public/p8_2.png";

// Watermarked Images
import some1 from "../public/some1Watermarked.png";
import some2 from "../public/some2Watermarked.png";

// Other Images
import brazil from "../public/brazil.jpg";
import brazil_2 from "../public/brazil_2.jpg";
import inside from "../public/inside.jpg";
import limbo from "../public/limbo.jpg";

export const metadata = {
  title: "Bence Szabo | Full-Stack Engineer & QA Automation Specialist",
  description:
    "Full-stack software engineer specializing in React, Next.js, and Node.js with expertise in QA automation, cloud infrastructure (GCP, Firebase), and DevOps. View projects in web development, AI, and scalable systems.",
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
    title: "Bence Szabo | Full-Stack Engineer & QA Specialist",
    description:
      "Explore innovative web applications, machine learning projects, and enterprise QA solutions. Experienced with React, Next.js, Node.js, GCP, and DevOps.",
    url: "https://bence-is-online.web.app",
    type: "website",
    siteName: "Bence Szabo | Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://bence-is-online.web.app/myface.png",
        width: 800,
        height: 600,
        alt: "Bence Szabo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bence Szabo | Full-Stack Engineer & QA Specialist",
    description: "Check out my latest projects in web development, AI, and DevOps",
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
        "Full-stack developer with expertise in Test-Driven Development and QA automation. Proficient in multiple paradigms (imperative C, OOP Java/C++, ML Python) and modern web technologies. Experienced with unit, integration, and end-to-end testing in large-scale projects.",
      tools: [
        "JavaScript/TypeScript - Node.js, Next.js, React, Express, Dart, Flutter, React Native, Tailwind, HTML, CSS",
        "SQL, Google Cloud Services, Docker, Kubernetes, MongoDB, Firebase, Supabase, NGINX, Grafana k6",
        "Python - Pandas, Keras, PyTorch, Tensorflow",
        "Java - JUnit 5, JavaFX",
        "C++ - Unreal Engine",
        "C - CuTest",
        "R",
      ],
    },
    {
      icon: hash,
      title: "Agile & Management",
      description:
        "Experienced with Scrum, Kanban, and Nexus Framework. Skilled at leading and collaborating with teams while prioritizing clear communication and thorough documentation. Proven track record delivering successful projects from conception to completion.",
      tools: [
        "Jira",
        "Scrum & Kanban",
        "Nexus Framework",
        "Confluence",
        "GitHub",
        "Git",
      ],
    },
    {
      icon: bulb,
      title: "Design & Theory",
      description:
        "Strong background in software architecture and design patterns. Experienced in translating client requirements into wireframes, mockups, and prototypes. Deep understanding of algorithms, data structures, and system complexity.",
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
        "Teaching Assistant and Project Supervisor with strong mentoring abilities. Excellent at translating complex technical concepts for diverse audiences and coordinating cross-functional teams. Proven experience managing international partnerships across multiple time zones.",
      tools: [
        "Team Coordination",
        "Mentoring",
        "Technical Writing",
        "Stakeholder Management",
        "Cross-cultural Collaboration",
      ],
    },
  ];

  const projects = [
    {
      title: "SoundLink: Real-Time Location-based Music Sharing Platform (2025)",
      description: "Master's thesis project exploring community-driven social interaction through music. Key challenges: real-time Spotify integration, scalable geolocation data aggregation, anonymous identity handling, and seamless performance under concurrent load. Built using a microservice architecture with Flutter frontend and Fastify backend, users create time-limited music hotspots to connect with others based on shared taste, fostering spontaneous community engagement while maintaining user privacy.",
      images: [
        { src: p8, alt: "P8 Image 1" },
        { src: p8_2, alt: "P8 Image 2" },
      ],
      github: "https://github.com/saraselmn/SoundLink",
      doc: "/P8_Documentation.pdf",
      docName: "SoundLink_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
    },
    {
      title: "Madboks: Scalable Booking & Event Platform (2025)",
      description: "First master's project delivering a booking and event management platform for a non-profit. Implemented Cloudflare WAF rules, reliable email workflows, and secure authentication/session handling alongside a fully responsive frontend. Microservice-based architecture keeps booking and event flows resilient under heavy usage, designed collaboratively with admins and end users.",
      images: [
        { src: p7, alt: "P7 Image 1" },
        { src: p7_2, alt: "P7 Image 2" },
      ],
      github: "https://github.com/AAU-madboks-collab",
      doc: "/P7_Documentation.pdf",
      docName: "Bence_Szabo_P7_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Bachelor Project: ML Recommender System for Ekstra Bladet (2024)",
      description: "Built a machine-learning recommender system for Denmark's leading tabloid newspaper to boost mobile app user engagement. Stack includes GitHub CI/CD, FastAPI for model serving, and a modular architecture enabling easy model swapping. The LightFM model achieved a 0.90 AUC score, delivering 90% accurate recommendations.",
      images: [
        { src: p6, alt: "P6 Image 1" },
        { src: p6_2, alt: "P6 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-6-Backend-2024",
      doc: "/P6_Documentation.pdf",
      docName: "Bence_Szabo_P6_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Educado: Educational Platform for a United Nations Project (2023)",
      description: "Erasmus-funded partnership between Aalborg University and University of Brasília. Developed a socially-gamified mobile platform for waste pickers in Brazil that attracted UN Development Programme (UNDP) consideration for funding. Led React Native frontend development and implemented highly automated CI/CD pipeline using Nexus Framework (Scaled Scrum), with full-stack responsibilities across multiple teams and universities.",
      images: [
        { src: p5, alt: "P5 Image 1" },
        { src: p5_2, alt: "P5 Image 2" },
      ],
      github: "https://github.com/ErasmusEgalitarian",
      doc: "/P5_Documentation.pdf",
      docName: "Bence_Szabo_P5_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
    },
    {
      title: "Custom Compiler for 8-bit Hardware (2023)",
      description: "Developed a compiler that translates a modern programming language to Assembly 6502 (used in SNES and Furby). Full-featured language supporting variables, procedures, loops, and conditionals. Implemented all compiler phases: lexical analysis, syntax analysis, semantic analysis, and code generation. Written in Java.",
      images: [
        { src: p4, alt: "P4 Image 1" },
        { src: p4_2, alt: "P4 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-4-2023",
      doc: "/P4_Documentation.pdf",
      docName: "Bence_Szabo_P4_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Café Management System for The Living Room (2022)",
      description: "Desktop application for Copenhagen café 'The Living Room' that manages tasks, employees, schedules, and internal communication with real-time data sync. Focused on intuitive UI/UX and well-structured codebase, built with Java and MongoDB to provide a seamless experience for both employees and managers.",
      images: [
        { src: p3, alt: "P3 Image 1" },
        { src: p3_2, alt: "P3 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-3-2022",
      doc: "/P3_Documentation.pdf",
      docName: "Bence_Szabo_P3_Documentation",
      heightClass: "h-64 sm:h-72 lg:h-80",
      widthClass: "max-w-4xl",
    },
    {
      title: "Budget & Expense Tracker (2022)",
      description: "Full-stack web app for students to track expenses and manage budgets with goal-setting, planning tools, and expense tracking with real-time updates. Built using MVC architecture with Node.js/Express backend and MongoDB Atlas, designed for scalability and clean separation of concerns.",
      images: [
        { src: p2, alt: "P2 Image 1" },
        { src: p2_2, alt: "P2 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-2-2022",
      doc: "/P2_Documentation.pdf",
      docName: "Bence_Szabo_P2_Documentation",
      heightClass: "h-60 sm:h-68 lg:h-76",
      widthClass: "max-w-4xl",
    },
    {
      title: "Recruitment Process Automation (2021)",
      description: "First university project in collaboration with Danish companies (Novo Nordisk, DSB, Jyske Bank) where I gathered real-world HR requirements and delivered a proof-of-concept solution. Command-line application written in C that analyzes job applications, ranks candidates using keyword matching, and extracts relevant information automatically.",
      images: [
        { src: p1, alt: "P1 Image 1" },
        { src: p1_2, alt: "P1 Image 2" },
      ],
      github: "https://github.com/benceisonline/AAU-Project-1-2021",
      doc: "/P1_Documentation.pdf",
      docName: "Bence_Szabo_P1_Documentation",
      heightClass: "h-80 sm:h-[26rem] lg:h-[30rem]",
    },
  ];

  return (
    <div>
      <ScrollProgressBar />
      <main className="bg-white px-4 sm:px-8 md:px-16 lg:px-40">
        <section className="min-h-screen pt-4 sm:pt-6 pb-8 sm:pb-12">
          <Navigation />

          <HeroSection
            image={myface}
            name="Bence"
            subtitle="I am a Software Engineering student"
            description={[
              {
                period: "2024 - 2026",
                text: "I am enrolled in the MSc in Software Engineering program at Aalborg University Copenhagen, an education with a focus on developing software that is thoroughly prepared, tested and ready for use.",
              },
              {
                period: "2021 - 2024",
                text: "I completed my BSc in Civil Engineering Software at Aalborg University Copenhagen, an education with a focus on the problem-based learning model and real-world problem-solving.",
              },
            ]}
          />

          <FadeInOnScroll>
            <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center gap-8 sm:gap-12 md:gap-16 py-6">
            <SocialIcon
              href="https://www.linkedin.com/in/bencesz/"
              Icon={AiFillLinkedin}
              color="text-blue-600"
              hoverColor="text-blue-700"
            />
            <SocialIcon
              href="https://github.com/benceisonline"
              Icon={AiFillGithub}
              color="text-black"
              hoverColor="text-gray-700"
            />
          </div>
          </FadeInOnScroll>
        </section>

        {/* Work Experience Section */}
        <FadeInOnScroll>
          <section id="work" className="py-12 md:py-16">
            <SectionTitle id="work" icon="👨‍💻">
              Work Experience
            </SectionTitle>

            <FadeInOnScroll>
              <WorkExperienceItem
                title="Quality Assurance Student Worker at Playdead (2024 – )"
                images={[
                  { src: inside, alt: "Playdead Image 1" },
                  { src: limbo, alt: "Playdead Image 2" },
                ]}
              >
                {[
                  "I am currently a QA Student Worker at Playdead, the internationally renowned video game studio known for its atmospheric and artistic games, Limbo and Inside.",
                  "My role focuses on designing and implementing functional automated tests, as well as planning and executing both technical and user testing. I document bugs and issues thoroughly, while continuously expanding the QA team's capabilities with new tools and software solutions. Working in a fast-paced, collaborative environment, I rely on clear communication and a strong understanding of each team member's domain expertise. My work primarily involves Perforce, Unreal Engine, and C++ development.",
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
                  "I assisted in the Educado Project under the UN's Egalitarian Initiative (co-funded by the European Union), coordinating effective communication and software development efforts between Aalborg University, Saxion University, University of Minho, and University of Brasília.",
                  "Focusing on the teaching assistant side, I provided day-to-day technical support and Agile guidance to assist AAU students in their software development efforts. During this time, I worked with Google Cloud services, Docker microservices React web development, database management, and CI/CD optimisation and automation.",
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
                  "In collaboration with some friends, I spent two years running social media accounts (Facebook and Instagram) for an independent online entertainment page. During my time, I gained experience in producing engagement analytics and conducting small-scale advertisement campaigns.",
                  "The accounts featured humorous reflections on popular culture, consisting of a mix of original and curated content. Following popular culture, the account handles were changed numerous times but still managed to garner a large following amongst younger users. Shortly after surpassing 100.000 Followers and 10M+ monthly engagements in 2020, the site was sold and rebranded.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <WorkExperienceItem title="Service Worker at Rema 1000 (2016 - 2018)">
                {[
                  "Similarly to many other Danish teenagers, I spent my high school years working at a local grocery store. Here, I gained experience in customer service, and I learned to participate in creating a healthy work environment.",
                ]}
              </WorkExperienceItem>
            </FadeInOnScroll>
        </section>
        </FadeInOnScroll>

        {/* Skills Section */}
        <FadeInOnScroll>
          <section id="skills" className="py-12 md:py-16">
          <SectionTitle id="skills" icon="👨‍🏭">
            Skills
          </SectionTitle>

          <p className="text-base sm:text-lg md:text-md py-4 md:py-6 leading-8 text-gray-800 max-w-4xl">
            During my studies, I have gained a wide range of technical and soft
            skills. In addition to the courses, each semester proposed a new
            challenge in the form of a comprehensive project requiring us to
            apply and extend our theoretical knowledge in realistic scenarios.
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
          <section id="projects" className="py-12 md:py-16">
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

        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-linear-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md hover:scale-105 drop-shadow-lg transition-transform duration-500 text-sm md:text-base font-semibold"
        >
          ↑
        </a>
      </main>
    </div>
  );
}
