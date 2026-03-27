import { useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

type Theme = 'light' | 'dark';

/**
 * Custom hook for managing dark/light theme
 * Persists to localStorage and applies class to document
 */
export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#030712' : '#ffffff');
    }
  }, [theme]);

  // Check for system preference on first load
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (!stored) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  const isDark = theme === 'dark';

  return { theme, toggleTheme, isDark };
}
