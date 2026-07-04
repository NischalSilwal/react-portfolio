import { useEffect } from 'react';
import { useActiveSection } from './hooks';
import { Navbar, Hero, Skills, Experience, Projects, Contact, Footer } from './components/sections';

function App() {
  const { activeSection } = useActiveSection();

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
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
