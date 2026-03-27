import { useEffect, useState, useRef, useCallback } from 'react';
import { navLinks } from '../data';

/**
 * Custom hook for tracking which section is currently active in the viewport
 * Used for navbar active state highlighting
 */
export function useActiveSection() {
  // Get the first section ID from href (e.g., '#hero' -> 'hero')
  const getInitialSection = () => {
    const firstLink = navLinks[0];
    if (firstLink) {
      return firstLink.href.replace('#', '');
    }
    return '';
  };

  const [activeSection, setActiveSection] = useState<string>(getInitialSection());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionsRef = useRef<Map<string, Element>>(new Map());

  const registerSection = useCallback((id: string, element: Element | null) => {
    if (element) {
      sectionsRef.current.set(id, element);
    } else {
      sectionsRef.current.delete(id);
    }
  }, []);

  useEffect(() => {
    // Disconnect previous observer
    observerRef.current?.disconnect();

    // Create new observer with higher threshold for more accurate detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio that's actually visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (highest first), then by position
          const sorted = visibleEntries.sort((a, b) => {
            const ratioDiff = b.intersectionRatio - a.intersectionRatio;
            if (Math.abs(ratioDiff) > 0.1) {
              return ratioDiff;
            }
            // If similar ratios, prefer the one that's higher on the page
            const rectA = a.boundingClientRect;
            const rectB = b.boundingClientRect;
            return rectA.top - rectB.top;
          });

          const sectionId = sorted[0].target.getAttribute('data-section-id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all registered sections
    sectionsRef.current.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { activeSection, registerSection };
}
