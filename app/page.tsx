"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedContentSection from "@/components/home/FeaturedContentSection";
import ContactCTASection from "@/components/home/ContactCTASection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "content", label: "Content" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.clientWidth;
      const currentSection = Math.round(scrollLeft / sectionWidth);
      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const sectionWidth = container.clientWidth;
    container.scrollTo({
      left: sectionWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Section Navigation */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 md:gap-2 glass px-4 md:px-6 py-2 md:py-3 rounded-full">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-beige-warm w-6 md:w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="horizontal-scroll flex h-screen overflow-x-auto overflow-y-hidden touch-pan-x"
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedContentSection />
        <ContactCTASection />
      </div>
    </>
  );
}

