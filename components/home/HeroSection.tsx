"use client";

import Image from "next/image";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

export default function HeroSection() {
  return (
    <section className="scroll-section min-w-full h-screen flex items-end relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portrait-3.jpg"
          alt="Enrike Maree"
          fill
          className="object-cover object-[center_20%]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-16 pt-32">
        <div className="w-full">
          {/* Title Outside Block */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight">
              <span className="text-forest-medium">Decoding Your Dinner</span>
              <br />
              <span className="text-soft-white">Clarity from Farm to Fork</span>
            </h1>
          </div>

          {/* Single Block at Bottom */}
          <GlassCard className="p-8 lg:p-10 w-full" variant="dark">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Description and CTAs */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-soft-white/90 leading-relaxed">
                  Join Enrike as she investigates the entire food chain—from the microscopic world of 
                  genetics and AI all the way through to cold chain logistics and the final meal. 
                  See the whole process, with heart.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button href="/speaking" variant="primary">
                    Book Enrike to Speak
                  </Button>
                  <Button href="/consulting" variant="secondary">
                    Work With Enrike
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/in/enrike-maree" },
                    { name: "YouTube", url: "https://www.youtube.com/@enrike" },
                    { name: "Instagram", url: "https://www.instagram.com/enrike" },
                    { name: "Twitter", url: "https://twitter.com/enrike" },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-3 md:px-4 py-2 rounded-full text-xs md:text-sm hover:bg-white/20 transition-all"
                      aria-label={platform.name}
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Navigation Menu */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-beige-warm/80 uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/speaking"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          Speaking & Media
                        </a>
                      </li>
                      <li>
                        <a
                          href="/consulting"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          Strategic Consulting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-beige-warm/80 uppercase tracking-wider">Learn More</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/resources"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          Resources & Content
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          Get in Touch
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-beige-warm/80 uppercase tracking-wider">Related</h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://agrisynn.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          AgriSynn.App
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://agreetothisagri.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          AgreetothisAgri.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://goalsciences.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft-white/70 hover:text-soft-white transition-colors text-sm"
                        >
                          GoalSciences.org
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 right-8 glass px-4 py-2 rounded-full items-center gap-2">
        <span className="text-sm">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}
