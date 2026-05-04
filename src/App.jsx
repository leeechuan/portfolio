import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Navbar, Hero } from "./components";

// Eagerly loaded — hero/nav are above the fold
// Everything below the fold is lazy loaded to reduce initial bundle

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Minimal placeholder while sections load in
const SectionLoader = () => (
  <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid #aaa4', borderTopColor: '#00cea8', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

const App = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // If element not found (likely loading), retry after a short delay
          setTimeout(scrollToHash, 200);
        }
      }
    };

    window.addEventListener("hashchange", scrollToHash);
    scrollToHash(); // Check on mount

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center pb-20'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        <div className='relative z-0 bg-[#0b0a0f]'>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
