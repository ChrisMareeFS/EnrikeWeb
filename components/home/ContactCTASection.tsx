"use client";

import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Image from "next/image";

export default function ContactCTASection() {
  return (
    <section className="scroll-section min-w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portrait-1.jpg"
          alt="Agricultural professional"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="max-w-2xl">
            <GlassCard className="p-8 md:p-12 lg:p-16" variant="dark">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 md:mb-6 text-soft-white">
            Let&apos;s Work Together
          </h2>
          
          <div className="w-20 h-1 bg-beige-warm rounded-full mx-auto mb-6 md:mb-8" />

          <p className="text-lg md:text-xl text-soft-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re looking for a speaker who can captivate your audience, a consultant 
            to guide your agricultural communication strategy, or a science communicator to 
            translate complex research—let&apos;s connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button href="/contact" variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              Get in Touch
            </Button>
            <Button href="/speaking" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
              Book a Speaking Engagement
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-soft-white/70">
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:enrike@enrike.co.za" className="hover:text-beige-warm transition-colors">
                enrike@enrike.co.za
              </a>
            </p>
            
            <div className="flex gap-6 justify-center pt-4">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/enrike-maree" },
                { name: "YouTube", url: "https://www.youtube.com/@enrike" },
                { name: "Instagram", url: "https://www.instagram.com/enrike" },
                { name: "Twitter", url: "https://twitter.com/enrike" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/70 hover:text-beige-warm transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
