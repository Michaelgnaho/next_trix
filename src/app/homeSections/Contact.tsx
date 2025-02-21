import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Mail className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss your project and explore how we can help transform
            your digital presence. Our team is ready to bring your vision to
            life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
