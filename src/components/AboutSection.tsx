import React from "react";
import { AnimatedSection } from "./AnimatedSection";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a dedicated senior software engineer with a passion for
                creating innovative solutions that make a real impact. With over
                8 years of professional experience, I've worked across the full
                technology stack, from mobile applications to backend systems
                and cloud infrastructure.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey has taken me through various industries including
                healthcare, fintech, IoT, and e-commerce. I specialize in
                Flutter mobile development, React web applications, and building
                scalable backend services. Beyond professional work, I'm
                passionate about home lab infrastructure, self-hosting
                solutions, and IoT automation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  8+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  20+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Technologies
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  100+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Completed
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
