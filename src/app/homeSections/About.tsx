import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Us
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Businesses Through Digital Excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Net-Trix Digital Agency, we combine creativity with technical
              expertise to deliver cutting-edge digital solutions. Our
              passionate team of experts is dedicated to helping businesses
              thrive in the digital age through innovative strategies and custom
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert team of digital specialists
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Customized digital strategies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Proven track record of success
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Innovation-driven solutions
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Learn more about our journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image Column */}
          <div className="flex lg:block">
            <img
              src="https://i.pinimg.com/736x/f2/c1/6d/f2c16da83eee4535a81cedfac124a435.jpg" // Replace with your image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
