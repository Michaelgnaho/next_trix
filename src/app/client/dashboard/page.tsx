"use client";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { FaUsers, FaBriefcase, FaCalendarCheck, FaClock } from "react-icons/fa";
import { ReactNode } from "react";

// Define types for StatCard props
interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

// Define types for stats array
interface Stat {
  icon: ReactNode;
  title: string;
  value: string;
}

// Define types for activities array
interface Activity {
  title: string;
  status: "Completed" | "In Progress" | "Pending";
  time: string;
}

// StatCard component with proper typing
const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 transition-all hover:shadow-lg">
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default function DashboardHome() {
  // Stats array with defined types
  const stats: Stat[] = [
    {
      icon: <FaUsers />,
      title: "Active Projects",
      value: "12",
    },
    {
      icon: <FaBriefcase />,
      title: "Completed Jobs",
      value: "284",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Pending Tasks",
      value: "8",
    },
    {
      icon: <FaClock />,
      title: "Hours Logged",
      value: "164",
    },
  ];

  // Activities array with defined types
  const activities: Activity[] = [
    { title: "Website Redesign", status: "In Progress", time: "2 hours ago" },
    { title: "Client Meeting", status: "Completed", time: "5 hours ago" },
    { title: "Project Proposal", status: "Pending", time: "1 day ago" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col sm:flex-row relative">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userName="Michael" userRole="Project Manager" />
          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Recent Activities
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2 sm:space-y-0"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit
                      ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : activity.status === "In Progress"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
