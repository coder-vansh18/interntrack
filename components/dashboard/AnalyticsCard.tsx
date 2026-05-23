"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface AnalyticsCardProps {
  label: string;
  value: number;
  icon: string;
  color: string;
  suffix?: string;
  delay?: number;
}

export default function AnalyticsCard({ label, value, icon, color, suffix = "", delay = 0 }: AnalyticsCardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className="glass p-5 rounded-2xl relative overflow-hidden group hover:glass-strong transition-all duration-300"
    >
      <div 
        className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: color }}
      />
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div 
          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-white mb-1">
          {value}{suffix}
        </h3>
        <p className="text-sm text-slate-400 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}
