import React from "react";
import type { SkillCategory } from "../types";

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Mobile Development",
      skills: [
        "Flutter",
        "Dart",
        "Android",
        "iOS",
        "Objective-C",
        "Java",
        "Kotlin",
        "IONIC",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Redux",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Ruby on Rails",
        "Spring Boot",
        "Python",
        "GraphQL",
        "REST APIs",
        "Serverless",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "DynamoDB",
        "MongoDB",
        "Firebase",
        "Aurora RDS",
        "Redis",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "GCP",
        "Docker",
        "CircleCI",
        "CodeMagic",
        "Fastlane",
        "CloudWatch",
        "Lambda",
      ],
    },
    {
      title: "Specialized Technologies",
      skills: [
        "IoT Integration",
        "BLE",
        "Blockchain",
        "Solidity",
        "AI/LLM",
        "Machine Vision",
        "WebRTC",
        "WebSocket",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-center mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
