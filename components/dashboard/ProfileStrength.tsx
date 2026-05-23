"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface ProfileStrengthProps {
  score: number;
}

export default function ProfileStrength({ score }: ProfileStrengthProps) {
  const isStrong = score >= 80;
  const color = isStrong ? "#10b981" : "#f59e0b";

  return (
    <div className="glass p-6 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 251.2" }}
              animate={{ strokeDasharray: `${(score / 100) * 251.2} 251.2` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </svg>
          <div className="absolute text-sm font-bold text-white flex items-center justify-center">
            {score}%
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
            Profile Strength
            {isStrong && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
          </h3>
          <p className="text-xs text-slate-400">
            {isStrong 
              ? "Your profile is highly competitive." 
              : "Add more details to boost your score."}
          </p>
        </div>
      </div>
      
      {!isStrong && (
        <button className="text-xs font-semibold text-violet-400 bg-violet-500/10 hover:bg-violet-500/20 px-3 py-1.5 rounded-full transition-colors border border-violet-500/20">
          Improve
        </button>
      )}
    </div>
  );
}
