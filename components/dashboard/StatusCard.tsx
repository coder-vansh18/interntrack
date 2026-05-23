"use client";

import { motion } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function StatusCard() {
  return (
    <motion.div 
      variants={fadeUp}
      className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Frontend Engineering Intern</h2>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>Vercel</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>San Francisco, CA (Remote)</span>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-semibold">Under Review</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Applied On", value: "Oct 12, 2025" },
            { label: "Last Updated", value: "Today, 10:42 AM" },
            { label: "Recruiter", value: "Sarah Jenkins" },
            { label: "Next Step", value: "Technical Screen" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
              <p className="text-xs font-medium text-slate-500 mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <button className="flex-1 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium py-2.5 rounded-lg border border-white/[0.08] transition-colors flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" />
            View Application
          </button>
          <button className="flex-1 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium py-2.5 rounded-lg border border-white/[0.08] transition-colors flex items-center justify-center gap-2">
            <ExternalLink className="w-4 h-4 text-slate-400" />
            Company Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
}
