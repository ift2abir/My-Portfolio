/**
 * Smart Local AI Knowledge-Base Responder for Ask Abir AI.
 *
 * Provides instant, highly accurate, and conversational persona responses
 * built from Abir's complete, verified portfolio knowledge base.
 *
 * Used as an automatic, 100% reliable fallback whenever external AI APIs
 * are offline, unconfigured, rate-limited, or encounter token/credential errors.
 */

interface KnowledgeTopic {
  id: string;
  keywords: string[];
  generate: () => string;
}

const TOPICS: KnowledgeTopic[] = [
  // 1. Contact channels
  {
    id: 'contact',
    keywords: [
      'contact',
      'reach',
      'email',
      'mail',
      'whatsapp',
      'phone',
      'mobile',
      'number',
      'call',
      'hire',
      'collaborate',
      'collaboration',
      'touch',
      'message',
      'linkedin',
      'social',
      'socials',
    ],
    generate: () => `### 📬 Official Contact Channels for Ifta Abir

You can connect with **Ifta Abir** directly through:

* 🟢 **WhatsApp (Fastest & Preferred):** [Chat on WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\`)
* ✉️ **Email:** [ift2abir@gmail.com](mailto:ift2abir@gmail.com)
* 💼 **LinkedIn:** [linkedin.com/in/ift2abir](https://www.linkedin.com/in/ift2abir)
* 🐙 **GitHub:** [github.com/ift2abir](https://github.com/ift2abir)
* 📄 **Resume / CV:** Available directly at [/files/abir-cv.pdf](/files/abir-cv.pdf)

Feel free to reach out for software engineering projects, data science discussions, or technical collaborations!`,
  },

  // 2. Resume / CV
  {
    id: 'cv',
    keywords: ['cv', 'resume', 'curriculum vitae', 'pdf', 'download cv', 'download resume'],
    generate: () => `### 📄 Ifta Abir's Resume / CV

You can view and download Abir's official CV directly:
* 📥 **Download Link:** [/files/abir-cv.pdf](/files/abir-cv.pdf)
* Contains verified details on his B.Sc. studies at Daffodil International University, academic milestones, technical skill set, and projects.
* For immediate questions or inquiries, reach him on [WhatsApp](https://wa.me/8801610049750) or email [ift2abir@gmail.com](mailto:ift2abir@gmail.com).`,
  },

  // 3. Education - Specific: DIU / University
  {
    id: 'education_university',
    keywords: [
      'daffodil',
      'diu',
      'university',
      'varsity',
      'undergraduate',
      'bsc',
      'b.sc',
      'bachelor',
    ],
    generate: () => `### 🎓 University Education (Daffodil International University)

* **Degree:** Bachelor of Science (B.Sc.) in Software Engineering
* **Institution:** Daffodil International University (DIU), Dhaka, Bangladesh
* **Timeline:** 2025 – Present (Undergraduate Student)
* **Academic Focus:**
  * Software engineering principles & clean architecture
  * Algorithmic problem-solving & data structures
  * Computational mathematics
  * Web engineering & modern application development
  * Applied data science and analytics exploration`,
  },

  // 4. Education - Specific: College / HSC
  {
    id: 'education_college',
    keywords: [
      'suhrawardy',
      'college',
      'hsc',
      'higher secondary',
      '12th',
      'intermediate',
      'govt shaheed',
    ],
    generate: () => `### 🏛️ Higher Secondary Certificate (HSC) — Science

* **Institution:** Govt. Shaheed Suhrawardy College, Dhaka, Bangladesh
* **Passing Year:** 2024
* **Academic Result:** **GPA 4.50 / 5.00**
* **Field of Study:** Science (Physics, Chemistry, Advanced Mathematics)`,
  },

  // 5. Education - Specific: School / SSC
  {
    id: 'education_school',
    keywords: [
      'kishoreganj',
      'zila ideal',
      'school',
      'ssc',
      'secondary school',
      '10th',
      'matric',
    ],
    generate: () => `### 🏫 Secondary School Certificate (SSC) — Science

* **Institution:** Kishoreganj Zila Ideal School, Kishoreganj, Bangladesh
* **Passing Year:** 2022
* **Academic Result:** **GPA 5.00 / 5.00 (Golden / Perfect GPA)**
* **Field of Study:** Science & Mathematics Foundation`,
  },

  // 6. Education - General overview
  {
    id: 'education_general',
    keywords: [
      'education',
      'study',
      'studying',
      'academic',
      'academics',
      'result',
      'results',
      'gpa',
      'grade',
      'grades',
      'qualification',
      'qualifications',
    ],
    generate: () => `### 🎓 Ifta Abir's Academic Journey

1. **B.Sc. in Software Engineering**
   * **Institution:** Daffodil International University (DIU), Dhaka
   * **Timeline:** 2025 – Present (Undergraduate)
   * **Focus:** Software engineering foundations, data structures, algorithms, web technologies, and data science exploration.

2. **Higher Secondary Certificate (HSC) — Science**
   * **Institution:** Govt. Shaheed Suhrawardy College, Dhaka
   * **Year:** 2024
   * **Result:** **GPA 4.50 / 5.00**

3. **Secondary School Certificate (SSC) — Science**
   * **Institution:** Kishoreganj Zila Ideal School, Kishoreganj
   * **Year:** 2022
   * **Result:** **GPA 5.00 / 5.00 (Golden / Perfect GPA)**`,
  },

  // 7. Technical Skills & Tech Stack
  {
    id: 'skills',
    keywords: [
      'skill',
      'skills',
      'tech stack',
      'technology',
      'technologies',
      'programming',
      'language',
      'languages',
      'python',
      'c language',
      'react',
      'typescript',
      'javascript',
      'tailwind',
      'html',
      'css',
      'git',
      'github',
      'excel',
      'frontend',
      'tools',
      'strength',
      'strengths',
    ],
    generate: () => `### 💻 Verified Technical Skills & Tools

* **Programming Languages:**
  * **C:** Algorithmic problem-solving, procedural coding, memory & foundational CS concepts.
  * **Python:** Data structures, scripting, algorithm design, and applied data science exploration.

* **Web Technologies & Frameworks:**
  * **Front-End:** React, TypeScript, HTML5, CSS3
  * **Styling & Tooling:** Tailwind CSS, Vite, PostCSS

* **Developer & Productivity Tools:**
  * **Version Control:** Git, GitHub
  * **Office Suites:** Microsoft Excel, Microsoft Word, Microsoft PowerPoint

* **Professional Strengths:**
  * Analytical and critical thinking
  * Algorithmic problem-solving & clean structure
  * Leadership, communication, and cross-functional teamwork
  * High curiosity and continuous learning drive`,
  },

  // 8. Projects
  {
    id: 'projects',
    keywords: [
      'project',
      'projects',
      'portfolio',
      'work',
      'built',
      'developed',
      'application',
      'apps',
      'website',
      'repo',
      'repository',
    ],
    generate: () => `### 🚀 Verified Projects

#### **Personal Portfolio Website**
* **Role:** Creator & Developer
* **Overview:** Designed and developed a cinematic, high-performance personal portfolio website inspired by the Persona visual system (dark canvas with bold orange accents). Features academic milestones, verified skills, and an interactive AI assistant.
* **Tech Stack:** React, TypeScript, Tailwind CSS, Vite
* **GitHub Repository:** [github.com/ift2abir/personal-portfolio](https://github.com/ift2abir/personal-portfolio)
* **Status:** Active & Maintained

Abir is continuously building and expanding his software engineering and data science project portfolio. Check his [GitHub profile](https://github.com/ift2abir) for his latest open-source commits!`,
  },

  // 9. Career Goals & Aspirations
  {
    id: 'career',
    keywords: [
      'career',
      'goal',
      'goals',
      'future',
      'vision',
      'aim',
      'ambition',
      'data science',
      'data science engineer',
      'software engineer',
      'philosophy',
      'aspiration',
    ],
    generate: () => `### 🎯 Career Goals & Engineering Philosophy

* **Target Roles:** Software Engineering & Aspiring **Data Science Engineer**.
* **Core Philosophy:**
  > *"A practical app solves a real problem by turning ideas into simple, effective solutions. I am continuously learning and developing my skills to create meaningful applications."*
* **Current Focus Areas:**
  * Mastering computer science foundations & algorithmic problem-solving.
  * Writing clean, maintainable, scalable code in modern TypeScript and Python.
  * Deepening knowledge in data structures, data analysis, and predictive modeling.
  * Building real-world web applications that deliver measurable value.`,
  },

  // 10. Extracurricular & Volunteer Activities
  {
    id: 'activities',
    keywords: [
      'volunteer',
      'volunteering',
      'contest',
      'codetrap',
      'breakout',
      'competition',
      'extracurricular',
      'event',
      'events',
      'activity',
      'activities',
    ],
    generate: () => `### 🌟 Extracurricular & Leadership Activities

* **Contest Volunteer — CodeTrap & BreakOut (Algorithm Programming Contest)**
  * **Role:** Volunteer & Logistics Coordinator
  * **Organization:** Campus Algorithm Programming Contest at Daffodil International University
  * **Contributions:** Coordinated on-campus algorithmic contests, supported participants, managed logistics, and facilitated smooth contest operations.`,
  },

  // 11. Profile / Introduction / Who is Abir
  {
    id: 'bio',
    keywords: [
      'who is abir',
      'who is ifta',
      'about abir',
      'tell me about abir',
      'who are you',
      'introduction',
      'bio',
      'profile',
      'summary',
      'background',
    ],
    generate: () => `### 👨‍💻 About Md. Ifta Khirul Haque Abir ("Ifta Abir")

**Ifta Abir** is a Software Engineering undergraduate at **Daffodil International University (DIU)** in Dhaka, Bangladesh, and an **Aspiring Data Science Engineer**.

* 📍 **Location:** Dhaka, Bangladesh
* 🎓 **Education:** B.Sc. in Software Engineering at DIU (2025 – Present)
* 💻 **Primary Technologies:** Python, C, React, TypeScript, Tailwind CSS, Git/GitHub
* 🏆 **Academic Milestones:**
  * SSC in Science: GPA 5.00 / 5.00 (Golden GPA) — Kishoreganj Zila Ideal School
  * HSC in Science: GPA 4.50 / 5.00 — Govt. Shaheed Suhrawardy College
* 🎯 **Aspirations:** Creating practical, scalable software and mastering applied data science.
* 📬 **Direct Contact:** [WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\`) | Email: [ift2abir@gmail.com](mailto:ift2abir@gmail.com)`,
  },
];

/**
 * Generates an accurate, persona-aligned reply from Abir's portfolio knowledge base.
 */
export function generateLocalKnowledgeReply(message: string): string {
  const clean = message.toLowerCase().trim();

  // 1. Check for simple greetings
  const isGreeting =
    /^(hi|hello|hey|salam|assalam|assalamu alaikum|good morning|good afternoon|good evening|yo|howdy)\b/i.test(
      clean
    ) || clean === 'hi' || clean === 'hello';

  // 2. Score and find matching topics
  const matchedTopics: KnowledgeTopic[] = [];

  for (const topic of TOPICS) {
    let matched = false;
    for (const kw of topic.keywords) {
      if (clean.includes(kw)) {
        matched = true;
        break;
      }
    }
    if (matched) {
      matchedTopics.push(topic);
    }
  }

  // If greeting with no other specific topic, return friendly welcome
  if (isGreeting && matchedTopics.length <= 1) {
    return `Hello! I'm **Ask Abir AI**, Ifta Abir's personal portfolio assistant.

I can provide verified information on Abir's:
* 🎓 **Education** (B.Sc. at Daffodil International University, HSC at Govt. Shaheed Suhrawardy College, SSC at Kishoreganj Zila Ideal School)
* 💻 **Technical Skills & Tools** (C, Python, React, TypeScript, Tailwind CSS, Git)
* 🚀 **Projects** (Personal Portfolio Website)
* 🎯 **Career Goals** (Software Engineering & Data Science)
* 📬 **Contact Details** (WhatsApp & Email)

What would you like to know about Abir today?`;
  }

  // If specific topics matched
  if (matchedTopics.length > 0) {
    // Deduplicate overlapping education topics if education_general is already present
    const hasGeneralEdu = matchedTopics.some((t) => t.id === 'education_general');
    const filteredTopics = hasGeneralEdu
      ? matchedTopics.filter(
          (t) =>
            t.id !== 'education_university' &&
            t.id !== 'education_college' &&
            t.id !== 'education_school'
        )
      : matchedTopics;

    // Take up to 2 most relevant matched topics to keep the answer comprehensive yet focused
    const selected = filteredTopics.slice(0, 2);
    const sections = selected.map((t) => t.generate());

    return sections.join('\n\n---\n\n');
  }

  // 3. Fallback: Intelligent conversational answer with full contact pathways
  return `I am **Ask Abir AI**, Ifta Abir's personal portfolio assistant.

While I specialize in verified facts regarding Abir's software engineering background, here is a quick overview of what you can ask me:
* **Education:** Currently pursuing a B.Sc. in Software Engineering at **Daffodil International University (DIU)** (2025 – Present). Previously completed HSC at **Govt. Shaheed Suhrawardy College** (GPA 4.50) and SSC at **Kishoreganj Zila Ideal School** (Golden GPA 5.00).
* **Technical Skills:** C, Python, React, TypeScript, Tailwind CSS, Git/GitHub, and Microsoft Office.
* **Career Goals:** Software Engineering excellence and mastering applied Data Science.
* **Verified Project:** [Personal Portfolio Website](https://github.com/ift2abir/personal-portfolio).

For inquiries or direct collaboration, you can reach Ifta Abir immediately on:
* 🟢 **WhatsApp:** [Chat on WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\`)
* ✉️ **Email:** [ift2abir@gmail.com](mailto:ift2abir@gmail.com)`;
}
