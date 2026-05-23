"use client";

import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import StaggerReveal, { StaggerItem } from "../animations/StaggerReveal";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current && progressRef.current) {
      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="timeline" className="py-32 relative bg-[#05050a] overflow-hidden">
      <div className="absolute inset-0 noise mix-blend-overlay opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={containerRef}>
        <StaggerReveal className="text-center mb-20">
          <StaggerItem>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Your journey, <span className="text-cyan-400">visualized.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From the first click to the final offer, InternTrack keeps you organized every step of the way.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.04] rounded-full"
          >
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-violet-600 via-cyan-500 to-emerald-500 rounded-full h-0"
              style={{ boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {TIMELINE_STEPS.map((step, idx) => {
              const Icon = Icons[step.icon as keyof typeof Icons] as React.ElementType;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={cn(
                    "relative flex items-center gap-8 md:justify-between",
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-xl bg-[#05050a] border-2 border-white/[0.08] flex items-center justify-center z-10 transition-colors duration-500 group hover:border-violet-500/50">
                    <Icon 
                      className="w-6 h-6 text-slate-400 transition-colors duration-500 group-hover:text-white" 
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={cn(
                    "w-full pl-20 md:pl-0 md:w-1/2",
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  )}>
                    <div className="glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:-translate-y-1">
                      <div className={cn(
                        "text-xs font-bold uppercase tracking-wider mb-2",
                      )} style={{ color: step.color }}>
                        Step {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
