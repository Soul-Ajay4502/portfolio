// Skills Data
export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "AI/Tools",
    icon: "🤖",
    skills: [
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "Vercel AI SDK",
      "LangChain",
      "Cursor",
      "GitHub Copilot",
      "Claude Code",
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB"],
  },
];

// Projects Data
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  showDemo: boolean;
  showCode: boolean;
  // Which block the card renders in
  tier: "featured" | "main" | "early";
  // How the demo action behaves:
  //  - "site"  → external link to a live site
  //  - "video" → opens an inline video lightbox
  //  - "login" → links to a login-walled app; labelled honestly
  demoType?: "site" | "video" | "login";
  // Optional overrides for the demo action
  demoLabel?: string;
  demoNote?: string;
  // Proprietary product with no public screenshot (renders a branded placeholder)
  confidential?: boolean;
};

export const projectsData: Project[] = [
  {
    id: 11,
    title: "Raydian",
    description:
      "AI-powered project-execution platform. Core engineer on product architecture across Next.js, Node.js, and PostgreSQL — helped grow it from concept to public launch.",
    image: "",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "React",
      "LLM APIs",
    ],
    github: "",
    demo: "https://raydian.ai/",
    showDemo: true,
    showCode: false,
    tier: "featured",
    demoType: "site",
    demoLabel: "Visit Raydian",
    confidential: true,
  },
  {
    id: 10,
    title: "Pickbid",
    description:
      "A full-stack SaaS platform for running local cricket leagues end to end — design broadcast-quality player cards, host real-time auctions spectators follow live from any browser, track auto-updating leaderboards, record matches, and export or share squads via PDF and WhatsApp. Designed and built solo.",
    image: "https://pickbid.vercel.app/opengraph-image",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "NextAuth",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "",
    demo: "https://pickbid.vercel.app/",
    showDemo: true,
    showCode: false,
    tier: "featured",
    demoType: "site",
  },
  {
    id: 1,
    title: "The Auctioneer",
    description:
      "A full-stack auction platform with user authentication, Stripe payment integration, and admin dashboard for managing listings and users.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748452119/Screenshot_2025-05-28_223800_wiszbv.png",
    technologies: ["React.js", "Node Js", "MySQL", "Cloudinary", "Material UI"],
    github: "https://github.com/Soul-Ajay4502/the-auctioneer-web",
    demo: "https://res.cloudinary.com/dqx2hecxm/video/upload/v1748452222/auctioneer_jrwuzu.mp4",
    showDemo: true,
    showCode: true,
    tier: "main",
    demoType: "video",
  },
  {
    id: 5,
    title: "Daily Expense Tracker",
    description:
      "A daily finance tracking app with Firebase integration, allowing users to log and visualize income and expenses.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748450891/Screenshot_2025-05-28_221006_k547dq.png",
    technologies: ["Next.js", "MDX", "Prisma", "MySQL", "Tailwind"],
    github: "https://github.com/Soul-Ajay4502/Nextjs-expense-tracker",
    demo: "https://dailyexpensetracker-b5a15.firebaseapp.com/login",
    showDemo: true,
    showCode: true,
    tier: "main",
    demoType: "login",
    demoLabel: "Login required",
    demoNote: "Personal project — sign-in required to view the app.",
  },
  {
    id: 3,
    title: "Church Data Portal",
    description:
      "A church management platform with data analytics, attendance tracking, and Firebase-based user authentication.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748450893/Screenshot_2025-05-28_221017_x93k9s.png",
    technologies: [
      "React.js",
      "Material UI",
      "Node.js",
      "MySQL",
      "AWS",
      "Nginx",
    ],
    github: "https://github.com",
    demo: "https://ssck.in/login",
    showDemo: true,
    showCode: false,
    tier: "main",
    demoType: "login",
    demoLabel: "Login required",
    demoNote: "Client project — sign-in required to view the app.",
  },
  {
    id: 7,
    title: "AMC Reminder",
    description:
      "An Android-based reminder system for AMC tracking, enabling role-based login and notification assignments.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748452547/Screenshot_2025-05-28_223719_bs3s3n.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Soul-Ajay4502/Amc-Reminder-APP",
    demo: "https://res.cloudinary.com/dqx2hecxm/video/upload/v1748452204/amc_reminder_zxrj9r.mp4",
    showDemo: true,
    showCode: true,
    tier: "main",
    demoType: "video",
  },
  {
    id: 8,
    title: "Kanban",
    description:
      "A kanban-style task board with drag-and-drop support and task state management, built for real-time team collaboration.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748452663/Screenshot_2025-05-28_224729_t74yrr.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://res.cloudinary.com/dqx2hecxm/video/upload/v1748452203/kanban_ig42zt.mp4",
    showDemo: true,
    showCode: false,
    tier: "main",
    demoType: "video",
  },
  {
    id: 6,
    title: "Carbon Design Example",
    description:
      "A UI prototype demonstrating IBM Carbon Design integration, focusing on component consistency and responsive layout.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748450891/Screenshot_2025-05-28_221207_on5qn7.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Soul-Ajay4502/carbon-tutorial",
    demo: "https://example.com",
    showDemo: false,
    showCode: true,
    tier: "early",
    demoType: "site",
  },
  {
    id: 4,
    title: "Timer Website",
    description:
      "A clean and interactive countdown timer web app with responsive UI, suitable for productivity and reminders.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748450890/Screenshot_2025-05-28_221029_muallv.png",
    technologies: ["React", "OpenWeather API", "Mapbox", "CSS3"],
    github: "https://github.com/Soul-Ajay4502/timer-website",
    demo: "https://soul-ajay4502.github.io/timer-website/",
    showDemo: true,
    showCode: true,
    tier: "early",
    demoType: "site",
  },
  {
    id: 9,
    title: "Gym Static site",
    description: "A static web site developed for a gym.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748454563/Screenshot_2025-05-28_231853_d1d1i2.png",
    technologies: ["HTML", "tailwindcss"],
    github: "https://github.com/Soul-Ajay4502/gym-static-site/",
    demo: "http://fexin-gym.hacknetic.in/",
    showDemo: true,
    showCode: true,
    tier: "early",
    demoType: "site",
  },
  {
    id: 2,
    title: "Portfolio Website (old)",
    description:
      "Personal portfolio showcasing projects, skills, and experience, built for responsive performance and clean navigation.",
    image:
      "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748450891/Screenshot_2025-05-28_221059_ks1ejb.png",
    technologies: ["React", "Styled Components", "Styled System"],
    github: "https://github.com/Soul-Ajay4502/ajay-portfolio",
    demo: "https://soul-ajay4502.github.io/ajay-portfolio/",
    showDemo: true,
    showCode: true,
    tier: "early",
    demoType: "site",
  },
];

// Experience Data
export const experienceData = [
  {
    id: 4,
    position: "Software Engineer",
    company: "Raydian",
    duration: "Sep 2025 - Present",
    description:
      "Core engineer on Raydian, an AI-powered project execution engine. Contributed to Raydian's product architecture across Next.js, Node.js, and PostgreSQL, and helped grow the product from concept to public launch through parallel product and content work.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    location: "Kochi,Kerala,India",
  },
  {
    id: 1,
    position: "Software Engineer",
    company: "Beurokrat",
    duration: "Apr 2025 - Sep 2025",
    description:
      "Built and shipped web application features across the stack with Next.js, Node.js, and PostgreSQL — from Sequelize schema design to responsive shadcn/ui interfaces — with a focus on performance and data integrity.",
    technologies: [
      "Next.js",
      "Node.js",
      "shadcn/ui",
      "tailwindcss",
      "Sequelize ORM",
      "PostgreSQL",
      "Typescript",
      "supabase",
      "MinIo",
      "Zustand",
      "React 19",
      "Figma",
    ],
    location: "Kochi,Kerala,India",
  },
  {
    id: 2,
    position: "Jr. Software Engineer",
    company: "RoadE Labs Pvt.Ltd",
    duration: "Sep 2023 - Mar 2025",
    description:
      "Created responsive and interactive user interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs. Optimized applications for maximum speed and scalability.",
    technologies: [
      "React",
      "MySQL",
      "Material UI",
      "Bootstrap",
      "Figma",
      "React Native",
      "Redux Toolkit",
    ],
    location: "Kochi,Kerala,India",
  },
  {
    id: 3,
    position: "Software Engineer Intern",
    company: "RoadE Labs Pvt.Ltd",
    duration: "Apr 2023 - Aug 2023",
    description:
      "Assisted in developing web applications and learned modern development practices. Participated in code reviews and contributed to team projects. Gained experience in full-stack development and agile methodologies.",
    technologies: [
      "JavaScript",
      "React",
      "Express.js",
      "MySQL",
      "Git",
      "React Native",
      "Figma",
    ],
    location: "Kochi,Kerala,India",
  },
];
