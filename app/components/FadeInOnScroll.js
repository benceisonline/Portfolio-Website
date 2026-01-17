"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  // Start hidden so server and client initial HTML match (avoids hydration mismatch).
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    if (typeof IntersectionObserver === "undefined") {
      // Older browsers or some WebViews: reveal on next tick to avoid synchronous setState in effect
      const t = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // lower threshold and negative bottom margin to trigger earlier on small viewports
        threshold: 0.05,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        try {
          observer.unobserve(currentRef);
        } catch (e) {
          // ignore if already disconnected
        }
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
