/**
 * Pure Client-Side Smart Local AI Knowledge-Base Responder for Ask Abir AI.
 *
 * Runs 100% in the browser with zero external network requests or serverless dependencies.
 * Contains verified facts about Ifta Abir's academic milestones, technical stack,
 * projects, career goals, and official contact pathways.
 */

export interface KnowledgeTopic {
  id: string;
  name: string;
  keywords: string[];
  patterns?: RegExp[];
  priority?: number;
  generate: () => string;
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  // 1. Direct Contact & Collaboration
  {
    id: 'contact',
    name: 'Contact Information',
    priority: 10,
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
      'hiring',
      'collaborate',
      'collaboration',
      'touch',
      'message',
      'text',
      'linkedin',
      'social',
      'socials',
      'inquire',
      'inquiry',
      'talk',
      'jogajog',
      'thikana',
    ],
    patterns: [
      /how\s+(can\s+i|to)\s+(contact|reach|hire|call|message|find)\s+(abir|you|him)/i,
      /what\s+is\s+(his|abir's|your)\s+(phone|whatsapp|email|number|contact)/i,
      /can\s+i\s+(call|hire|contact|email|message)\s+(abir|him|you)/i,
    ],
    generate: () => `### 📬 Official Contact Channels for Ifta Abir

You can connect with **Ifta Abir** directly through:

* 🟢 **WhatsApp (Fastest & Preferred):** [Chat on WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\` / \`01610049750\`)
* ✉️ **Email:** [ift2abir@gmail.com](mailto:ift2abir@gmail.com)
* 💼 **LinkedIn:** [linkedin.com/in/ift2abir](https://www.linkedin.com/in/ift2abir)
* 🐙 **GitHub:** [github.com/ift2abir](https://github.com/ift2abir)
* 📄 **Download Resume / CV:** [/files/abir-cv.pdf](/files/abir-cv.pdf)

Feel free to reach out for software engineering opportunities, data science collaborations, or technical projects!`,
  },

  // 2. Resume / CV
  {
    id: 'cv',
    name: 'Resume & CV',
    priority: 9,
    keywords: ['cv', 'resume', 'curriculum vitae', 'pdf', 'biodata', 'download cv', 'download resume'],
    patterns: [
      /(show|give|download|get|view)\s+(me\s+)?(his|abir's|the)?\s*(cv|resume)/i,
      /where\s+(can\s+i|to)\s+find\s+(the\s+)?(cv|resume)/i,
    ],
    generate: () => `### 📄 Ifta Abir's Official Resume / CV

You can view and download Abir's verified CV directly:

* 📥 **Direct Download Link:** [/files/abir-cv.pdf](/files/abir-cv.pdf)
* **Contents:**
  * B.Sc. studies at **Daffodil International University (DIU)**
  * Academic results: HSC GPA 4.50 (Govt. Shaheed Suhrawardy College) & SSC GPA 5.00 Golden (Kishoreganj Zila Ideal School)
  * Technical skillset: Python, C, HTML, CSS, React, TypeScript, Git, Microsoft Office
  * Real-world projects & algorithm contest volunteer experience
* **Direct Inquiries:** Reach him anytime on [WhatsApp](https://wa.me/8801610049750) or email [ift2abir@gmail.com](mailto:ift2abir@gmail.com).`,
  },

  // 3. Education - University (Daffodil International University)
  {
    id: 'education_university',
    name: 'University (DIU)',
    priority: 9,
    keywords: [
      'daffodil',
      'diu',
      'university',
      'varsity',
      'undergraduate',
      'undergrad',
      'bsc',
      'b.sc',
      'bachelor',
      'software engineering degree',
      'campus',
      'semester',
    ],
    patterns: [
      /which\s+university\s+(does\s+he|did\s+he|abir)\s+(study|attend|go)/i,
      /what\s+is\s+(he|abir)\s+studying\s+(in|at)\s+(university|varsity|diu)/i,
    ],
    generate: () => `### 🎓 University Education — Daffodil International University (DIU)

* **Degree:** Bachelor of Science (B.Sc.) in Software Engineering
* **Institution:** Daffodil International University (DIU), Dhaka, Bangladesh
* **Timeline:** 2025 – Present (Undergraduate Student)
* **Academic Highlights:**
  * Software engineering fundamentals, design patterns & clean architecture
  * Algorithmic problem-solving, computational mathematics & data structures
  * Web engineering & modern application development
  * Applied data science and predictive analytics exploration`,
  },

  // 4. Education - College (Govt. Shaheed Suhrawardy College / HSC)
  {
    id: 'education_college',
    name: 'College (HSC)',
    priority: 9,
    keywords: [
      'suhrawardy',
      'college',
      'hsc',
      'higher secondary',
      '12th',
      'intermediate',
      'govt shaheed',
      'shaheed suhrawardy',
      'hsc result',
      'hsc gpa',
    ],
    patterns: [
      /which\s+college\s+(did\s+he|abir)\s+(attend|go|study)/i,
      /what\s+(was|is)\s+(his|abir's)\s+hsc\s+(result|gpa|grade)/i,
    ],
    generate: () => `### 🏛️ Higher Secondary Certificate (HSC) — Science

* **Institution:** Govt. Shaheed Suhrawardy College, Dhaka, Bangladesh
* **Passing Year:** 2024
* **Academic Result:** **GPA 4.50 / 5.00**
* **Field of Study:** Science (Physics, Chemistry, and Advanced Mathematics)`,
  },

  // 5. Education - School (Kishoreganj Zila Ideal School / SSC)
  {
    id: 'education_school',
    name: 'School (SSC)',
    priority: 9,
    keywords: [
      'kishoreganj',
      'zila ideal',
      'zilla ideal',
      'zila',
      'zilla',
      'school',
      'ssc',
      'secondary school',
      '10th',
      'matric',
      'ssc result',
      'ssc gpa',
      'golden gpa',
    ],
    patterns: [
      /which\s+school\s+(did\s+he|abir)\s+(attend|go|study)/i,
      /what\s+(was|is)\s+(his|abir's)\s+ssc\s+(result|gpa|grade)/i,
    ],
    generate: () => `### 🏫 Secondary School Certificate (SSC) — Science

* **Institution:** Kishoreganj Zila Ideal School, Kishoreganj, Bangladesh
* **Passing Year:** 2022
* **Academic Result:** **GPA 5.00 / 5.00 (Golden / Perfect GPA)**
* **Field of Study:** Science & Mathematics Foundation`,
  },

  // 6. Education - Complete Overview / General Academic Journey
  {
    id: 'education_general',
    name: 'Education Overview',
    priority: 8,
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
      'educational background',
      'porashona',
      'shikha',
    ],
    patterns: [
      /where\s+(did|does)\s+(he|abir)\s+(study|go\s+to\s+school)/i,
      /tell\s+me\s+about\s+(his|abir's)\s+education/i,
      /what\s+(is|are)\s+(his|abir's)\s+(education|qualifications|degrees)/i,
      /what\s+are\s+(his|abir's)\s+(gpa|grades|results)/i,
    ],
    generate: () => `### 🎓 Ifta Abir's Complete Academic Journey

1. **B.Sc. in Software Engineering (Undergraduate)**
   * **Institution:** Daffodil International University (DIU), Dhaka, Bangladesh
   * **Timeline:** 2025 – Present
   * **Focus:** Software engineering principles, algorithms, data structures, web technologies, and data science exploration.

2. **Higher Secondary Certificate (HSC) — Science**
   * **Institution:** Govt. Shaheed Suhrawardy College, Dhaka, Bangladesh
   * **Year:** 2024
   * **Result:** **GPA 4.50 / 5.00**
   * **Focus:** Physics, Chemistry, and Advanced Mathematics.

3. **Secondary School Certificate (SSC) — Science**
   * **Institution:** Kishoreganj Zila Ideal School, Kishoreganj, Bangladesh
   * **Year:** 2022
   * **Result:** **GPA 5.00 / 5.00 (Golden / Perfect GPA)**
   * **Focus:** Science and Mathematics Foundation.`,
  },

  // 7. Technical Skills & Tech Stack
  {
    id: 'skills',
    name: 'Technical Skills & Tech Stack',
    priority: 8,
    keywords: [
      'skill',
      'skills',
      'tech stack',
      'technology',
      'technologies',
      'programming',
      'language',
      'languages',
      'stack',
      'frontend',
      'tools',
      'strength',
      'strengths',
      'competencies',
      'what can he do',
      'what does he know',
    ],
    patterns: [
      /what\s+(skills|technologies|tools|languages)\s+does\s+(abir|he)\s+(have|know|use)/i,
      /tell\s+me\s+about\s+(his|abir's)\s+(skills|tech\s+stack)/i,
    ],
    generate: () => `### 💻 Verified Technical Skills & Tools

* **Programming Languages:**
  * **Python:** Data structures, scripting, algorithm design, and applied data science exploration.
  * **C:** Algorithmic problem-solving, procedural programming, memory & computer science foundations.

* **Web Technologies & Frontend:**
  * **Core Web:** HTML5, CSS3, JavaScript, TypeScript
  * **Frameworks & Libraries:** React, Vite
  * **Styling:** Tailwind CSS, PostCSS, responsive mobile-first UI design

* **Modern AI & Accelerated Workflows:**
  * **Prompt Engineering:** Designing clear, structured, and effective prompts to guide AI models toward useful outputs.
  * **Vibe Coding:** Building and iterating on applications using AI-assisted coding tools through natural-language instructions, testing, and refinement.

* **Developer & Productivity Tools:**
  * **Version Control:** Git, GitHub
  * **Office Suites:** Microsoft Excel, Microsoft Word, Microsoft PowerPoint

* **Professional Strengths:**
  * Analytical and critical thinking
  * Algorithmic problem-solving & clean structure
  * Leadership, communication, and cross-functional teamwork
  * High curiosity, dedication, and continuous learning drive`,
  },

  // 8. Specific Skill: Python
  {
    id: 'skill_python',
    name: 'Python',
    priority: 7,
    keywords: ['python', 'python3', 'py', 'pandas', 'numpy', 'scripting'],
    patterns: [/does\s+(he|abir)\s+know\s+python/i, /how\s+good\s+is\s+he\s+at\s+python/i],
    generate: () => `### 🐍 Python Proficiency

* **Usage:** Python is one of Ifta Abir's core languages for algorithmic problem-solving, data structures, and exploring applied **Data Science**.
* **Key Strengths:** Writing clean, readable code, implementing computational algorithms, automated scripting, and data manipulation.
* Explore Abir's code repositories on [GitHub](https://github.com/ift2abir).`,
  },

  // 9. Specific Skill: C Language
  {
    id: 'skill_c',
    name: 'C Language',
    priority: 7,
    keywords: ['c language', 'c programming', 'learn c', 'c code'],
    patterns: [/does\s+(he|abir)\s+(know|program\s+in)\s+c\b/i],
    generate: () => `### ⚙️ C Programming Foundation

* **Usage:** Abir uses the **C language** for foundational computer science, procedural programming, memory management fundamentals, and competitive algorithmic problem-solving.
* **Focus:** Deep understanding of pointers, arrays, structs, algorithms, and computational efficiency.`,
  },

  // 10. Specific Skill: Web Development (HTML, CSS, React, TypeScript, Tailwind)
  {
    id: 'skill_web',
    name: 'Web Technologies',
    priority: 7,
    keywords: [
      'html',
      'html5',
      'css',
      'css3',
      'react',
      'typescript',
      'javascript',
      'tailwind',
      'tailwindcss',
      'vite',
      'web development',
      'web dev',
    ],
    patterns: [/does\s+(he|abir)\s+know\s+(html|css|react|typescript|web\s+dev)/i],
    generate: () => `### 🌐 Web Engineering & Frontend Stack

* **Front-End Core:** HTML5, CSS3, modern JavaScript, and TypeScript.
* **Component-Driven UI:** React with modern hooks and clean component architecture.
* **Styling & Tooling:** Tailwind CSS for custom dark-mode design systems (including the Persona-inspired aesthetic of this portfolio) and Vite for lightning-fast build performance.
* Check out the live code for this portfolio website on [GitHub](https://github.com/ift2abir/personal-portfolio).`,
  },

  // 11. Specific Skill: Git & GitHub
  {
    id: 'skill_git',
    name: 'Git & GitHub',
    priority: 7,
    keywords: ['git', 'github', 'version control', 'git branch', 'git repo'],
    patterns: [/does\s+(he|abir)\s+use\s+(git|github)/i],
    generate: () => `### 🐙 Git & GitHub

* **Version Control:** Abir uses Git for branch management, commit hygiene, and collaborative workflows.
* **Profile:** You can view his public repositories, commits, and portfolio source code at [github.com/ift2abir](https://github.com/ift2abir).`,
  },

  // 12. Specific Skill: Prompt Engineering
  {
    id: 'skill_prompt_engineering',
    name: 'Prompt Engineering',
    priority: 8,
    keywords: [
      'prompt engineering',
      'prompt',
      'prompts',
      'prompting',
      'system prompt',
      'system directives',
      'context steering',
    ],
    patterns: [/does\s+(he|abir)\s+(know|practice|use)\s+prompt\s+engineering/i],
    generate: () => `### 🪄 Prompt Engineering Expertise

* **Overview:** Ifta Abir practices **Prompt Engineering**—designing clear, structured, and effective prompts to guide AI models toward useful outputs.
* **Key Focus:**
  * Formulating precise system directives and persona constraints
  * Context steering, structured outputs, and reliable LLM responses
  * Integrating AI models cleanly into real-world applications and development workflows`,
  },

  // 13. Specific Skill: Vibe Coding
  {
    id: 'skill_vibe_coding',
    name: 'Vibe Coding',
    priority: 8,
    keywords: [
      'vibe coding',
      'vibe code',
      'vibe coder',
      'ai pair programming',
      'rapid prototyping',
      'fast coding',
    ],
    patterns: [/does\s+(he|abir)\s+(know|practice|do)\s+vibe\s+coding/i],
    generate: () => `### 🔥 Vibe Coding & Accelerated Development

* **Overview:** Abir practices **Vibe Coding**—building and iterating on applications using AI-assisted coding tools through natural-language instructions, testing, and refinement.
* **Key Focus:**
  * High-speed conversational AI pair-programming
  * Intuitive rapid prototyping and prompt-led iteration
  * Immediate interactive testing and fast code refinement loops`,
  },

  // 12. Projects
  {
    id: 'projects',
    name: 'Projects',
    priority: 9,
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
      'github repo',
    ],
    patterns: [
      /what\s+(projects|apps|websites)\s+has\s+(abir|he)\s+(built|made|created|developed)/i,
      /tell\s+me\s+about\s+(his|abir's)\s+projects/i,
    ],
    generate: () => `### 🚀 Verified Projects

#### **Personal Portfolio Website**
* **Role:** Creator & Developer
* **Overview:** Designed and developed a cinematic, high-performance personal portfolio website inspired by the Persona visual system (dark canvas with bold orange accents). Features verified academic milestones, technical skills, and this smart local AI assistant.
* **Tech Stack:** React, TypeScript, Tailwind CSS, Vite
* **GitHub Repository:** [github.com/ift2abir/personal-portfolio](https://github.com/ift2abir/personal-portfolio)
* **Status:** Active & Maintained

Abir is continuously building new software engineering and data science projects. Follow his latest work on [GitHub](https://github.com/ift2abir)!`,
  },

  // 13. Career Goals & Philosophy
  {
    id: 'career',
    name: 'Career Goals & Vision',
    priority: 8,
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
      'aspirations',
      'dream',
    ],
    patterns: [
      /what\s+are\s+(his|abir's)\s+(career\s+)?(goals|aspirations|plans|ambitions)/i,
      /what\s+does\s+he\s+want\s+to\s+become/i,
    ],
    generate: () => `### 🎯 Career Goals & Engineering Philosophy

* **Target Roles:** Software Engineering & Aspiring **Data Science Engineer**
* **Core Philosophy:**
  > *"A practical app solves a real problem by turning ideas into simple, effective solutions. I am continuously learning and developing my skills to create meaningful applications."*
* **Current Focus Areas:**
  * Mastering computer science foundations & algorithmic problem-solving.
  * Writing clean, maintainable, scalable code in modern TypeScript and Python.
  * Deepening knowledge in data structures, data analysis, and predictive modeling.
  * Building real-world web applications that deliver measurable value.`,
  },

  // 14. Extracurricular & Volunteer Activities
  {
    id: 'activities',
    name: 'Extracurricular & Volunteer',
    priority: 7,
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
      'programming contest',
    ],
    patterns: [/what\s+(extracurricular|volunteer|activities)\s+does\s+(he|abir)\s+do/i],
    generate: () => `### 🌟 Extracurricular & Leadership Activities

* **Contest Volunteer — CodeTrap & BreakOut (Algorithm Programming Contest)**
  * **Role:** Volunteer & Logistics Coordinator
  * **Organization:** Campus Algorithm Programming Contest at Daffodil International University
  * **Contributions:** Coordinated on-campus algorithmic contests, supported participants, managed logistics, and facilitated smooth contest operations.`,
  },

  // 15. Bio / Profile / Location / Who is Abir
  {
    id: 'bio',
    name: 'About Abir',
    priority: 10,
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
      'location',
      'where is he',
      'where does he live',
      'dhaka',
      'bangladesh',
      'bari kothay',
      'kothay thaken',
    ],
    patterns: [
      /who\s+is\s+(md\.?\s*)?(ifta\s*)?(khirul\s*)?(haque\s*)?abir/i,
      /tell\s+me\s+about\s+(abir|yourself)/i,
      /where\s+(does\s+he\s+live|is\s+he\s+from|is\s+abir\s+located)/i,
    ],
    generate: () => `### 👨‍💻 About Md. Ifta Khirul Haque Abir ("Ifta Abir")

**Ifta Abir** is a Software Engineering undergraduate at **Daffodil International University (DIU)** in Dhaka, Bangladesh, and an **Aspiring Data Science Engineer**.

* 📍 **Location:** Dhaka, Bangladesh
* 🎓 **Education:** B.Sc. in Software Engineering at DIU (2025 – Present)
* 💻 **Primary Technologies:** Python, C, HTML5, CSS3, React, TypeScript, Tailwind CSS, Git/GitHub
* 🏆 **Academic Milestones:**
  * SSC in Science: **GPA 5.00 / 5.00 (Golden GPA)** — Kishoreganj Zila Ideal School
  * HSC in Science: **GPA 4.50 / 5.00** — Govt. Shaheed Suhrawardy College
* 🎯 **Aspirations:** Creating practical, scalable software and mastering applied data science.
* 📬 **Direct Contact:** [WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\`) | Email: [ift2abir@gmail.com](mailto:ift2abir@gmail.com)`,
  },
];

/**
 * Evaluates the user query locally and returns a persona-aligned, verified answer.
 */
export function generateLocalChatResponse(userMessage: string): string {
  const clean = userMessage.toLowerCase().trim();

  if (!clean) {
    return 'Please enter a question about Ifta Abir’s education, skills, projects, or contact channels.';
  }

  // 1. Detect greetings
  const isGreeting =
    /^(hi|hello|hey|salam|assalam|assalamu alaikum|good morning|good afternoon|good evening|yo|howdy|hola|sup|kemon acho|ki khobor)\b/i.test(
      clean
    ) || clean === 'hi' || clean === 'hello';

  // 2. Score matching topics
  interface ScoredTopic {
    topic: KnowledgeTopic;
    score: number;
  }

  const scored: ScoredTopic[] = [];

  for (const topic of KNOWLEDGE_TOPICS) {
    let score = 0;

    // Pattern matching (highest confidence)
    if (topic.patterns) {
      for (const pattern of topic.patterns) {
        if (pattern.test(clean)) {
          score += 10;
          break;
        }
      }
    }

    // Keyword and phrase matching
    for (const kw of topic.keywords) {
      if (clean === kw) {
        // Exact full query match
        score += 8;
      } else if (clean.includes(kw)) {
        // Whole word or multi-word match
        const isWholeWord = new RegExp(`(^|\\b|\\s)${kw}(\\b|\\s|$)`, 'i').test(clean);
        score += isWholeWord ? (kw.includes(' ') ? 6 : 4) : 2;
      }
    }

    if (score > 0) {
      scored.push({ topic, score });
    }
  }

  // Sort by score descending, then by priority descending
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (b.topic.priority || 0) - (a.topic.priority || 0);
  });

  // If greeting and no strong specific topic matched
  if (isGreeting && (scored.length === 0 || scored[0].score <= 4)) {
    return `Hello! I'm **Ask Abir AI**, Ifta Abir's personal portfolio assistant.

I can provide verified information on Abir's:
* 🎓 **Education** (B.Sc. at Daffodil International University, HSC at Govt. Shaheed Suhrawardy College, SSC at Kishoreganj Zila Ideal School)
* 💻 **Technical Skills & Tools** (Python, C, HTML, CSS, React, TypeScript, Tailwind CSS, Git)
* 🚀 **Projects** (Personal Portfolio Website)
* 🎯 **Career Goals** (Software Engineering & Data Science)
* 📬 **Contact Details** (WhatsApp: \`+880 1610049750\` & Email: \`ift2abir@gmail.com\`)

What would you like to know about Abir today?`;
  }

  // If specific topics matched
  if (scored.length > 0) {
    const topScore = scored[0].score;

    // Pick top matching topics with high relevance
    const topMatches = scored
      .filter((s) => s.score >= Math.max(1, topScore * 0.5))
      .map((s) => s.topic);

    // Filter out redundant specific education topics if general education is already selected
    const hasGeneralEdu = topMatches.some((t) => t.id === 'education_general');
    const filteredMatches = hasGeneralEdu
      ? topMatches.filter(
          (t) =>
            t.id !== 'education_university' &&
            t.id !== 'education_college' &&
            t.id !== 'education_school'
        )
      : topMatches;

    // Filter out redundant specific skills if general skills topic is already selected
    const hasGeneralSkills = filteredMatches.some((t) => t.id === 'skills');
    const finalMatches = hasGeneralSkills
      ? filteredMatches.filter(
          (t) =>
            t.id !== 'skill_python' &&
            t.id !== 'skill_c' &&
            t.id !== 'skill_web' &&
            t.id !== 'skill_git' &&
            t.id !== 'skill_prompt_engineering' &&
            t.id !== 'skill_vibe_coding'
        )
      : filteredMatches;

    // Take top 1 or 2 most relevant sections to keep reply comprehensive yet focused
    const selected = finalMatches.slice(0, 2);
    if (selected.length > 0) {
      return selected.map((t) => t.generate()).join('\n\n---\n\n');
    }
  }

  // 3. Smart Persona Fallback when question is outside direct knowledge
  return `I am **Ask Abir AI**, Ifta Abir's personal portfolio assistant.

While I specialize in verified facts regarding Abir's software engineering background, here is a quick overview of what you can ask me:
* **Education:** Currently pursuing a B.Sc. in Software Engineering at **Daffodil International University (DIU)** (2025 – Present). Previously completed HSC at **Govt. Shaheed Suhrawardy College** (GPA 4.50) and SSC at **Kishoreganj Zila Ideal School** (Golden GPA 5.00).
* **Technical Skills:** Python, C, HTML5, CSS3, React, TypeScript, Tailwind CSS, Git/GitHub, and Microsoft Office.
* **Career Goals:** Software Engineering excellence and mastering applied Data Science.
* **Verified Project:** [Personal Portfolio Website](https://github.com/ift2abir/personal-portfolio).

For direct inquiries or collaboration, you can reach Ifta Abir immediately on:
* 🟢 **WhatsApp:** [Chat on WhatsApp](https://wa.me/8801610049750) (\`+880 1610049750\`)
* ✉️ **Email:** [ift2abir@gmail.com](mailto:ift2abir@gmail.com)`;
}
