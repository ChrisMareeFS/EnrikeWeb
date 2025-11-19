"use client";

import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function AboutSection() {
  return (
    <section className="scroll-section min-w-full h-screen flex items-end relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arms-up.jpg"
          alt="Enrike Maree - Agricultural Science Communicator"
          fill
          className="object-cover object-[right_center]"
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
                    About Enrike
                  </h2>
                  <div className="w-20 h-1 bg-beige-warm rounded-full mb-6" />
                </div>

                <p className="text-base md:text-lg text-soft-white/90 leading-relaxed">
                  Enrike Maree is an agricultural science communicator and thought leader dedicated to bridging the gap between complex research and practical farming solutions. With over a decade of experience translating scientific innovations into accessible insights for farmers, industry professionals, and policymakers, she continues to decode the complex world of modern agriculture through her platform—formerly known as <span className="text-beige-warm font-medium">AgreeToThisAgri</span>, now rebranded as <span className="text-beige-warm font-medium">Enrike.co.za</span>—with clarity, credibility, and curiosity.
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
