import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HomeLab from "./components/HomeLab";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";
import { scrollToSection } from "./utils/scrollToSection";
import { AnimatedSection } from "./components/AnimatedSection";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section - No animation wrapper needed as it's always visible */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Animated Sections */}
      <AnimatedSection animation="fadeInUp">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <HomeLab />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <ContactSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default App;
