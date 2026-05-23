"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const progress = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="sticky top-0 z-40 bg-[#05050a]/90 backdrop-blur-xl border-b border-white/[0.06] py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Circular Progress */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="6"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 251.2" }}
              animate={{ strokeDasharray: `${(progress / 100) * 251.2} 251.2` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-xs font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Application Profile</h2>
          <p className="text-xs text-slate-400">Step {currentStep} of {totalSteps}</p>
        </div>
      </div>

      {/* Stepper Dots (Desktop) */}
      <div className="hidden md:flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={stepNum} className="flex items-center">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                  isCompleted ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                  isCurrent ? "bg-violet-600 border border-violet-500 shadow-[0_0_15px_rgba(124,58,237,0.4)] text-white" :
                  "bg-white/[0.04] text-slate-500 border border-white/[0.08]"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
              </div>
              {stepNum < totalSteps && (
                <div className={cn(
                  "w-8 h-[2px] mx-1 transition-colors duration-300",
                  isCompleted ? "bg-emerald-500/30" : "bg-white/[0.04]"
                )} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
