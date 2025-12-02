import Navbar from "./compoonents/Navbar";
import Hero from "./compoonents/Hero";
import Features from "./compoonents/Features";
import Pricing from "./compoonents/Pricing";
import Testimonials from "./compoonents/Testimonials";
import Footer from "./compoonents/Footer";
import { useState, useEffect } from "react";

function App() {
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
