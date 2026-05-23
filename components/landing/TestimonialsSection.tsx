"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import StaggerReveal, { StaggerItem } from "../animations/StaggerReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative bg-[#05050a] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <StaggerReveal className="text-center mb-20">
          <StaggerItem>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Loved by <span className="text-emerald-400">top talent.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              See how students are using InternTrack to land offers at the world's most innovative companies.
            </p>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem
              key={testimonial.name}
              className="glass p-6 rounded-2xl flex flex-col justify-between hover:glass-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
