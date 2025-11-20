"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function AboutSection() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data?.about || null))
      .catch(() => {
        setContent({
          title: "About Enrike",
          description: "Enrike Maree is an agricultural science communicator and thought leader dedicated to bridging the gap between complex research and practical farming solutions. With over a decade of experience translating scientific innovations into accessible insights for farmers, industry professionals, and policymakers, she continues to decode the complex world of modern agriculture through her platform—formerly known as AgreeToThisAgri, now rebranded as Enrike.co.za—with clarity, credibility, and curiosity.",
          backgroundImage: "/images/arms-up.jpg",
          backgroundPosition: "right_center"
        });
      });
  }, []);

  if (!content) {
    return <div className="scroll-section min-w-full h-screen" />;
  }

  return (
    <section className="scroll-section min-w-full h-screen flex items-end relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage || "/images/arms-up.jpg"}
          alt="Enrike Maree - Agricultural Science Communicator"
          fill
          className="object-cover"
          style={{ objectPosition: content.backgroundPosition || "right center" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 pt-32">
        <div className="w-full">
          <GlassCard className="p-8 lg:p-10 w-full" variant="dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Body Text (50%) */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-soft-white">
                    {content.title}
                  </h2>
                  <div className="w-20 h-1 bg-beige-warm rounded-full mb-6" />
                </div>

                <p className="text-base md:text-lg text-soft-white/90 leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Right: Navigation Buttons (50%) */}
              <div className="flex flex-col justify-end gap-2.5">
                <h3 className="text-xl md:text-2xl font-serif text-beige-warm mb-3">Explore</h3>
                <Button href="/speaking" variant="secondary" className="w-full !text-left !py-2 !px-4 text-sm !rounded-lg hover:!scale-100">
                  Speaking & Media
                </Button>
                <Button href="/consulting" variant="secondary" className="w-full !text-left !py-2 !px-4 text-sm !rounded-lg hover:!scale-100">
                  Strategic Consulting
                </Button>
                <Button href="/resources" variant="secondary" className="w-full !text-left !py-2 !px-4 text-sm !rounded-lg hover:!scale-100">
                  Resources & Content
                </Button>
                <Button href="/contact" variant="primary" className="w-full !text-left !py-2 !px-4 text-sm !rounded-lg hover:!scale-100 mt-1">
                  Get in Touch
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
