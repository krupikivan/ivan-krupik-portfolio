export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitStatus = "idle" | "success" | "error";
