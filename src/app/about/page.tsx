"use client";

import React, { use } from "react";
import { Linkedin, Twitter, Mail, Target, Eye, Heart } from "lucide-react";
import Navbar from "../homeSections/Navbar";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
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
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Emma Williams",
      role: "Technical Lead",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "David Miller",
      role: "Marketing Strategist",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  const focusAreas = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Our Mission",
      description:
        "Empowering businesses with cutting-edge digital solutions that drive growth and innovation in the modern marketplace.",
    },
    {
      icon: <Eye className="w-12 h-12 text-blue-600" />,
      title: "Our Vision",
      description:
        "To be the catalyst for digital transformation, helping brands achieve excellence through innovative technology and creative solutions.",
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Our Values",
      description:
        "Built on creativity, integrity, and an unwavering commitment to delivering exceptional results that exceed client expectations.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-white" : "dark bg-gray-900"}`}
    >
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        // navLinks={navLinks}
      />{" "}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900">
        {/* Background Elements */}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Building Digital Success Together
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We're a team of passionate digital innovators, committed to
              transforming businesses through cutting-edge technology and
              creative excellence. Our collaborative approach ensures your
              success in the digital landscape.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                      <div className="flex space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a
                          href={member.social.email}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Mail className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Work With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
