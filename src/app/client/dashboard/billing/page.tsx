"use client";

import Sidebar from "../Sidebar";
import DashboardHeader from "../DashboardHeader";
import { 
  FaCreditCard, 
  FaFileInvoiceDollar, 
  FaChartLine, 
  FaExclamationCircle,
  FaUserCircle,
  FaDownload,
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

const InvoiceCard = ({ invoice }) => (
  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
    <div className="relative">
      <FaFileInvoiceDollar className="text-gray-400 text-3xl" />
      {invoice.status === 'paid' && (
        <FaCircle className="absolute bottom-0 right-0 text-green-500 text-xs" />
      )}
      {invoice.status === 'overdue' && (
        <FaCircle className="absolute bottom-0 right-0 text-red-500 text-xs" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium text-gray-900 dark:text-white truncate">
          Invoice #{invoice.number}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {invoice.date}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          ${invoice.amount}
        </p>
        <span className={`text-xs px-2 py-1 rounded-full ${
          invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
          invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </span>
      </div>
    </div>
  </div>
);

export default function BillingDashboard() {
  const stats = [
    {
      icon: <FaCreditCard />,
      title: "Total Revenue",
      value: "$24,685",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Outstanding",
      value: "$3,428",
    },
    {
      icon: <FaChartLine />,
      title: "This Month",
      value: "$8,125",
    },
    {
      icon: <FaExclamationCircle />,
      title: "Overdue",
      value: "$1,556",
    }
  ];

  const recentInvoices = [
    {
      number: "INV-2024-001",
      amount: "2,450.00",
      date: "Today",
      status: "pending"
    },
    {
      number: "INV-2024-002",
      amount: "1,875.00",
      date: "Yesterday",
      status: "paid"
    },
    {
      number: "INV-2024-003",
      amount: "3,240.00",
      date: "Mar 22, 2024",
      status: "overdue"
    }
  ];

  const upcomingPayments = [
    {
      number: "INV-2024-004",
      amount: "1,280.00",
      date: "Due Mar 28, 2024",
      status: "pending"
    },
    {
      number: "INV-2024-005",
      amount: "2,850.00",
      date: "Due Mar 30, 2024",
      status: "pending"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col sm:flex-row relative">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userName="Michael" userRole="Finance Manager" />
          
          <main className="flex-1 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Invoices
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentInvoices.map((invoice, index) => (
                    <InvoiceCard key={index} invoice={invoice} />
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Upcoming Payments
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    View Schedule
                  </span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {upcomingPayments.map((invoice, index) => (
                    <InvoiceCard key={index} invoice={invoice} />
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