import React from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Careers", href: "#careers" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className={`${"bg-slate-100 shadow-md"} relative overflow-hidden`}>
      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Net-Trix
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transforming digital experiences with innovative solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center">
                      {social[0]}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 pb-12">
          <div className=" max-w-2xl">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Subscribe to our newsletter
            </h4>
            <div className="flex-col  md:flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 my-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} Net-Trix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
