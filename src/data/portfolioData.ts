import { EducationItem, ActivityItem, Project } from '../types';

export const personalInfo = {
  fullName: "Ifta Abir",
  shortName: "Ifta Abir",
  brandLogo: "ABIR.",
  role: "Software Engineering Student",
  headline: "Software Engineering Student | Aspiring Data Science Engineer",
  location: "Dhaka, Bangladesh",
  university: "Daffodil International University",
  degree: "B.Sc. in Software Engineering",
  email: "ift2abir@gmail.com",
  phone: "01610049750",
  whatsappUrl: "https://wa.me/8801610049750",
  github: "https://github.com/ift2abir",
  linkedin: "https://www.linkedin.com/in/ift2abir",
  portfolioRepo: "https://github.com/ift2abir/personal-portfolio",
  cvPath: "/files/abir-cv.pdf",
  heroImage: "/images/abir-hero-transparent.png",
  contactCtaImage: "/images/abir-contact-orange.jpg",
  contactCtaTransparent: "/images/abir-contact-transparent.png",
  summary:
    "I am a Software Engineering student at Daffodil International University with a strong interest in software development, data science, and web development. I enjoy learning new technologies, solving algorithmic problems, and building practical applications that solve real-world problems.",
  interests: [
    "Software Development",
    "Data Science",
    "Web Development",
    "Programming & Problem Solving",
  ],
};

export interface SkillItem {
  name: string;
  icon: string;
  description?: string;
}

export interface SkillCategoryGroup {
  categoryTitle: string;
  categoryDescription: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    categoryTitle: "Programming and Development",
    categoryDescription: "Core programming languages, foundational web technologies, and modern AI workflows",
    skills: [
      {
        name: "C",
        icon: "Code2",
        description: "Structured programming, pointers, memory concepts, and algorithmic foundations.",
      },
      {
        name: "Python",
        icon: "Terminal",
        description: "Scripting, algorithmic problem solving, data structures, and automation.",
      },
      {
        name: "HTML",
        icon: "Globe",
        description: "Semantic web structuring, modern HTML5 elements, and accessibility standards.",
      },
      {
        name: "CSS",
        icon: "Palette",
        description: "Responsive layouts, Flexbox, CSS Grid, custom themes, and clean transitions.",
      },
      {
        name: "Prompt Engineering",
        icon: "Wand2",
        description: "Designing clear, structured, and effective prompts to guide AI models toward useful outputs.",
      },
      {
        name: "Vibe Coding",
        icon: "Flame",
        description: "Building and iterating on applications using AI-assisted coding tools through natural-language instructions, testing, and refinement.",
      },
    ],
  },
  {
    categoryTitle: "Tools",
    categoryDescription: "Version control platforms and essential productivity suites",
    skills: [
      {
        name: "Git",
        icon: "GitBranch",
        description: "Distributed version control, branch management, and collaborative workflows.",
      },
      {
        name: "GitHub",
        icon: "Github",
        description: "Remote repository hosting, code reviews, and open-source collaboration.",
      },
      {
        name: "Microsoft Excel",
        icon: "Table",
        description: "Spreadsheet modeling, data analysis formulas, and structured tables.",
      },
      {
        name: "Microsoft Word",
        icon: "FileText",
        description: "Technical documentation, academic reports, and structured formatting.",
      },
      {
        name: "Microsoft PowerPoint",
        icon: "Presentation",
        description: "Technical presentations, slide decks, and project demonstrations.",
      },
    ],
  },
  {
    categoryTitle: "Professional Strengths",
    categoryDescription: "Core analytical, collaborative, and communicative competencies",
    skills: [
      {
        name: "Analytical and Critical Thinking",
        icon: "Cpu",
        description: "Logical evaluation, structured reasoning, and requirement analysis.",
      },
      {
        name: "Problem Solving",
        icon: "Binary",
        description: "Algorithmic thinking, methodical debugging, and edge-case mitigation.",
      },
      {
        name: "Leadership and Communication",
        icon: "MessageSquare",
        description: "Clear technical expression, team alignment, and collaborative guidance.",
      },
      {
        name: "Teamwork and Collaboration",
        icon: "Users",
        description: "Peer programming, active listening, and cross-functional cooperation.",
      },
      {
        name: "Time Management",
        icon: "Clock",
        description: "Prioritization, milestone planning, and reliable deadline execution.",
      },
      {
        name: "Willingness to Learn",
        icon: "Sparkles",
        description: "Continuous exploration of emerging developer tools, frameworks, and AI workflows.",
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase my background, skills, academic journey, and development interests. Focused on a clean interface, responsive layouts, and a professional presentation of my work.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/ift2abir/personal-portfolio",
    status: "completed",
    featured: true,
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "2025 – Present",
    status: "Undergraduate",
    description:
      "Studying software engineering fundamentals, programming, data structures, mathematics, and web technologies while exploring data science.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Govt. Shaheed Suhrawardy College, Dhaka",
    period: "2024",
    grade: "GPA: 4.50 / 5.00",
    description:
      "Completed higher secondary education in Science, developing a foundation in mathematics and scientific reasoning.",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Kishoreganj Zila Ideal School, Kishoreganj",
    period: "2022",
    grade: "GPA: 5.00 / 5.00",
    description:
      "Completed secondary education in Science with a GPA of 5.00 out of 5.00.",
  },
];

export const activitiesList: ActivityItem[] = [
  {
    role: "Contest Volunteer — CodeTrap & BreakOut",
    organization: "Algorithm Programming Contest",
    description:
      "Volunteered at campus programming competitions, supporting event coordination, participant assistance, logistics, and on-ground operations.",
    tags: ["Event Logistics", "Coordination", "Volunteer"],
    type: "volunteer",
  },
];
