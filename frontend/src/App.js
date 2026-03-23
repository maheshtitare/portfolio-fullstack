import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

/**
 * App.js — Root component. Assembles all sections of the portfolio.
 *
 * The page layout from top to bottom:
 *   Navbar → Hero → About → Skills → Projects → Contact → Footer
 *
 * useEffect with scroll listener:
 * Adds a "visible" class to elements with class "fade-in" when they
 * enter the viewport. This creates the scroll-triggered fade animation.
 *
 * Interview tip: "useEffect runs after the component renders.
 * The empty [] means it runs only ONCE — like componentDidMount in class components."
 */
function App() {

  useEffect(() => {
    // ── Scroll-triggered fade-in animation ───────────────────────────────────
    // IntersectionObserver watches elements and fires when they enter the viewport.
    // This is more performant than listening to scroll events directly.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible on screen — add "visible" class to trigger CSS animation
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 } // Trigger when 12% of element is visible
    );

    // Observe all elements with class "fade-in"
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect();
  }, []); // [] = run once on mount

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
