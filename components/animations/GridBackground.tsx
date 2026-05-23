"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  fadeEdge?: boolean;
}

export default function GridBackground({ className, fadeEdge = true }: GridBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none", className)}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {fadeEdge && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/80 to-transparent" />
      )}
      <div className="absolute inset-0 noise mix-blend-overlay opacity-30" />
    </div>
  );
}
