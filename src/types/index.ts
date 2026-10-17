export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'tools' | 'concepts' | 'productivity';
  iconName?: string;
  highlight?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  status?: string;
  description?: string;
  highlights?: string[];
}

export interface ActivityItem {
  role: string;
  organization?: string;
  description: string;
  tags: string[];
  type: 'leadership' | 'volunteer' | 'academic';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelPercentage?: number;
}

