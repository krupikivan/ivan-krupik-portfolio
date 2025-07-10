// hooks/useTimelineAnimation.ts
import { useState, useEffect, useRef, RefObject } from "react";

export const useTimelineAnimation = (): [
  RefObject<HTMLDivElement>,
  Set<number>
] => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.dataset.index || "0");
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = timelineRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll(".timeline-item");
      items.forEach((item, index) => {
        const htmlItem = item as HTMLElement;
        htmlItem.dataset.index = index.toString();
        observer.observe(htmlItem);
      });
    }

    return () => observer.disconnect();
  }, []);

  return [timelineRef, visibleItems];
};
