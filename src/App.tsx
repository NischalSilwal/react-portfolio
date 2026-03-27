import { useState, useEffect } from 'react';
import { useActiveSection } from './hooks';
import { Navbar, Hero, Skills, Experience, Projects, Contact, Footer } from './components/sections';
import './index.css';

/**
 * Main App component
 * Orchestrates all sections and manages global state
 */
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { activeSection } = useActiveSection();

  // Page load animation
  useEffect(() => {
    // Small delay for smooth entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div
      className={`
        min-h-screen
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-gray-100
        transition-all duration-500
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main content */}
      <main>
        {/* Hero - special case, doesn't use SectionWrapper */}
        <Hero isVisible={isLoaded} />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
