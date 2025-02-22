import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import AnimatedContent from "../Animations/AnimatedContext";

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

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights & Updates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up to date with the latest trends, tips, and strategies in
              the digital world.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <AnimatedContent>
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
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
              </AnimatedContent>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
