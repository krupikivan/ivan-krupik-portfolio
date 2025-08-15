import React, { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SocialLink from "./SocialLink";
import ProfileImage from "../assets/profile.jpg";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [nameText, setNameText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  const fullName = "Ivan Krupik";

  useEffect(() => {
    // Start typing the name after a small delay
    const startDelay = setTimeout(() => {
      setShowName(true);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (showName && nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setNameText(fullName.substring(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 120); // Typing speed for name

      return () => clearTimeout(timeout);
    }
  }, [nameIndex, showName, fullName]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600">
                  {nameText}
                  {showName && nameIndex < fullName.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                Senior Software Engineer & Technical Lead
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Senior software engineer passionate about using technology to
                solve meaningful problems. With 8+ years of experience and a
                talent for quickly understanding complex challenges, I build
                scalable solutions that make a real difference in how people
                work, live, and connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <a
                href="https://krupikivan.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors text-center"
              >
                View Resume
              </a>
              <button
                onClick={() => scrollToSection("experience")}
                className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View My Work
              </button>
            </div>

            <div className="flex space-x-4">
              <SocialLink
                href="https://linkedin.com/in/krupikivan"
                icon={<Linkedin className="w-5 h-5" />}
              />
              <SocialLink
                href="https://github.com/krupikivan"
                icon={<Github className="w-5 h-5" />}
              />
              <SocialLink
                href="mailto:krupikivan@gmail.com"
                icon={<Mail className="w-5 h-5" />}
              />
              <SocialLink
                href="tel:+17867700263"
                icon={<Phone className="w-5 h-5" />}
              />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Ivan Krupik"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-88 h-88 border-4 border-blue-600 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
