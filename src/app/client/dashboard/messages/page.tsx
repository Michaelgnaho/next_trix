"use client";

import Sidebar from "../Sidebar";
import DashboardHeader from "../DashboardHeader";
import { 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaUsers, 
  FaArchive,
  FaUserCircle,
  FaPaperclip,
  FaCircle
} from "react-icons/fa";

const StatCard = ({ icon, title, value, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 transition-all hover:shadow-lg">
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{value}</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{title}</p>
      </div>
    </div>
  </div>
);

const MessageCard = ({ message }) => (
  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
    <div className="relative">
      <FaUserCircle className="text-gray-400 text-3xl" />
      {message.online && (
        <FaCircle className="absolute bottom-0 right-0 text-green-500 text-xs" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium text-gray-900 dark:text-white truncate">
          {message.sender}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {message.time}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
        {message.hasAttachment && <FaPaperclip className="inline mr-1" />}
        {message.preview}
      </p>
    </div>
  </div>
);

export default function MessageDashboard() {
  const stats = [
    {
      icon: <FaEnvelope />,
      title: "Unread Messages",
      value: "12",
    },
    {
      icon: <FaEnvelopeOpen />,
      title: "Total Messages",
      value: "486",
    },
    {
      icon: <FaUsers />,
      title: "Active Chats",
      value: "8",
    },
    {
      icon: <FaArchive />,
      title: "Archived",
      value: "24",
    }
  ];

  const recentMessages = [
    {
      sender: "Sarah Johnson",
      preview: "Hi, I've reviewed the project proposal and have some feedback...",
      time: "2m ago",
      online: true,
      hasAttachment: false
    },
    {
      sender: "Development Team",
      preview: "Updated: Latest build files attached for review",
      time: "45m ago",
      online: true,
      hasAttachment: true
    },
    {
      sender: "Client Meeting",
      preview: "Meeting notes and action items from today's call",
      time: "2h ago",
      online: false,
      hasAttachment: true
    }
  ];

  const pinnedChats = [
    {
      sender: "Project Leads",
      preview: "Weekly sync-up discussion and updates",
      time: "1d ago",
      online: true,
      hasAttachment: false
    },
    {
      sender: "Design Team",
      preview: "New UI mockups for the dashboard redesign",
      time: "2d ago",
      online: false,
      hasAttachment: true
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col sm:flex-row relative">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userName="Michael" userRole="Project Manager" />
          
          <main className="flex-1 p-4 sm:p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Message Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Messages */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Messages
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentMessages.map((message, index) => (
                    <MessageCard key={index} message={message} />
                  ))}
                </div>
              </div>

              {/* Pinned Chats */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Pinned Chats
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    Manage Pins
                  </span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {pinnedChats.map((message, index) => (
                    <MessageCard key={index} message={message} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}