import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Timeline Item Component Props
interface TimelineItemProps {
  children: React.ReactNode;
  index: number;
  delay?: number;
  className?: string;
}

// Timeline Item Component
export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  index,
  delay = 0,
  className = "",
}) => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`timeline-item transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay + index * 100}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};
