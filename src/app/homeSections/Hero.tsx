// HeroSection.js
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Adjust the import path as necessary

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      {/* Navigation Bar */}
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        // navLinks={navLinks}
      />

      {/* Hero Section */}
      <div className="relative pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Transform Your Digital Presence
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                With Net-Trix
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
              We craft innovative digital solutions that drive growth, engage
              customers, and elevate your brand in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-8 py-3 rounded-full text-lg font-semibold transition-all">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 flex justify-center animate-fade-in-up">
            <div className="relative w-full max-w-4xl">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/cb/3c/ef/cb3cefbcba842dc7a34c0dfafcf38858.jpg"
                  alt="Digital Agency Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
