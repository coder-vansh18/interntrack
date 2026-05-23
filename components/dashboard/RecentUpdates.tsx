"use client";

import { RECENT_UPDATES } from "@/lib/constants";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

export default function RecentUpdates() {
  return (
    <div className="glass p-6 rounded-2xl h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Recent Activity</h3>
        <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {RECENT_UPDATES.map((update, idx) => {
          const Icon = Icons[update.icon as keyof typeof Icons] as React.ElementType;

          return (
            <div key={idx} className="flex gap-4 group">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/[0.04] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${update.color}15` }}
              >
                <Icon className="w-4 h-4" style={{ color: update.color }} />
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-0.5">{update.title}</h4>
                <p className="text-xs text-slate-400 mb-1">{update.description}</p>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                  {update.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
