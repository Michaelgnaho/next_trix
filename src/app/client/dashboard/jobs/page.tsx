"use client";

import Sidebar from "../Sidebar";
import DashboardHeader from "../DashboardHeader";
import { 
  FaBriefcase, 
  FaHourglassHalf, 
  FaCheckCircle, 
  FaChartLine,
  FaExclamationCircle,
  FaClock,
  FaMoneyBillWave
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

const JobCard = ({ job }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-all">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-medium text-gray-900 dark:text-white">{job.title}</h3>
      <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit
        ${job.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
          job.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
          job.status === 'Urgent' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
        {job.status}
      </span>
    </div>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
      <span className="flex items-center">
        <FaClock className="mr-2" size={12} />
        {job.duration}
      </span>
      <span className="flex items-center">
        <FaMoneyBillWave className="mr-2" size={12} />
        ${job.budget}
      </span>
    </div>
  </div>
);

export default function JobDashboard() {
  const stats = [
    {
      icon: <FaBriefcase />,
      title: "Active Jobs",
      value: "8",
    },
    {
      icon: <FaHourglassHalf />,
      title: "Pending Requests",
      value: "15",
    },
    {
      icon: <FaCheckCircle />,
      title: "Completed Jobs",
      value: "147",
    },
    {
      icon: <FaChartLine />,
      title: "Success Rate",
      value: "94%",
    }
  ];

  const recentJobs = [
    {
      title: "E-commerce Website Development",
      status: "In Progress",
      duration: "2 weeks left",
      budget: "3,500"
    },
    {
      title: "Mobile App Bug Fixes",
      status: "Urgent",
      duration: "3 days left",
      budget: "800"
    },
    {
      title: "Website SEO Optimization",
      status: "Completed",
      duration: "Finished",
      budget: "1,200"
    },
    {
      title: "Database Migration",
      status: "Pending",
      duration: "Starts in 2 days",
      budget: "2,400"
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

            {/* Job Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Job Requests */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Job Requests
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="space-y-4">
                  {recentJobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
                </div>
              </div>

              {/* Urgent Jobs */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Urgent Jobs
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="text-center">
                    <FaExclamationCircle className="mx-auto text-yellow-500 text-4xl mb-3" />
                    <p className="text-gray-600 dark:text-gray-300">No urgent jobs at the moment</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}