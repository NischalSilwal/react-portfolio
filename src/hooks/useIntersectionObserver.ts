import { useEffect, useState, useRef, useCallback, type RefCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for detecting when an element enters the viewport
 * Used for scroll-triggered animations
 * Returns a callback ref that can be safely combined with other refs
 */
export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {}
): [RefCallback<T>, boolean] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<T | null>(null);

  const checkIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve after becoming visible if freezeOnceVisible is true
        if (freezeOnceVisible && elementRef.current) {
          observerRef.current?.unobserve(elementRef.current);
        }
      } else if (!freezeOnceVisible) {
        setIsVisible(false);
      }
    },
    [freezeOnceVisible]
  );

  // Callback ref that handles element mounting/unmounting
  const ref: RefCallback<T> = useCallback(
    (node: T | null) => {
      // Cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      elementRef.current = node;

      if (node) {
        observerRef.current = new IntersectionObserver(checkIntersect, {
          threshold,
          root,
          rootMargin,
        });

        observerRef.current.observe(node);
      }
    },
    [checkIntersect, threshold, root, rootMargin]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return [ref, isVisible];
}

/**
 * Hook to track multiple elements' visibility
 */
export function useIntersectionObserverMultiple(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true,
  } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);
  const observersRef = useRef<Map<number, IntersectionObserver>>(new Map());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    const count = children.length;
    const newVisibleStates = new Array(count).fill(false);
    setVisibleStates(newVisibleStates);

    const currentObservers = observersRef.current;

    Array.from(children).forEach((child, index) => {
      const htmlChild = child as HTMLDivElement;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStates(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            if (freezeOnceVisible) {
              observer.unobserve(htmlChild);
            }
          } else if (!freezeOnceVisible) {
            setVisibleStates(prev => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          }
        },
        { threshold, root, rootMargin }
      );

      observer.observe(htmlChild);
      currentObservers.set(index, observer);
    });

    return () => {
      currentObservers.forEach(observer => observer.disconnect());
      currentObservers.clear();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [containerRef, visibleStates];
}
