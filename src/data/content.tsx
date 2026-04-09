import type { LandingPageContent, ResumeContent } from "../types/schema";

export const resumeContent: ResumeContent = {
  profile: {
    name: "Lucien Lu",
    headline: "Software Engineer",
    summary:
      "Software engineer focused on frontend-heavy full-stack systems, developer experience, and production reliability across React, Java, and cloud platforms.",
    location: "Melbourne, Victoria, Australia",
    contact: {
      email: "lucienlu2000@gmail.com",
      phone: "+61 468 435 818",
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/marutsuki/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.787.605-3.375-1.343-3.375-1.343-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341"
            />
          </svg>
        ),
      },
      {
        label: "Portfolio",
        href: "https://marutsuki.com/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.787.605-3.375-1.343-3.375-1.343-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341"
            />
          </svg>
        ),
      },
    ],
  },
  experience: [
    {
      company: "Aware Super",
      location: "Melbourne CBD, Victoria",
      role: "Software Developer",
      summary:
        "Improving member-facing performance and observability inside a large regulated platform.",
      technologies: [
        "React",
        "Angular",
        "RxJS",
        "Java Quarkus",
        "JavaFX",
        "Oracle SQL",
        "AWS",
        "Azure",
      ],
      startDate: "01 Jan 2026",
      endDate: "Present",
      highlights: [
        "Optimised API caching and network infrastructure, reducing the member portal initial load time after login redirect from about 15s to about 8s.",
        "Resolved 5 production incidents and delivered a performance monitoring dashboard within the first 2 months, doubling observability and helping engineers identify more than 10 user flows that missed the experience benchmark.",
      ],
    },
    {
      company: "Qoria",
      location: "Richmond, Victoria",
      role: "Software Engineer",
      summary:
        "Built delivery, testing, and automation improvements that cut release friction.",
      technologies: [
        "React",
        "Angular",
        "RxJS",
        "Java Spring",
        "Postgres",
        "Docker",
        "Terraform",
        "AWS",
      ],
      startDate: "01 Oct 2024",
      endDate: "01 Dec 2025",
      highlights: [
        "Engineered a smart partitioning system using Gradle and the JUnit Platform to create parallel isolated testing environments for a bottleneck test suite, reducing pipeline time from 45 minutes to 16 minutes.",
        "Scaffolded and implemented the first version of the CI/CD pipeline with SonarQube support using GCP Cloud Build, Cloud Deploy, Skaffold, and Terraform, reducing release overhead from more than 2 hours to under 5 minutes.",
        "Designed a compiler-safe, type-smart UI testing framework built around Playwright, which increased frontend test coverage from 0% to 81%.",
        "Developed about 20 Jira automations and Google App Scripts to streamline team processes, saving an estimated 8 hours of manual work per week.",
      ],
    },
    {
      company: "Thales Group",
      location: "Southbank, Victoria",
      role: "Graduate Software Engineer",
      summary:
        "Owned quality and performance work across a graphics-heavy product and its pipeline.",
      technologies: [
        "React",
        "Redux",
        "WebGL",
        "Java Spring",
        "Jenkins",
        "Docker",
      ],
      startDate: "01 Feb 2023",
      endDate: "01 Oct 2024",
      highlights: [
        "Migrated the Bitbucket, Jenkins, and Artifactory setup to a cloud-based GitLab solution, improving CI/CD scalability and cutting build times from 45 to 20 minutes through parallelised testing.",
        "Ensured every owned initiative and feature had above 90% integration test coverage and 0 SonarQube warnings, contributing to a low QA fail rate of 10%.",
        "Spearheaded a code quality initiative targeting over-engineered code and anti-patterns, reducing SonarQube warnings from 5 critical, 40 high, and 120 medium to 0 critical, 2 high, and 10 medium.",
        "Delivered an optimisation initiative that reduced application bundle size by more than 60%, sped up Docker image pull times by more than 50%, improved startup times by 25%, and removed more than 75 unused modules.",
        "Improved the average FPS of a CPU-bound WebGL application from 45 to 55 through bit-manipulation optimisation, resulting in a noticeably smoother experience.",
        "Ported and maintained the main WebGL graphics engine, which became the core dependency for more than 25 graphical features.",
      ],
    },
    {
      company: "National Australia Bank",
      location: "Melbourne CBD, Victoria",
      role: "Software Engineer",
      summary:
        "Strengthened batch-job integrations and automated test coverage for bank systems.",
      technologies: [
        "Java Spring",
        "JUnit",
        "Mockito",
        "Oracle SQL",
        "Jenkins",
        "qTest",
      ],
      startDate: "01 Jul 2021",
      endDate: "01 Apr 2022",
      highlights: [
        "Spearheaded a third-party integration for EOD batch job applications, expanding software capability and reducing manual workload by 1 hour per week.",
        "Raised automation test coverage from 50% to 95%, improving application reliability and reducing post-deployment defects.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      location: "Melbourne CBD, Victoria",
      role: "Data Engineer",
      summary:
        "Short-term data engineering work across JavaScript, SQL, and HTML/CSS tooling.",
      technologies: ["Node.js", "JavaScript", "SQL", "HTML/CSS"],
      startDate: "01 Jun 2021",
      endDate: "01 Jul 2021",
      highlights: [
        "Supported data engineering work across Node.js, JavaScript, SQL, and HTML/CSS.",
      ],
    },
    {
      company: "The University of Melbourne",
      location: "Parkville, Victoria",
      role: "Academic Tutor",
      summary:
        "Supported programming and computing fundamentals as a student-facing tutor.",
      technologies: ["Programming", "Computing", "Python"],
      startDate: "01 Jan 2021",
      endDate: "01 Mar 2021",
      highlights: [
        "Tutored students in programming and computing foundations using Python.",
      ],
    },
  ],
  education: [
    {
      institution: "The University of Melbourne",
      location: "Parkville, Victoria",
      qualification: "Bachelor of Science (Computing)",
      startDate: "01 Mar 2019",
      endDate: "01 Nov 2022",
      highlights: ["Dean's Honours List (Top 3%)"],
    },
  ],
  coreSkills: [
    {
      label: "Domain Specific (Thales - generic names due to NDA)",
      items: [
        "TypeScript libraries: graphics library, graphical label system, geodetic maths library",
        "Java libraries: Java-based message bus system, port of Haskell's Prelude into Java",
        "Components: React and Java-based simulator for ATC training, air traffic simulation data generator",
        "Other: HLR and HLT design, documentation generation",
      ],
    },
    {
      label: "Languages",
      items: [
        "Java (8-24)",
        "TypeScript (V8, Node.js, Bun)",
        "PostgreSQL",
        "Oracle SQL",
        "SQLite",
      ],
    },
    {
      label: "Frontend",
      items: [
        "React 18/19 and React Router",
        "Angular 21 and RxJS",
        "Zod",
        "Axios",
        "Tailwind CSS v3/v4",
        "Styled Components",
        "Redux for React",
        "NgRx for Angular",
      ],
    },
    {
      label: "Backend",
      items: [
        "Java (8-21) and Spring 5.3-7",
        "Spring Boot Security",
        "Spring Web MVC",
        "Spring Data JDBC and JPA",
        "Spring Cloud",
        "Spring Actuator",
        "Spring WebFlux",
        "Jackson",
        "Lombok",
        "Caffeine",
        "Guava",
        "Apache Commons",
        "SLF4J",
      ],
    },
    {
      label: "Testing",
      items: [
        "Playwright",
        "Jest",
        "Cucumber (TypeScript)",
        "Karma/Jasmine",
        "JUnit",
        "Cucumber",
        "Mockito",
        "Selenium",
      ],
    },
    {
      label: "Misc.",
      items: [
        "JavaFX/Swing with FXML",
        "Electron",
        "AWS",
        "Azure",
        "Terraform",
        "Kubernetes",
        "Gradle",
        "Jenkins",
        "GitLab CI",
        "Docker",
      ],
    },
    {
      label: "Concepts and Knowledge",
      items: [
        "Object-oriented design and programming",
        "Functional programming",
        "TDD and BDD",
        "RESTful APIs",
        "API gateways and load balancers",
        "Microservices and clustering",
        "Microfrontends and module federation",
        "BFF (backend for frontend)",
        "Distributed message queues",
        "Containerization with Docker and Podman",
        "Container orchestration with Kubernetes",
        "Passkeys and OTPs",
        "OAuth2 (ACF and PCKE flows)",
        "Stateless JWT",
        "Session management",
        "SSO/SAML",
        "Agile/SAFe",
        "CI/CD",
        "DevOps",
        "SDLC",
      ],
    },
  ],
  otherSkills: [
    {
      label: "Languages",
      items: ["Bash/Zsh", "Golang", "Python", "C/C++"],
    },
    {
      label: "Backends",
      items: ["Node.js and Express with Passport"],
    },
    {
      label: "Databases and Libraries",
      items: ["Prisma", "MongoDB", "CosmosDB"],
    },
    {
      label: "Build and Automation",
      items: ["Maven", "GitHub Actions", "Webpack", "Vite"],
    },
    {
      label: "Logging and Monitoring",
      items: ["Datadog", "Snyk", "SonarQube"],
    },
    {
      label: "Service Integrations",
      items: ["GreenID", "Twilio", "Boomi (iPaaS)"],
    },
  ],
};

export const landingContent: LandingPageContent = {
  hero: {
    portraitSrc: "/portrait-placeholder.svg",
    portraitAlt:
      "Placeholder portrait of Lucien Lu for the landing page splash",
    eyebrow: "Who I Am",
    title:
      "Lucien Lu builds frontend-heavy systems that stay fast, legible, and reliable.",
    summary:
      "I work across React, Java, and cloud platforms, with a bias toward better developer experience, cleaner delivery pipelines, and product surfaces that feel calm under pressure.",
    specialties: [
      "Strategic System Architecture & AI Integration",
      "Autonomous Agents & AI-Driven Orchestration",
      "CI/CD Lifecycle & Workflow Automation",
      "System Resilience, Performance & Observability",
    ],
  },
  navigationCues: [
    {
      label: "Read the quick story",
      description:
        "Scroll to the About Me section for a compact summary of what I do.",
      href: "#about-me",
    },
    {
      label: "Start at the top",
      description:
        "Jump back to the splash intro if you want the opening frame again.",
      href: "#splash",
    },
  ],
  about: {
    id: "about-me",
    eyebrow: "About Me",
    title: "A concise view of the work, patterns, and outcomes I care about.",
    summary:
      "I focus on building systems that minimize the friction between an idea and its realization. My work is centered on reducing the manual overhead; the 'toil' of modern engineering, allowing teams to focus on high-value problem solving while automation handles the routine.",
    paragraphs: [
      {
        label: "Deterministic = Automatable",
        content:
          "I see the future of engineering shifting away from manual implementation toward the orchestration of autonomous systems. My focus is on creating complex system architectures that require little to no 'babysitting,' where the implementation and infrastructure are designed to be self-sustaining, self-correcting and highly predictable.",
      },
      {
        label: "Fixing the Broken Record",
        content:
          "I am particularly driven by the challenge of removing manual checkpoints. Whether it’s automating complex deployment workflows, streamlining administrative hurdles, or building self-validating quality gates, I aim to create environments where 'manual work' is a rare exception rather than the daily rule.",
      },
      {
        label: "Square Peg, Round Hole",
        content:
          "I recognize that not every system is ready for total autonomy at least, not yet. In those environments, I focus on incremental wins: identifying the specific points of friction and building the automation that lets the team move faster. Whether it’s a fully agentic workflow or just a smarter set of scripts, the goal is always the same: to make the system work harder so the people don’t have to.",
      },
    ],
    skills: [
      "React and Redux, Angular and RxJS",
      "Tailwind CSS and typed UI composition",
      "Java Spring, Quarkus, and Jakarta EE",
      "Terraform, Kubernetes and Ansible",
      "Playwright, Jest, JUnit and Cucumber",
      "GitLab CI, Azure DevOps and Jenkins",
    ],
    quickLinks: [
      {
        label: "GitHub",
        href: "https://github.com/marutsuki/",
        icon: (
          <svg
            fill="#000000"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        label: "Portfolio",
        href: "https://marutsuki.com/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.787.605-3.375-1.343-3.375-1.343-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341"
            />
          </svg>
        ),
      },
    ],
    metrics: [
      {
        label: "Portal load time",
        value: "15s -> 8s",
        detail: "After login redirect improvements and infrastructure tuning.",
      },
      {
        label: "Release overhead",
        value: "2+ hrs -> 5 mins",
        detail:
          "CI/CD setup with SonarQube support and automated deployment steps.",
      },
      {
        label: "Frontend coverage",
        value: "0% -> 81%",
        detail: "Type-safe UI testing and coverage-focused delivery practices.",
      },
      {
        label: "Manual work saved",
        value: "8 hrs / week",
        detail: "Through automation scripts and process streamlining.",
      },
    ],
    cards: [
      {
        eyebrow: "What I build",
        title: "Product-facing systems with a strong frontend core.",
        summary:
          "My background centres on React, Java, and cloud-backed application surfaces that need to remain responsive, maintainable, and easy for teams to extend.",
        points: [
          "Frontend-heavy full-stack delivery across React, Angular, and Java.",
          "Production reliability work that keeps user journeys stable under load.",
          "Clear, typed implementations that make future changes safer.",
        ],
      },
      {
        eyebrow: "How I move teams forward",
        title:
          "Performance, automation, and delivery improvements that remove friction.",
        summary:
          "The most satisfying wins in my resume are the ones that compound for the rest of the team: faster pipelines, better observability, and fewer manual steps.",
        points: [
          "Reduced a key portal load time from about 15s to about 8s.",
          "Cut release overhead from over 2 hours to under 5 minutes.",
          "Lifted frontend test coverage from 0% to 81%.",
        ],
      },
      {
        eyebrow: "What I care about",
        title: "Practical engineering with enough structure to scale.",
        summary:
          "I value systems that are calm to operate, straightforward to change, and easy to explain to the next engineer who opens the file.",
        points: [
          "Developer experience that removes repeated manual effort.",
          "Strong testing habits and low-noise quality gates.",
          "Mentorship-minded communication, including tutoring experience.",
        ],
      },
    ],
  },
  experience: {
    id: "experience",
    eyebrow: "Experience",
    title: "A timeline of roles, systems work, and measurable outcomes.",
    summary:
      "This section traces the career path behind the resume: member portals, release pipelines, WebGL tooling, bank integrations, and tutoring work that all point toward practical engineering.",
    shortcut: {
      label: "Jump to experience",
      description:
        "Skip directly to the timeline of roles, outcomes, and supporting details.",
      href: "#experience",
    },
    entries: resumeContent.experience,
  },
};
