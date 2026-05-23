"use client";

import { motion } from "framer-motion";
import { APPLICATION_STATUSES } from "@/lib/constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineTrackerProps {
  currentStatusIndex: number;
}

export default function TimelineTracker({ currentStatusIndex }: TimelineTrackerProps) {
  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-lg font-bold text-white mb-6">Application Journey</h3>
      
      <div className="relative pl-3 space-y-8">
        {/* Vertical line background */}
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/[0.05]" />
        
        {/* Animated progress line */}
        <motion.div 
          className="absolute left-[27px] top-4 w-[2px] bg-gradient-to-b from-violet-500 to-cyan-500"
          initial={{ height: 0 }}
          animate={{ height: `${(currentStatusIndex / (APPLICATION_STATUSES.length - 1)) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />

        {APPLICATION_STATUSES.map((status, index) => {
          const isCompleted = index < currentStatusIndex;
          const isCurrent = index === currentStatusIndex;
          const isPending = index > currentStatusIndex;

          return (
            <div key={status.key} className="relative flex items-center gap-6 group">
              <div 
                className={cn(
                  "relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  isCompleted ? "bg-violet-600 border-violet-600 shadow-[0_0_15px_rgba(124,58,237,0.4)]" :
                  isCurrent ? "bg-[#05050a] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]" :
                  "bg-[#05050a] border-white/[0.1]"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" />
                ) : isCurrent ? (
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                ) : null}
              </div>

              <div>
                <h4 className={cn(
                  "text-sm font-semibold transition-colors duration-300",
                  isCompleted ? "text-white" :
                  isCurrent ? "text-cyan-400" :
                  "text-slate-500"
                )}>
                  {status.label}
                </h4>
                {isCompleted && <p className="text-xs text-slate-400 mt-0.5">Completed</p>}
                {isCurrent && <p className="text-xs text-cyan-500/70 mt-0.5">In Progress</p>}
                {isPending && <p className="text-xs text-slate-600 mt-0.5">Pending</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
