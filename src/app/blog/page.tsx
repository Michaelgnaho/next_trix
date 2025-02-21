"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock } from "lucide-react";
import Navbar from "../homeSections/Navbar";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Sample blog data - in a real app, this would come from your CMS
const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Actually Work in 2025",
    description:
      "Discover the latest SEO techniques that are driving real results for businesses in the digital age.",
    category: "SEO",
    image:
      "https://i.pinimg.com/736x/f3/ea/02/f3ea02f73806dd8e340d2db4d8405c78.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      role: "SEO Specialist",
    },
    date: "2025-02-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Next?",
    description:
      "Exploring emerging trends and technologies shaping the future of web development.",
    category: "Web Development",
    image:
      "https://i.pinimg.com/736x/2b/c1/c9/2bc1c9c6efc3c194e67f30bfb0aa5e22.jpg",
    author: {
      name: "Mike Chen",
      avatar: "/api/placeholder/40/40",
      role: "Lead Developer",
    },
    date: "2025-02-12",
    readTime: "7 min read",
    featured: false,
  },
  // Add more blog posts as needed
];

const categories = ["All", "SEO", "Web Development", "Social Media", "PPC"];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
    //   className={`min-h-screen ${isDarkMode ? "bg-white" : "dark bg-gray-900"}`}
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
      <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto">
              Stay ahead of the curve with insights and strategies from our
              digital marketing experts.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-blue-600 font-semibold mb-2">
                      Featured Post
                    </span>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar>
                        <AvatarImage src={featuredPost.author.avatar} />
                        <AvatarFallback>
                          {featuredPost.author.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-blue-900">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

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
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            layout
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-blue-600">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-blue-900">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm text-blue-900">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-blue-600 hover:text-white"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest digital marketing
              trends, tips, and strategies delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-blue-900"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
