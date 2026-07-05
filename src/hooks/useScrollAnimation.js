import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    // Slight delay to allow DOM to render and React Router transitions to settle
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
      elements.forEach(el => observer.observe(el));
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once, or we could listen to location changes.
}
