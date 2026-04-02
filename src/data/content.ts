import type {
  LandingPageContent,
  ResumeContent,
} from '../types/schema'

export const resumeContent: ResumeContent = {
  profile: {
    name: 'Lucien Lu',
    headline: 'Software Engineer',
    summary:
      'Software engineer focused on frontend-heavy full-stack systems, developer experience, and production reliability across React, Java, and cloud platforms.',
    location: 'Melbourne, Victoria, Australia',
    contact: '+61 468 435 818 | lucienlu2000@gmail.com',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/marutsuki/',
      },
      {
        label: 'Portfolio',
        href: 'https://marutsuki.com/',
      },
    ],
  },
  experience: [
    {
      company: 'Aware Super',
      location: 'Melbourne CBD, Victoria',
      role: 'Software Developer',
      technologies: [
        'React',
        'Angular',
        'RxJS',
        'Java Quarkus',
        'JavaFX',
        'Oracle SQL',
        'AWS',
        'Azure',
      ],
      startDate: '01 Jan 2026',
      endDate: 'Present',
      highlights: [
        'Optimised API caching and network infrastructure, reducing the member portal initial load time after login redirect from about 15s to about 8s.',
        'Resolved 5 production incidents and delivered a performance monitoring dashboard within the first 2 months, doubling observability and helping engineers identify more than 10 user flows that missed the experience benchmark.',
      ],
    },
    {
      company: 'Qoria',
      location: 'Richmond, Victoria',
      role: 'Software Engineer',
      technologies: [
        'React',
        'Angular',
        'RxJS',
        'Java Spring',
        'Postgres',
        'Docker',
        'Terraform',
        'AWS',
      ],
      startDate: '01 Oct 2024',
      endDate: '01 Dec 2025',
      highlights: [
        'Engineered a smart partitioning system using Gradle and the JUnit Platform to create parallel isolated testing environments for a bottleneck test suite, reducing pipeline time from 45 minutes to 16 minutes.',
        'Scaffolded and implemented the first version of the CI/CD pipeline with SonarQube support using GCP Cloud Build, Cloud Deploy, Skaffold, and Terraform, reducing release overhead from more than 2 hours to under 5 minutes.',
        'Designed a compiler-safe, type-smart UI testing framework built around Playwright, which increased frontend test coverage from 0% to 81%.',
        'Developed about 20 Jira automations and Google App Scripts to streamline team processes, saving an estimated 8 hours of manual work per week.',
      ],
    },
    {
      company: 'Thales Group',
      location: 'Southbank, Victoria',
      role: 'Graduate Software Engineer',
      technologies: [
        'React',
        'Redux',
        'WebGL',
        'Java Spring',
        'Jenkins',
        'Docker',
      ],
      startDate: '01 Feb 2023',
      endDate: '01 Oct 2024',
      highlights: [
        'Migrated the Bitbucket, Jenkins, and Artifactory setup to a cloud-based GitLab solution, improving CI/CD scalability and cutting build times from 45 to 20 minutes through parallelised testing.',
        'Ensured every owned initiative and feature had above 90% integration test coverage and 0 SonarQube warnings, contributing to a low QA fail rate of 10%.',
        'Spearheaded a code quality initiative targeting over-engineered code and anti-patterns, reducing SonarQube warnings from 5 critical, 40 high, and 120 medium to 0 critical, 2 high, and 10 medium.',
        'Delivered an optimisation initiative that reduced application bundle size by more than 60%, sped up Docker image pull times by more than 50%, improved startup times by 25%, and removed more than 75 unused modules.',
        'Improved the average FPS of a CPU-bound WebGL application from 45 to 55 through bit-manipulation optimisation, resulting in a noticeably smoother experience.',
        'Ported and maintained the main WebGL graphics engine, which became the core dependency for more than 25 graphical features.',
      ],
    },
    {
      company: 'National Australia Bank',
      location: 'Melbourne CBD, Victoria',
      role: 'Software Engineer',
      technologies: [
        'Java Spring',
        'JUnit',
        'Mockito',
        'Oracle SQL',
        'Jenkins',
        'qTest',
      ],
      startDate: '01 Jul 2021',
      endDate: '01 Apr 2022',
      highlights: [
        'Spearheaded a third-party integration for EOD batch job applications, expanding software capability and reducing manual workload by 1 hour per week.',
        'Raised automation test coverage from 50% to 95%, improving application reliability and reducing post-deployment defects.',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      location: 'Melbourne CBD, Victoria',
      role: 'Data Engineer',
      technologies: ['Node.js', 'JavaScript', 'SQL', 'HTML/CSS'],
      startDate: '01 Jun 2021',
      endDate: '01 Jul 2021',
      highlights: [
        'Supported data engineering work across Node.js, JavaScript, SQL, and HTML/CSS.',
      ],
    },
    {
      company: 'The University of Melbourne',
      location: 'Parkville, Victoria',
      role: 'Academic Tutor',
      technologies: ['Programming', 'Computing', 'Python'],
      startDate: '01 Jan 2021',
      endDate: '01 Mar 2021',
      highlights: [
        'Tutored students in programming and computing foundations using Python.',
      ],
    },
  ],
  education: [
    {
      institution: 'The University of Melbourne',
      location: 'Parkville, Victoria',
      qualification: 'Bachelor of Science (Computing)',
      startDate: '01 Mar 2019',
      endDate: '01 Nov 2022',
      highlights: ['Dean\'s Honours List (Top 3%)'],
    },
  ],
  coreSkills: [
    {
      label: 'Domain Specific (Thales - generic names due to NDA)',
      items: [
        'TypeScript libraries: graphics library, graphical label system, geodetic maths library',
        'Java libraries: Java-based message bus system, port of Haskell\'s Prelude into Java',
        'Components: React and Java-based simulator for ATC training, air traffic simulation data generator',
        'Other: HLR and HLT design, documentation generation',
      ],
    },
    {
      label: 'Languages',
      items: [
        'Java (8-24)',
        'TypeScript (V8, Node.js, Bun)',
        'PostgreSQL',
        'Oracle SQL',
        'SQLite',
      ],
    },
    {
      label: 'Frontend',
      items: [
        'React 18/19 and React Router',
        'Angular 21 and RxJS',
        'Zod',
        'Axios',
        'Tailwind CSS v3/v4',
        'Styled Components',
        'Redux for React',
        'NgRx for Angular',
      ],
    },
    {
      label: 'Backend',
      items: [
        'Java (8-21) and Spring 5.3-7',
        'Spring Boot Security',
        'Spring Web MVC',
        'Spring Data JDBC and JPA',
        'Spring Cloud',
        'Spring Actuator',
        'Spring WebFlux',
        'Jackson',
        'Lombok',
        'Caffeine',
        'Guava',
        'Apache Commons',
        'SLF4J',
      ],
    },
    {
      label: 'Testing',
      items: [
        'Playwright',
        'Jest',
        'Cucumber (TypeScript)',
        'Karma/Jasmine',
        'JUnit',
        'Cucumber',
        'Mockito',
        'Selenium',
      ],
    },
    {
      label: 'Misc.',
      items: [
        'JavaFX/Swing with FXML',
        'Electron',
        'AWS',
        'Azure',
        'Terraform',
        'Kubernetes',
        'Gradle',
        'Jenkins',
        'GitLab CI',
        'Docker',
      ],
    },
    {
      label: 'Concepts and Knowledge',
      items: [
        'Object-oriented design and programming',
        'Functional programming',
        'TDD and BDD',
        'RESTful APIs',
        'API gateways and load balancers',
        'Microservices and clustering',
        'Microfrontends and module federation',
        'BFF (backend for frontend)',
        'Distributed message queues',
        'Containerization with Docker and Podman',
        'Container orchestration with Kubernetes',
        'Passkeys and OTPs',
        'OAuth2 (ACF and PCKE flows)',
        'Stateless JWT',
        'Session management',
        'SSO/SAML',
        'Agile/SAFe',
        'CI/CD',
        'DevOps',
        'SDLC',
      ],
    },
  ],
  otherSkills: [
    {
      label: 'Languages',
      items: ['Bash/Zsh', 'Golang', 'Python', 'C/C++'],
    },
    {
      label: 'Backends',
      items: ['Node.js and Express with Passport'],
    },
    {
      label: 'Databases and Libraries',
      items: ['Prisma', 'MongoDB', 'CosmosDB'],
    },
    {
      label: 'Build and Automation',
      items: ['Maven', 'GitHub Actions', 'Webpack', 'Vite'],
    },
    {
      label: 'Logging and Monitoring',
      items: ['Datadog', 'Snyk', 'SonarQube'],
    },
    {
      label: 'Service Integrations',
      items: ['GreenID', 'Twilio', 'Boomi (iPaaS)'],
    },
  ],
}

export const landingContent: LandingPageContent = {
  hero: {
    portraitSrc: '/portrait-placeholder.png',
    portraitAlt: 'Placeholder portrait of Lucien Lu for the landing page splash',
    eyebrow: 'Who I Am',
    title: 'Lucien Lu builds frontend-heavy systems that stay fast, legible, and reliable.',
    summary:
      'I work across React, Java, and cloud platforms, with a bias toward better developer experience, cleaner delivery pipelines, and product surfaces that feel calm under pressure.',
    specialties: [
      'Frontend-heavy full-stack engineering',
      'Performance and observability improvements',
      'Test automation and delivery tooling',
    ],
  },
  navigationCues: [
    {
      label: 'Read the quick story',
      description: 'Scroll to the About Me section for a compact summary of what I do.',
      href: '#about',
    },
    {
      label: 'Start at the top',
      description: 'Jump back to the splash intro if you want the opening frame again.',
      href: '#splash',
    },
  ],
  about: {
    eyebrow: 'About Me',
    title: 'A concise view of the work, patterns, and outcomes I care about.',
    summary:
      'The cards below condense the strongest parts of the resume into a memorable first read: what I build, how I improve delivery, and where I invest my energy when teams need momentum.',
    cards: [
      {
        eyebrow: 'What I build',
        title: 'Product-facing systems with a strong frontend core.',
        summary:
          'My background centres on React, Java, and cloud-backed application surfaces that need to remain responsive, maintainable, and easy for teams to extend.',
        points: [
          'Frontend-heavy full-stack delivery across React, Angular, and Java.',
          'Production reliability work that keeps user journeys stable under load.',
          'Clear, typed implementations that make future changes safer.',
        ],
      },
      {
        eyebrow: 'How I move teams forward',
        title: 'Performance, automation, and delivery improvements that remove friction.',
        summary:
          'The most satisfying wins in my resume are the ones that compound for the rest of the team: faster pipelines, better observability, and fewer manual steps.',
        points: [
          'Reduced a key portal load time from about 15s to about 8s.',
          'Cut release overhead from over 2 hours to under 5 minutes.',
          'Lifted frontend test coverage from 0% to 81%.',
        ],
      },
      {
        eyebrow: 'What I care about',
        title: 'Practical engineering with enough structure to scale.',
        summary:
          'I value systems that are calm to operate, straightforward to change, and easy to explain to the next engineer who opens the file.',
        points: [
          'Developer experience that removes repeated manual effort.',
          'Strong testing habits and low-noise quality gates.',
          'Mentorship-minded communication, including tutoring experience.',
        ],
      },
    ],
  },
}
