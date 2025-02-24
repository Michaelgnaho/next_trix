"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      href: "/client/dashboard",
      icon: <FaHome size={20} />,
      label: "Dashboard",
    },
    {
      href: "/client/dashboard/jobs",
      icon: <FaBriefcase size={20} />,
      label: "Jobs",
    },
    {
      href: "/client/dashboard/messages",
      icon: <FaEnvelope size={20} />,
      label: "Messages",
    },
    {
      href: "/client/dashboard/billing",
      icon: <FaFileInvoiceDollar size={20} />,
      label: "Billing",
    },
    {
      href: "/client/dashboard/profile_settings",
      icon: <FaCog size={20} />,
      label: "Settings",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${isMobile ? "fixed" : "sticky top-0 h-screen"}
          left-0 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isMobile ? "w-[80%] max-w-[300px]" : "w-72"}
          bg-white dark:bg-gray-800 shadow-xl
        `}
      >
        <div className="relative h-full flex flex-col">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Dashboard Menu
            </h2>

            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href; // Check if link is active
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-600 text-white dark:bg-blue-500"
                          : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }
                    `}
                    onClick={() => isMobile && toggleSidebar()}
                  >
                    <span
                      className={
                        isActive
                          ? "text-white"
                          : "text-blue-600 dark:text-blue-400"
                      }
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/client/login"
                  className="flex items-center space-x-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={() => isMobile && toggleSidebar()}
                >
                  <FaSignOutAlt size={20} />
                  <span className="font-medium">Logout</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed z-50 p-3 rounded-full shadow-lg transition-all duration-300
          ${isMobile ? "top-4 right-4 bg-white dark:bg-gray-800" : "hidden"}
        `}
      >
        {isOpen ? (
          <FaTimes size={24} className="text-blue-600 dark:text-blue-400" />
        ) : (
          <FaBars size={24} className="text-blue-600 dark:text-blue-400" />
        )}
      </button>
    </>
  );
};

export default Sidebar;
