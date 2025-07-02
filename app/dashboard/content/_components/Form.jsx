"use client"
import React from "react";

export default function Form({ selectedTemplate, templateData }) {
  const fallbackTitle =
    selectedTemplate?.replace(/-/g, " ") || "Unknown Template";


  return (
    <div>
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
        <span>{templateData?.icon || "❓"}</span>{" "}
        {templateData?.title || fallbackTitle}
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        {templateData?.description ||
          "Start creating your content using our AI-powered tools."}
      </p>

      <textarea
        className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black min-h-48"
        placeholder={`Describe what you want to generate for ${
          templateData?.title || fallbackTitle
        }`}
      />

     
      <div className="flex justify-center mt-4">
        <button className="w-34 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
          Generate
        </button>
      </div>
    </div>
  );
}
