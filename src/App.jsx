import Navbar from "./compoonents/Navbar";
import Hero from "./compoonents/Hero";
import Features from "./compoonents/Features";
import Pricing from "./compoonents/Pricing";
import Testimonials from "./compoonents/Testimonials";
import Footer from "./compoonents/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
