import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 SEO Strategies That Will Dominate in 2025",
      excerpt:
        "Discover the latest SEO trends and strategies that will help your business stay ahead of the competition in the coming year.",
      image:
        "https://i.pinimg.com/736x/9e/30/c5/9e30c5cc8bc91496277038e875ea8ad5.jpg",
      category: "SEO",
      author: "Sarah Johnson",
      readTime: "5 min read",
      date: "Feb 18, 2025",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Social Media Marketing",
      excerpt:
        "Learn how to create a winning social media strategy that engages your audience and drives real business results.",
      image:
        "https://i.pinimg.com/736x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg",
      category: "Social Media",
      author: "Mike Chen",
      readTime: "8 min read",
      date: "Feb 15, 2025",
    },
    {
      id: 3,
      title: "Web Design Trends Reshaping the Digital Landscape",
      excerpt:
        "Explore the latest web design trends that are transforming user experience and setting new standards for digital presence.",
      image:
        "https://i.pinimg.com/736x/51/b2/fe/51b2fee7367115957f29cb0add059017.jpg",
      category: "Web Design",
      author: "Emma Davis",
      readTime: "6 min read",
      date: "Feb 12, 2025",
    },
  ];

  const categories = [
    "All",
    "SEO",
    "Social Media",
    "Web Design",
    "Digital Marketing",
    "E-commerce",
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay up to date with the latest trends, tips, and strategies in the
            digital world.
          </p>
        </div>

        {/* Categories Scrollbar */}
        <div className="flex space-x-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap
                bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src="https://i.pinimg.com/736x/fb/a5/00/fba500c6e99adee23edf4e5e7ad31722.jpg"
                  alt="Featured blog post"
                  className="w-full h-64 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Feb 20, 2025
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  The Future of Digital Marketing: AI and Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Explore how artificial intelligence and machine learning are
                  revolutionizing digital marketing strategies and what it means
                  for your business in 2025 and beyond.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    <span>David Wilson</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>10 min read</span>
                  </div>
                </div>
                <Link
                  href="/blog/future-of-digital-marketing"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
