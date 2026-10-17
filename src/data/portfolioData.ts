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

export interface SkillCategoryGroup {
  categoryTitle: string;
  categoryDescription: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    categoryTitle: "Programming and Development",
    categoryDescription: "Core programming languages and foundational web technologies",
    skills: [
      { name: "C", icon: "Code2" },
      { name: "Python", icon: "Terminal" },
      { name: "HTML", icon: "Globe" },
      { name: "CSS", icon: "Palette" },
    ],
  },
  {
    categoryTitle: "Tools",
    categoryDescription: "Version control platforms and essential productivity suites",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Microsoft Excel", icon: "Table" },
      { name: "Microsoft Word", icon: "FileText" },
      { name: "Microsoft PowerPoint", icon: "Presentation" },
    ],
  },
  {
    categoryTitle: "Professional Strengths",
    categoryDescription: "Core analytical, collaborative, and communicative competencies",
    skills: [
      { name: "Analytical and Critical Thinking", icon: "Cpu" },
      { name: "Problem Solving", icon: "Binary" },
      { name: "Leadership and Communication", icon: "MessageSquare" },
      { name: "Teamwork and Collaboration", icon: "Users" },
      { name: "Time Management", icon: "Clock" },
      { name: "Willingness to Learn", icon: "Sparkles" },
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
