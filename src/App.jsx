import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";

const Home = lazy(() => import("./pages/Home"));
const Education = lazy(() => import("./pages/Education"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projects = lazy(() => import("./pages/Projects"));
const OpenSource = lazy(() => import("./pages/OpenSource"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Jeevan Portfolio's</title>
        <meta
          name="description"
          content="Portfolio of Jeevan Kadam, a passionate developer creating sustainable and scalable systems."
        />
        <meta
          name="keywords"
          content="Jeevan Kadam, developer, portfolio, React, UI/UX, cloud, full stack"
        />
      </Helmet>
      <InteractiveBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-blue-500">
              Loading...
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;