"use client";

import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function ServicesSection() {
  const services = [
    {
      title: "Speaking & Keynotes",
      description: "Engaging talks that translate complex agricultural science into compelling narratives for conferences, events, and workshops.",
      features: [
        "Keynote presentations",
        "Panel discussions",
        "Workshop facilitation",
        "Farmer education sessions",
      ],
      href: "/speaking",
    },
    {
      title: "Strategic Consulting",
      description: "Expert guidance for agricultural businesses, NGOs, and organizations looking to improve their science communication.",
      features: [
        "Communication strategy",
        "Content development",
        "Brand positioning",
        "Stakeholder engagement",
      ],
      href: "/consulting",
    },
    {
      title: "Content Creation",
      description: "High-quality, research-backed content that makes agricultural science accessible and actionable for diverse audiences.",
      features: [
        "Educational videos",
        "Articles & blog posts",
        "Social media content",
        "Scientific translations",
      ],
      href: "/resources",
    },
  ];

  return (
    <section className="scroll-section min-w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portrait-standing.jpg"
          alt="Agricultural professional"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-soft-white">
            How Enrike Can Help
          </h2>
          <div className="w-20 h-1 bg-beige-warm rounded-full mx-auto mb-4 md:mb-6" />
          <p className="text-lg md:text-xl text-soft-white/80 max-w-3xl mx-auto px-4">
            Bridging the gap between agricultural research and real-world application
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              className="p-6 md:p-8 hover:scale-105 transition-all duration-300 flex flex-col"
              variant="dark"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 rounded-full bg-beige-warm/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-serif font-bold text-beige-warm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-soft-white mb-4">
                {service.title}
              </h3>

              <p className="text-soft-white/80 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-soft-white/70">
                    <svg className="w-5 h-5 text-beige-warm mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href={service.href} variant="secondary" className="w-full">
                Learn More
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

