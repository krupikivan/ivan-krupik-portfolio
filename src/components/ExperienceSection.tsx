import React from "react";
import type { Experience } from "../types";
import { TimelineItem } from "./TimelineItem";
import { AnimatedSection } from "./AnimatedSection";

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "BabyScripts",
      period: "August 2023 - July 2025",
      description:
        "Led migration of MyJourney mobile app from IONIC to Flutter with IoT device integration and comprehensive database migration from DynamoDB to PostgreSQL Aurora RDS.",
      achievements: [
        "Leveraged AI/LLM tools (GitHub Co-Pilot, Claude) reducing boilerplate code by 40%",
        "Developed IoT healthcare device integrations using Objective-C and Java",
        "Implemented internationalization across Flutter and Angular platforms using Lokalise",
        "Built scalable Serverless APIs with AWS Lambda ensuring HIPAA compliance",
        "Managed monorepo with CircleCI, reducing deployment time by 60%",
      ],
    },
    {
      title: "Technical Lead",
      company: "MascotaMas",
      period: "August 2021 - August 2024",
      description:
        "Led complete architecture and development of MascotaMas pet service platform, achieving 500+ daily active users and 4,000+ weekly active users.",
      achievements: [
        "Architected full-stack platform with Flutter mobile apps and React web platform",
        "Implemented real-time communication using Agora SDK and WebSocket connections",
        "Built Firebase backend with Cloud Functions for serverless API endpoints",
        "Established CI/CD pipelines using CodeMagic and Docker containerization",
        "Successfully mentored junior developer throughout project lifecycle",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "IUNU",
      period: "February 2022 - February 2024",
      description:
        "Led development of LUNA mobile application for greenhouse management and contributed to LUNA AI platform with machine vision capabilities.",
      achievements: [
        "Developed Flutter mobile app for greenhouse inventory and harvest tracking",
        "Integrated IoT hardware including precision scales and barcode readers",
        "Contributed to Ruby on Rails AI platform for plant-level data analysis",
        "Optimized PostgreSQL performance on GCP with efficient query design",
        "Implemented CI/CD pipelines using CircleCI and Docker containers",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "42i",
      period: "May 2020 - May 2023",
      description:
        "Led full-stack development across multiple technology companies and startup projects, building scalable applications using diverse technology stacks.",
      achievements: [
        "Led Alto Fitness marketplace with Flutter frontend and Ruby on Rails backend",
        "Architected LabbiGO health platform using Flutter, React.js, and Spring Boot",
        "Contributed to blockchain NFT projects with Solidity smart contracts",
        "Implemented AWS cloud infrastructure with Docker containerization",
        "Managed concurrent development across multiple client projects",
      ],
    },
    {
      title: "Software Engineer",
      company: "Incluit",
      period: "June 2017 - May 2021",
      description:
        "Specialized in mobile development and QA automation for enterprise clients including Avaya, Sancor Seguros, and Banco Supervielle.",
      achievements: [
        "Developed Android applications for insurance and banking sectors",
        "Built MODO app (Argentina's Zelle equivalent) using Flutter",
        "Implemented QA automation frameworks reducing manual testing by 60%",
        "Contributed to Avaya's Skype integration for enterprise communication",
        "Ensured security compliance for financial transaction applications",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} index={index} delay={200}>
                <div className="relative pl-20">
                  {/* Timeline marker */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10">
                    <div className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping opacity-20"></div>
                  </div>

                  {/* Experience card */}
                  <div className="group bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {exp.company}
                      </h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">
                            •
                          </span>
                          <span className="text-slate-600 dark:text-slate-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </TimelineItem>
            ))}
          </div>

          {/* Timeline end marker */}
          <div className="relative pl-20 mt-8">
            <div className="absolute left-6 w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full border-4 border-white dark:border-slate-800"></div>
            <div className="text-center py-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Building the Future
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
