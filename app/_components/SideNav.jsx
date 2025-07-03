"use client"
import { useState } from "react";
import {
  FiHome,
  FiFileText,
  FiSettings,
  FiUser,
  FiHelpCircle,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { MdHistory, MdSupportAgent } from "react-icons/md";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { label: "Dashboard", icon: <FiHome />, href: "/dashboard" },
  { label: "Templates", icon: <FiFileText />, href: "/dashboard" },

  { label: "History", icon: <MdHistory />, href: "/support" },

  { label: "Settings", icon: <FiSettings />, href: "/userprofile" },
  { label: "Help", icon: <FiHelpCircle />, href: "/help" },
];

export default function SideNav() {
  const pathname = usePathname();
 
  return (
    <div className="  h-screen w-60 bg-white border-r border-gray-200 shadow-md p-4 flex flex-col">
      <div className="mb-8 hover:cursor-pointer  rounded-lg hover:scale-105 transition-all ">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Content<span className="text-black">AI</span>
        </h1>
        <p className="text-sm text-gray-500">Content Generator</p>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) =>{
          const isActive = pathname === item.href;
          return (
          <Link key={item.label} href={item.href} passHref>
            <button
             
              className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span className="text-xl transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">
                {item.label}
              </span>
            </button>
          </Link>
        );
      })}
        <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100 transition-all">
          MyProfile <FiUser className="text-xl" />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Powered by <span className="text-black font-semibold">vplraj</span>
        </p>
      </div>
    </div>
  );
}
