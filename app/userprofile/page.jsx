"use client";
import React, { useState } from "react";
import SideNav from "../_components/SideNav";
import { HiX, HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { UserProfile } from "@clerk/clerk-react";

function UserPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block w-60 h-full fixed top-0 left-0 border-r border-gray-200 bg-white shadow z-40">
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
            <HiX className="text-2xl text-gray-600" />
          </button>
        </div>
        <SideNav />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col w-full md:ml-60">
        {/* Top Navbar (always visible) */}
        <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm sticky top-0 z-30">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <HiMenuAlt2 className="text-2xl text-gray-700" />
          </button>
          <Link href="/">
            <h1 className="text-lg font-bold text-gray-800 hover:cursor-pointer">
              Content AI✒️
            </h1>
          </Link>
          <UserButton />
        </div>

       
          {/* Your main user content goes here */}
          
          <div className="flex justify-center">
            <UserProfile />
        
        </div>
      </div>
    </div>
  );
}

export default UserPage;
