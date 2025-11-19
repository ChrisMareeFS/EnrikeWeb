"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    requestType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Enrike will be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#090B0A] text-soft-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/field-wide.jpg"
            alt="Enrike Maree - Contact"
            fill
            className="object-cover object-right"
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
                GET IN TOUCH
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-soft-white">
                Let&apos;s Connect
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-soft-white/90 leading-relaxed mb-8 max-w-xl">
                Whether you&apos;re looking to book a speaker, explore consulting opportunities, or 
                collaborate on an agricultural communication project—let&apos;s start a conversation.
              </p>
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

      {/* Contact Form Section */}
      <section className="py-20 md:py-24 bg-[#0B0C0B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-dark rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-serif font-bold mb-6 text-soft-white">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-soft-white placeholder-slate-400 focus:outline-none focus:border-[#E7D8BA] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-200 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-soft-white placeholder-slate-400 focus:outline-none focus:border-[#E7D8BA] transition-colors"
                      placeholder="Your Company or Organization"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-soft-white placeholder-slate-400 focus:outline-none focus:border-[#E7D8BA] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Request Type */}
                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-slate-200 mb-2">
                      Type of Request *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      required
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-soft-white focus:outline-none focus:border-[#E7D8BA] transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="media">Media Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-soft-white placeholder-slate-400 focus:outline-none focus:border-[#E7D8BA] transition-colors resize-none"
                      placeholder="Tell me more about your project or event..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Quick Links */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="glass-dark rounded-3xl p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-soft-white">
                  Direct Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#E7D8BA] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-slate-200 text-sm font-medium">Email</p>
                      <a href="mailto:enrike@enrike.co.za" className="text-[#E7D8BA] hover:text-[#E7D8BA]/80 transition-colors">
                        enrike@enrike.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#E7D8BA] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-slate-200 text-sm font-medium">Location</p>
                      <p className="text-slate-300 text-sm">South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-dark rounded-3xl p-6">
                <h3 className="text-xl font-serif font-bold mb-4 text-soft-white">
                  Connect on Social
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/in/enrike-maree", handle: "@enrikemaree" },
                    { name: "YouTube", url: "https://www.youtube.com/@enrike", handle: "@EnrikeMaree" },
                    { name: "Instagram", url: "https://www.instagram.com/enrike", handle: "@enrike.agri" },
                    { name: "Twitter", url: "https://twitter.com/enrike", handle: "@EnrikeMaree" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <span className="text-slate-200 font-medium">{social.name}</span>
                      <span className="text-slate-400 text-sm group-hover:text-[#E7D8BA] transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-dark rounded-3xl p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-soft-white">
                  Response Time
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I typically respond to inquiries within 48 hours. For urgent speaking or media 
                  requests, please mention this in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-[#090B0A]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-soft-white">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What is your speaking fee?",
                answer: "Speaking fees vary based on the event type, location, and requirements. Please contact me with details about your event for a customized quote.",
              },
              {
                question: "Do you travel for speaking engagements?",
                answer: "Yes, I'm available for national and international engagements. Travel and accommodation arrangements can be discussed based on your event needs.",
              },
              {
                question: "What's the typical turnaround time for consulting projects?",
                answer: "Project timelines vary depending on scope and complexity. Most consulting engagements range from 2-12 weeks. We'll establish clear timelines during our initial consultation.",
              },
              {
                question: "Can you customize content for our specific audience?",
                answer: "Absolutely! All presentations and content are tailored to your audience's needs, knowledge level, and interests. That's what makes science communication effective.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-dark rounded-3xl p-6"
              >
                <h3 className="text-lg font-serif font-bold text-[#E7D8BA] mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
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
                Ready to Start a Conversation?
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Whether you have a question, a project idea, or want to explore how we can work together, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Right: Button */}
            <div>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("name")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0E3F2D] text-white px-8 py-4 rounded-full font-medium text-center block hover:bg-[#0E3F2D]/90 transition-all duration-200 hover:scale-105"
              >
                Send a Message
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
