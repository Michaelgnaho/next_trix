"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Navbar from "../homeSections/Navbar";
import Image from "next/image";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory management",
    category: "Websites",
    image:
      "https://i.pinimg.com/736x/e7/c2/14/e7c2140dbb07836b61c2a68c11b51575.jpg",
    tech: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    title: "SEO Performance Dashboard",
    description: "Analytics dashboard for tracking SEO metrics and performance",
    category: "SEO",
    image:
      "https://i.pinimg.com/736x/ba/35/58/ba35588d11120c276f4fb4a511d92c44.jpg",
    tech: ["React", "Node.js", "Google Analytics API"],
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Complete brand identity design with guidelines and assets",
    category: "Branding",
    image:
      "https://i.pinimg.com/736x/4c/d8/9b/4cd89b915710ca7b9c6daa4587018da6.jpg",
    tech: ["Adobe Creative Suite", "Figma"],
  },
];

const categories = ["All", "Websites", "SEO", "Branding", "Social Media"];

const PortfolioSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-white" : "bg-gray-900"}`}>
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <section
        className={`w-full py-16 ${
          isDarkMode ? "bg-gray-800" : "bg-gradient-to-b from-white to-blue-50"
        }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-40 -right-40 w-80 h-80 ${
              isDarkMode ? "bg-blue-700" : "bg-blue-100"
            } rounded-full opacity-20 blur-3xl`}
          />
          <div
            className={`absolute top-60 -left-40 w-80 h-80 ${
              isDarkMode ? "bg-yellow-600" : "bg-yellow-100"
            } rounded-full opacity-20 blur-3xl`}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                isDarkMode ? "text-white" : "text-blue-900"
              } mb-4`}
            >
              Explore Our Latest Projects
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-blue-600"
              } max-w-2xl mx-auto`}
            >
              Delivering innovative digital solutions that drive results and
              exceed expectations. Each project is crafted with precision and
              creativity.
            </p>
          </motion.div>

          {/* Category Filters */}
          <Tabs
            defaultValue="All"
            className="mb-12"
            onValueChange={setActiveCategory}
          >
            <TabsList className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white ${
                    isDarkMode ? "text-gray-300" : "text-blue-900"
                  }`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle
                      className={`text-xl ${
                        isDarkMode ? "text-white" : "text-blue-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className={`w-full group hover:bg-blue-600 hover:text-white ${
                        isDarkMode
                          ? "border-gray-600 text-gray-300"
                          : "border-blue-600 text-blue-600"
                      }`}
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group ${
                isDarkMode ? "hover:bg-blue-700" : ""
              }`}
            >
              See All Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
