"use client";
import React, { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import SideNav from "../_components/SideNav";
import TemplateGallery from "../_components/TemplateGallery";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link"


function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden md:block w-60 h-full sticky top-0 border-r border-gray-200 bg-white shadow">
        <SideNav />
      </div>

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="text-2xl text-gray-600 " />
          </button>
        </div>
        <SideNav />
      </div>

      {/* Page content */}
      <div className="flex-1 flex flex-col w-full">
      
        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <button onClick={() => setIsOpen(true)}>
            <HiMenuAlt2 className="text-2xl text-gray-700" />
          </button>
          <Link href="/">
            <h1 className="text-lg font-bold text-gray-800 hover:cursor-pointer">
              Content AI✒️
            </h1>
          </Link>
          <UserButton />
        </div>

        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <TemplateGallery />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
