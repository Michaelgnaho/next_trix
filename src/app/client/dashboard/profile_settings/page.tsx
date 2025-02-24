"use client";

import Sidebar from "../Sidebar";
import DashboardHeader from "../DashboardHeader";
import { FaUser, FaLock, FaEnvelope, FaBell, FaSave } from "react-icons/fa";

interface SettingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SettingCard: React.FC<SettingCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 transition-all hover:shadow-lg">
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function SettingsDashboard() {
  const settingsOptions = [
    {
      icon: <FaUser />,
      title: "Profile Settings",
      description: "Manage your personal information and preferences.",
    },
    {
      icon: <FaLock />,
      title: "Security Settings",
      description: "Update your password and enable two-factor authentication.",
    },
    {
      icon: <FaEnvelope />,
      title: "Notification Settings",
      description: "Customize your email and push notification preferences.",
    },
    {
      icon: <FaBell />,
      title: "Alert Settings",
      description: "Set up alerts for important updates.",
    },
    {
      icon: <FaSave />,
      title: "Data Management",
      description: "Manage your data and download your information.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col sm:flex-row relative">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userName="Michael" userRole="Project Manager" />

          <main className="flex-1 p-4 sm:p-6">
            {/* Settings Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {settingsOptions.map((option, index) => (
                <SettingCard key={index} {...option} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
