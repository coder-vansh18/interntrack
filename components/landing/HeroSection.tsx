"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity } from "lucide-react";
import gsap from "gsap";
import GlowOrb from "../animations/GlowOrb";
import GridBackground from "../animations/GridBackground";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      // Mockup float in
      gsap.from(mockupRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <GridBackground />
      <GlowOrb color="violet" size="lg" blur="xl" className="-top-20 -left-20 opacity-60" />
      <GlowOrb color="cyan" size="lg" blur="xl" className="top-40 -right-20 opacity-40" delay={2} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="hero-text inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-gradient mb-8">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-200">
            InternTrack AI 2.0 is now live
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="hero-text text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
        >
          Track internships with <br className="hidden md:block" />
          <span className="gradient-text">superhuman precision.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-text text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          The ultimate command center for ambitious students. Manage applications, 
          predict outcomes with AI, and land your dream role faster.
        </p>

        {/* CTAs */}
        <div className="hero-text flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link href="/apply" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group relative px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2">
              Start Tracking Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="#features" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/[0.08] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              Explore Features
            </button>
          </Link>
        </div>

        {/* Mockup Preview */}
        <div 
          ref={mockupRef}
          className="w-full max-w-5xl rounded-2xl glass-strong border border-white/[0.12] p-2 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent z-20 rounded-2xl" />
          <div className="w-full aspect-video rounded-xl bg-[#0a0a0f] border border-white/[0.06] overflow-hidden relative flex flex-col">
            {/* Mockup Header */}
            <div className="h-12 border-b border-white/[0.06] flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="ml-4 h-6 w-64 bg-white/[0.03] rounded-md" />
            </div>
            {/* Mockup Body */}
            <div className="flex-1 flex p-4 gap-4">
              {/* Sidebar skeleton */}
              <div className="w-48 hidden md:flex flex-col gap-3">
                <div className="h-8 w-full bg-white/[0.03] rounded-md" />
                <div className="h-8 w-3/4 bg-white/[0.03] rounded-md" />
                <div className="h-8 w-5/6 bg-white/[0.03] rounded-md" />
              </div>
              {/* Main content skeleton */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="h-24 flex-1 bg-gradient-to-br from-violet-600/20 to-transparent border border-violet-500/20 rounded-xl" />
                  <div className="h-24 flex-1 bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/20 rounded-xl" />
                  <div className="h-24 flex-1 bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/20 rounded-xl" />
                </div>
                <div className="flex-1 bg-white/[0.02] border border-white/[0.04] rounded-xl" />
              </div>
            </div>
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none mix-blend-overlay opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
