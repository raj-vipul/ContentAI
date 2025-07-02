import React from "react";
import { FiSearch } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";

function DashNav() {
  return (
    <header className="lg:w-200 bg-white border-b border-gray-200 shadow-sm px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-y-3">
        {/* Logo or Page Title */}
        <div className="text-xl font-semibold text-gray-900 tracking-tight">
          Welcome Back 👋
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-1/2 md:w-1/3 relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search content, tools..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
          />
        </div>

        {/* User Profile Button */}
        <div className="flex-shrink-0">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </header>
  );
}

export default DashNav;
