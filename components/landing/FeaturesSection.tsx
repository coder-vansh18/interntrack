"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import StaggerReveal, { StaggerItem } from "../animations/StaggerReveal";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative bg-[#05050a]">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerReveal className="text-center mb-20">
          <StaggerItem>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Everything you need to <span className="text-violet-400">succeed.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A complete toolkit designed to give you an unfair advantage in the
              highly competitive tech internship market.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
            const isLarge = idx === 0 || idx === 3;

            return (
              <StaggerItem
                key={feature.title}
                className={cn(
                  "group relative rounded-2xl glass p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:glass-strong",
                  isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                )}
                style={{
                  boxShadow: `0 0 0px ${feature.glow}`,
                }}
              >
                {/* Background glow on hover */}
                <div 
                  className={cn(
                    "absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl",
                    feature.gradient
                  )} 
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      {feature.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
