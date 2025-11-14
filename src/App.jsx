import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";



import {
  Menu,
  X,
  BarChart3,
  Linkedin,
  Github,
} from "lucide-react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* NAVIGATION BAR */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* LOGO */}
              <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <img 
                    src="/logo.webp" 
                    alt="DAJAJ LLC logo" 
                    className="w-15 h-15 object-contain"
                  />

                <div>
                  <h1 className="text-xl font-bold text-gray-900">DAJAJ LLC</h1>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    Data Analytics for Just and Agile Journeys
                  </p>
                </div>
              </Link>

              {/* DESKTOP LINKS */}
              <div className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003366]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-base 
                               font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* ROUTES */}
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/logo.webp" 
                    alt="DAJAJ LLC logo" 
                    className="w-10 h-10 object-contain"
                  />

                  <span className="text-xl font-bold">DAJAJ LLC</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Data Analytics for Just and Agile Journeys
                </p>
              </div>

              <div>
  <h3 className="font-semibold mb-4">Quick Links</h3>
  <div className="space-y-2">
    {navigation.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="block text-gray-400 hover:text-white text-sm"
      >
        {item.name}
      </Link>
    ))}

    {/* ⭐ Privacy Policy link */}
    <Link
      to="/privacy-policy"
      className="block text-gray-400 hover:text-white text-sm"
    >
      Privacy Policy
    </Link>
  </div>
</div>


              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yazid-mouayn"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/YAZ1D"
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Now booking data analytics & IT consulting projects for Winter 2025.
                </p>
              </div>

            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              © DAJAJ LLC 2025. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}
