"use client";

import React, { useState, useEffect } from "react";
import {
  Globe,
  Search,
  Share2,
  Target,
  Paintbrush,
  PenTool,
  Mail,
  GraduationCap,
  Settings,
} from "lucide-react";
import Navbar from "../homeSections/Navbar";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Development",
    description:
      "Custom-built, responsive websites and web applications tailored to your business needs, from simple landing pages to complex e-commerce solutions.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description:
      "Drive organic traffic and improve search rankings with our data-driven SEO strategies, technical optimization, and content enhancement.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Management",
    description:
      "Build and engage your audience with strategic social media campaigns, content creation, and community management across all platforms.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "PPC Advertising",
    description:
      "Maximize ROI with targeted pay-per-click campaigns across Google, social media, and display networks to drive qualified traffic.",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Graphic Design",
    description:
      "Create stunning visual identities with professional logo design, brand guidelines, and marketing materials that capture attention.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Creation",
    description:
      "Engage your audience with compelling content strategies, including blog posts, videos, infographics, and social media content.",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Marketing",
    description:
      "Build lasting customer relationships with strategic email campaigns, automation workflows, and personalized messaging.",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Online Tutoring",
    description:
      "Learn digital marketing and web development through our structured online courses and personalized coaching sessions.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom Solutions",
    description:
      "Tailored digital solutions designed to meet your unique business challenges and growth objectives.",
  },
];

const ServicesSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 transform translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-50 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-30 transform -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We deliver comprehensive digital solutions that help businesses
              thrive in the modern digital landscape. From web development to
              digital marketing, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                <div className="w-0 group-hover:w-full h-1 bg-blue-600 mt-6 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
