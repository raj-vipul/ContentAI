"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaBlog, FaYoutube, FaLightbulb, FaRegFileAlt, FaInstagram } from "react-icons/fa";
import Link from "next/link";




export const templates = [
  {
    slug: "blog-title",
    icon: <FaBlog size={28} className="text-red-500" />,
    title: "Blog Title",
    description:
      "An AI tool that generates blog titles based on your blog info.",
    aiprompt:
      "Generate a list of 5 blog title ideas in bullet points based on the user's description. Make them catchy and optimized for SEO.",
  },
  {
    slug: "blog-content",
    icon: <FaRegFileAlt size={28} className="text-yellow-600" />,
    title: "Blog Content",
    description:
      "Generate full blog posts with catchy, engaging, and viral content.",
    aiprompt:
      "Generate a comprehensive and engaging blog post based on the user's detailed outline or topic. Ensure it's well-structured and easy to read.",
  },
  {
    slug: "blog-topic-ideas",
    icon: <FaLightbulb size={28} className="text-yellow-400" />,
    title: "Blog Topic Ideas",
    description: "Brainstorm unique and viral blog topic ideas using AI power.",
    aiprompt:
      "Brainstorm 5 unique, viral, and engaging blog topic ideas in bullet points, suitable for the given subject. Include a brief description for each.",
  },
  {
    slug: "youtube-seo-title",
    icon: <FaYoutube size={28} className="text-red-600" />,
    title: "YouTube SEO Title",
    description:
      "Generate compelling YouTube titles to boost click-through rates.",
    aiprompt:
      "Generate 5 compelling and SEO-optimized YouTube titles that will boost click-through rates for a video described by the user.",
  },
  {
    slug: "video-description",
    icon: <FaYoutube size={28} className="text-pink-600" />,
    title: "Video Description",
    description:
      "Create optimized video descriptions for better YouTube visibility.",
    aiprompt:
      "Create an optimized video description for a YouTube video based on the user's input. Include keywords for better visibility.",
  },
  {
    slug: "product-description",
    icon: <FaRegFileAlt size={28} className="text-blue-500" />,
    title: "Product Description",
    description:
      "Auto-generate clean and attractive product descriptions for your store.",
    aiprompt:
      "Generate a clean, attractive, and concise product description for an e-commerce store, based on the product details provided by the user.",
  },
  {
    slug: "youtube-description-generator",
    icon: <FaYoutube size={28} className="text-red-600" />,
    title: "YouTube Description Generator",
    description:
      "Craft engaging YouTube video descriptions that increase watch time and drive subscriptions.",
    aiprompt:
      "Craft an engaging and detailed YouTube video description that encourages watch time and subscriptions, based on the user's video topic.",
  },
  {
    slug: "youtube-tag-recommender",
    icon: <FaYoutube size={28} className="text-pink-600" />,
    title: "YouTube Tag Recommender",
    description:
      "Boost your video discoverability with AI-curated, trending tags tailored to your content.",
    aiprompt:
      "Recommend a list of 10 AI-curated, trending, and relevant YouTube tags for a video based on the user's content description.",
  },
  {
    slug: "ai-article-rewriter",
    icon: <FaRegFileAlt size={28} className="text-yellow-500" />,
    title: "AI Article Rewriter",
    description:
      "Rephrase and restructure existing content to avoid plagiarism and improve originality.",
    aiprompt:
      "Rephrase and restructure the provided article content to avoid plagiarism and improve originality, while maintaining the core meaning.",
  },
  {
    slug: "smart-text-enhancer",
    icon: <FaRegFileAlt size={28} className="text-gray-700" />,
    title: "Smart Text Enhancer",
    description:
      "Clean up your writing with improved grammar, clarity, and tone using intelligent AI suggestions.",
    aiprompt:
      "Enhance the provided text by improving grammar, clarity, conciseness, and overall tone. Provide the revised text.",
  },
  {
    slug: "emoji-text-styler",
    icon: <span className="text-2xl">😻</span>,
    title: "Emoji Text Styler",
    description:
      "Automatically enrich your messages with fun, expressive emojis based on tone and context.",
    aiprompt:
      "Enrich the given message with fun, expressive, and contextually appropriate emojis. Ensure the emojis enhance the message's tone.",
  },
  {
    slug: "instagram-caption-creator",
    icon: <FaInstagram size={28} className="text-pink-500" />,
    title: "Instagram Caption Creator",
    description:
      "Generate scroll-stopping Instagram captions tailored to your niche and audience.",
    aiprompt:
      "Generate 3-5 scroll-stopping Instagram captions tailored to the user's niche and audience, based on their description.",
  },
  {
    slug: "hashtag-generator",
    icon: <span className="text-2xl text-orange-400">#</span>,
    title: "Hashtag Generator",
    description:
      "Discover high-performing hashtags to extend your content’s reach across Instagram and Twitter.",
    aiprompt:
      "Generate a list of 10 high-performing and relevant hashtags to extend content reach across Instagram and Twitter, based on the user's topic.",
  },
  {
    slug: "grammar-spell-checker",
    icon: <span className="text-2xl font-bold text-purple-600">Aa</span>,
    title: "Grammar & Spell Checker",
    description:
      "Detect and correct grammar, punctuation, and spelling issues in your writing instantly.",
    aiprompt:
      "Review the provided text and correct any grammar, punctuation, and spelling issues. Provide the corrected text.",
  },
  {
    slug: "startup-pitch-generator",
    icon: <FaRegFileAlt size={28} className="text-indigo-600" />,
    title: "Startup Pitch Generator",
    description:
      "Instantly draft compelling startup pitches that impress investors and stakeholders.",
    aiprompt:
      "Draft a compelling startup pitch (brief elevator pitch and a slightly longer summary) based on the user's startup description and target audience.",
  },
  {
    slug: "resume-summary-writer",
    icon: <FaRegFileAlt size={28} className="text-green-600" />,
    title: "Resume Summary Writer",
    description:
      "Summarize your resume into a powerful pitch to grab recruiter attention in seconds.",
    aiprompt:
      "Write a powerful and concise resume summary (3-5 sentences) based on the user's provided resume details and job target.",
  },
  {
    slug: "linkedin-post-generator",
    icon: <FaRegFileAlt size={28} className="text-teal-500" />,
    title: "LinkedIn Post Generator",
    description:
      "Write professional, engaging posts to grow your presence and influence on LinkedIn.",
    aiprompt:
      "Generate a professional and engaging LinkedIn post based on the user's topic or update, aiming to grow presence and influence.",
  },
  {
    slug: "quora-answer-writer",
    icon: <FaRegFileAlt size={28} className="text-rose-500" />,
    title: "Quora Answer Writer",
    description:
      "Answer questions on Quora with intelligent, helpful responses generated by AI.",
    aiprompt:
      "Write an intelligent, helpful, and comprehensive answer to the provided Quora question, based on the user's specified expertise or information.",
  },
];

export default function TemplateGallery() {
  const [search, setSearch] = useState("");

  const filteredTemplates = templates.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white">
      {/* Gradient Header */}
      <div className="w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-12 px-4 text-center rounded-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold">Browse All Templates</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300">
          What would you like to create today?
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-2 pl-10 pr-4 rounded-lg bg-white text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Template Grid */}
      <div className="px-4 py-10 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (

        <Link
                  href={`/dashboard/content/${template.title
              .toLowerCase()
              .replace(/\s+/g, "-")
             .replace(/[^\w-]/g, "")}`}
                key={index}
>
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-3">{template.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {template.description}
              </p>
            </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}
