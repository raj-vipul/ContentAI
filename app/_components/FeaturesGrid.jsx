const features = [
  {
    icon: "🧩",
    title: "25+ Templates",
    description:
      "Responsive and mobile-friendly content templates for every use case.",
    link: "#",
  },
  {
    icon: "🤖",
    title: "AI-Powered Content",
    description:
      "Generate high-quality blogs, landing pages, and product copy instantly.",
    link: "#",
  },
  {
    icon: "📈",
    title: "SEO Optimized",
    description:
      "Built-in SEO best practices to help your content rank faster.",
    link: "#",
  },
  {
    icon: "🕒",
    title: "24×7 Support",
    description: "We are always there to listen to your queries and help you.",
    link: "#",
  },
  
];

export default function FeaturesGrid() {
  return (
    <div className="bg-white py-16 px-4 mt-0 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            <a
              href={feature.link}
              className="text-sm text-gray-800 mt-4 inline-block hover:underline"
            >
              Learn more &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
