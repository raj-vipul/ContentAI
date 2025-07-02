"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiX, HiMenuAlt2 } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";
import SideNav from "../../../_components/SideNav";
import { templates } from "../../../_components/TemplateGallery";
import Output from "../_components/Output";
import { useParams } from "next/navigation";
import {generateContent} from "../../../actions/generateContent"

export default function NewContent() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const { "template-slug": templateSlug } = params;

  const [textareaContent, setTextareaContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const templateData = templates.find(
    (template) => template.slug === templateSlug?.toLowerCase()
  );

  if (!templateData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">
          Template not found. Please check the URL.
        </p>
      </div>
    );
  }

  const handleGenerateClick = async () => {
    if (!textareaContent.trim()) {
      alert("Please describe what you want to generate.");
      return;
    }

    setLoading(true);
    setAiOutput("");

    try {
      const combinedPrompt = `${templateData.aiprompt}\n\nUser Description: ${textareaContent}`;
      const result = await generateContent(combinedPrompt); // ✅ Direct call to server action
      setAiOutput(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      setAiOutput("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block w-64 border-r bg-white shadow-sm">
        <SideNav />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <HiX className="text-2xl text-gray-600" />
          </button>
        </div>
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <HiMenuAlt2 className="md:hidden text-2xl text-gray-700" />
          </button>
          <Link href="/">
            <h1 className="text-lg font-bold text-gray-800 hover:cursor-pointer">
              Content AI✒️
            </h1>
          </Link>
          <UserButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Input Section */}
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-2 text-gray-800">
              <span>{templateData.icon}</span> {templateData.title}
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              {templateData.description}
            </p>

            <label
              htmlFor="content-textarea"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Content Description:
            </label>
            <textarea
              id="content-textarea"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-48 resize-y"
              placeholder={`Describe what you want to generate for ${templateData.title}...`}
              value={textareaContent}
              onChange={(e) => setTextareaContent(e.target.value)}
            />

            <div className="flex justify-center mt-6">
              <button
                className={`w-auto min-w-[120px] transform rounded-lg px-8 py-3 font-semibold text-white transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:-translate-y-0.5 hover:bg-gray-800 cursor-pointer"
                }`}
                onClick={handleGenerateClick}
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <Output output={aiOutput} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
