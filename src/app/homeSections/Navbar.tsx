import React from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  Briefcase,
  NewspaperIcon,
  Phone,
  LayoutGrid,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.jpg";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isDarkMode,
  setIsDarkMode,
}) => {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      name: "Services",
      href: "/services",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <NewspaperIcon className="w-4 h-4" />,
    },
    { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center space-x-2 group"
          >
            <Image src={Logo} alt="Net-Trix" className="w-20 h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2" />
            <Link href="/client/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
              Get Started
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 border-t dark:border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link href="/client/register" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
