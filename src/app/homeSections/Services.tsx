import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  Share2,
  Target,
  Palette,
  PenTool,
  Mail,
  Book,
  Settings,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom-built, responsive websites that drive engagement and conversions.",
      features: ["Custom Design", "Responsive Development", "CMS Integration"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies to improve your search rankings and visibility.",
      features: ["Keyword Research", "On-Page SEO", "Performance Optimization"],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Strategic social media marketing to build and engage your audience.",
      features: ["Content Strategy", "Community Management", "Analytics"],
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description:
        "Results-focused paid advertising campaigns across multiple platforms.",
      features: ["Campaign Strategy", "Ad Creation", "Performance Tracking"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Eye-catching visual designs that strengthen your brand identity.",
      features: [
        "Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
      ],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Engaging content that tells your story and connects with your audience.",
      features: ["Copywriting", "Blog Posts", "Visual Content"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Strategic email campaigns that nurture leads and drive conversions.",
      features: ["Campaign Design", "Automation", "Analytics"],
    },
    {
      icon: Book,
      title: "Online Tutoring",
      description:
        "Expert guidance in digital skills and marketing strategies.",
      features: ["One-on-One Sessions", "Group Workshops", "Custom Curriculum"],
    },
    {
      icon: Settings,
      title: "Custom Digital Services",
      description:
        "Tailored digital solutions to meet your unique business needs.",
      features: [
        "Custom Development",
        "Integration Services",
        "Technical Support",
      ],
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Digital Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From web development to digital marketing, we offer end-to-end
            solutions to help your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
