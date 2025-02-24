"use client";

import Image from "next/image";

interface DashboardHeaderProps {
  userName: string;
  userRole: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  userRole,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg"
              alt="Profile"
              className="rounded-full"
              width={48}
              height={48}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Welcome, {userName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {userRole}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300 w-full sm:w-auto text-left sm:text-right">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
