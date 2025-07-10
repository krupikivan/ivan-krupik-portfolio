import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Animation types
export type AnimationType =
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeIn"
  | "scaleIn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

// Animation wrapper component
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  className = "",
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationClasses: Record<AnimationType, string> = {
    fadeInUp: isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8",
    fadeInLeft: isVisible ? "animate-fadeInLeft" : "opacity-0 -translate-x-8",
    fadeInRight: isVisible ? "animate-fadeInRight" : "opacity-0 translate-x-8",
    fadeIn: isVisible ? "animate-fadeIn" : "opacity-0",
    scaleIn: isVisible ? "animate-scaleIn" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};
