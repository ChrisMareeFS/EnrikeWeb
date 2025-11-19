"use client";

import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function FeaturedContentSection() {
  const contentTypes = [
    {
      type: "Videos",
      icon: "🎥",
      description: "Visual deep-dives into agricultural science topics",
      examples: [
        "Soil Microbiome Explained",
        "Climate-Smart Farming Practices",
        "Farm-to-Fork Journey",
      ],
    },
    {
      type: "Articles",
      icon: "📝",
      description: "In-depth written analyses and insights",
      examples: [
        "The Future of Regenerative Agriculture",
        "Understanding Carbon Farming",
        "Tech Innovation in Agri",
      ],
    },
    {
      type: "Podcasts",
      icon: "🎙️",
      description: "Conversations with industry leaders and researchers",
      examples: [
        "Farmer Stories Series",
        "Research Spotlight",
        "Policy & Practice",
      ],
    },
    {
      type: "Resources",
      icon: "📚",
      description: "Educational materials for farmers and students",
      examples: [
        "Beginner's Guide to Soil Health",
        "Sustainable Practices Toolkit",
        "Industry Reports",
      ],
    },
  ];

  return (
    <section className="scroll-section min-w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portrait-arms.jpg"
          alt="Agricultural landscape"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-soft-white">
            Content & Resources
          </h2>
          <div className="w-20 h-1 bg-beige-warm rounded-full mx-auto mb-4 md:mb-6" />
          <p className="text-lg md:text-xl text-soft-white/80 max-w-3xl mx-auto px-4">
            Formerly <span className="text-beige-warm font-medium">AgreeToThisAgri</span>, now continuing 
            to provide valuable agricultural insights and education
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {contentTypes.map((content) => (
            <GlassCard
              key={content.type}
              className="p-6 hover:scale-105 transition-all duration-300"
              variant="dark"
            >
              <div className="text-4xl mb-4">{content.icon}</div>
              
              <h3 className="text-xl font-serif font-bold text-soft-white mb-2">
                {content.type}
              </h3>
              
              <p className="text-sm text-soft-white/70 mb-4">
                {content.description}
              </p>

              <ul className="space-y-1 text-xs text-soft-white/60">
                {content.examples.map((example) => (
                  <li key={example} className="truncate">• {example}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlassCard className="inline-block px-8 py-6" variant="dark">
            <p className="text-lg text-soft-white/90 mb-4">
              Explore the full library of agricultural insights
            </p>
            <Button href="/resources" variant="primary">
              View All Resources
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

