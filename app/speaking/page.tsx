import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Speaking & Media | Enrike Maree",
  description: "Book Enrike Maree for keynote presentations, panel discussions, and workshops on agricultural science communication.",
};

export default function SpeakingPage() {
  const offerings = [
    {
      title: "Keynote Presentations",
      description: "Engaging, research-backed presentations that inspire and educate audiences on agricultural innovation, sustainability, and food systems.",
      duration: "45-60 minutes",
    },
    {
      title: "Panel Discussions",
      description: "Expert moderation and participation in industry panels, bringing nuanced perspectives on agricultural science and policy.",
      duration: "60-90 minutes",
    },
    {
      title: "Workshops & Training",
      description: "Interactive sessions designed to upskill farmers, educators, and industry professionals in science communication and modern agricultural practices.",
      duration: "Half-day or full-day",
    },
    {
      title: "Media Interviews",
      description: "Television, radio, podcast, and print media appearances providing expert commentary on agricultural science topics.",
      duration: "Flexible",
    },
  ];

  const sampleTopics = [
    "The Science Behind Regenerative Agriculture",
    "From Lab to Land: Translating Agricultural Research",
    "Climate-Smart Farming for the 21st Century",
    "The Future of Food: Technology Meets Tradition",
    "Soil Health: The Foundation of Food Security",
    "Bridging the Gap: Farmers, Scientists, and Policy",
    "Decoding Your Dinner: The Farm-to-Fork Journey",
    "AI and Machine Learning in Modern Agriculture",
  ];

  const testimonials = [
    {
      quote: "Enrike's keynote was the highlight of our conference. She made complex agricultural science accessible and inspiring.",
      author: "Dr. Sarah van der Merwe",
      role: "Conference Organizer, AgriTech Summit",
    },
    {
      quote: "Her ability to bridge the gap between research and practice is unmatched. Our farmers left with actionable insights.",
      author: "Johan Pretorius",
      role: "CEO, Farmers' Association",
    },
    {
      quote: "Enrike brings both expertise and heart to every presentation. Truly a thought leader in agricultural communication.",
      author: "Prof. Michael Chen",
      role: "Agricultural Sciences Department",
    },
  ];

  return (
    <main className="min-h-screen bg-[#090B0A] text-soft-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portrait-2.jpg"
            alt="Enrike Maree - Speaking & Media"
            fill
            className="object-cover object-[left_25%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content - Glass Panel */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-[700px] mx-auto lg:mx-0">
            <div className="glass-dark rounded-3xl p-8 md:p-10">
              
              {/* Eyebrow Label */}
              <p className="text-xs md:text-sm uppercase tracking-wider text-soft-white/60 mb-4">
                SPEAKING & MEDIA
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-soft-white">
                Speaking & Media
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-soft-white/90 leading-relaxed mb-8 max-w-xl">
                Enrike brings agricultural science to life through compelling storytelling and 
                evidence-based insights. Whether speaking to industry leaders, farmers, or the 
                general public, she makes complex topics accessible and actionable.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" className="text-base md:text-lg">
                  Book Enrike for Your Event
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  className="text-base md:text-lg"
                >
                  Download Media Kit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="glass-dark rounded-full px-4 py-2 flex items-center gap-2 text-sm">
            <span>Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* What Enrike Offers */}
      <section className="py-20 md:py-24 bg-[#0B0C0B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-soft-white">
            What Enrike Offers
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="glass-dark rounded-3xl p-6 md:p-8 hover:border-white/25 hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#E7D8BA] mb-4">
                  {offering.title}
                </h3>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  {offering.description}
                </p>
                <p className="text-sm text-slate-400">
                  <span className="font-medium">Duration:</span> {offering.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Talk Topics */}
      <section className="py-20 md:py-24 bg-[#090B0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-soft-white">
            Sample Talk Topics
          </h2>
          <p className="text-center text-soft-white/70 mb-12">
            Custom topics available based on your event&apos;s specific needs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {sampleTopics.map((topic) => (
              <div
                key={topic}
                className="glass-dark rounded-full px-6 py-3 text-sm md:text-base text-center text-soft-white hover:border-white/25 hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#101110] to-[#080808]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-soft-white">
            What People Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-dark rounded-3xl p-6 md:p-7 relative"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 left-4 text-6xl font-serif text-white/10 leading-none">
                  &quot;
                </div>
                
                <p className="text-slate-50 italic mb-6 leading-relaxed relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="relative z-10">
                  <p className="text-[#E7D8BA] font-bold mb-1">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-24 bg-[#E7D8BA] text-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Ready to Book Enrike for Your Event?
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Let&apos;s discuss how Enrike can add value to your next event, conference, or media project.
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <Link
                href="/contact"
                className="bg-[#0E3F2D] text-white px-8 py-4 rounded-full font-medium text-center hover:bg-[#0E3F2D]/90 transition-all duration-200 hover:scale-105"
              >
                Request Availability
              </Link>
              <Link
                href="/contact"
                className="border-2 border-charcoal px-8 py-4 rounded-full font-medium text-center hover:bg-charcoal/10 transition-all duration-200"
              >
                Contact Enrike
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#090B0A] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="/" className="text-xl font-serif font-bold text-soft-white hover:text-[#E7D8BA] transition-colors">
                ENRIKE
              </Link>
              <p className="text-xs md:text-sm text-soft-white/60 mt-2">
                © {new Date().getFullYear()} Enrike Maree. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex gap-6 text-xs md:text-sm">
                <Link href="#" className="text-soft-white/60 hover:text-soft-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-soft-white/60 hover:text-soft-white transition-colors">
                  Terms
                </Link>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/enrike-maree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/60 hover:text-soft-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@enrike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/60 hover:text-soft-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/enrike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-white/60 hover:text-soft-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
