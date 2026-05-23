"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: "violet" | "cyan" | "emerald" | "fuchsia";
  size?: "sm" | "md" | "lg" | "xl";
  blur?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
  duration?: number;
}

export default function GlowOrb({
  color = "violet",
  size = "md",
  blur = "lg",
  className,
  delay = 0,
  duration = 8,
}: GlowOrbProps) {
  const colors = {
    violet: "bg-violet-600/20",
    cyan: "bg-cyan-500/20",
    emerald: "bg-emerald-500/20",
    fuchsia: "bg-fuchsia-500/20",
  };

  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[30rem] h-[30rem]",
  };

  const blurs = {
    sm: "blur-xl",
    md: "blur-2xl",
    lg: "blur-3xl",
    xl: "blur-[100px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4], 
        scale: [1, 1.1, 1],
        x: [0, 20, 0, -20, 0],
        y: [0, -20, 0, 20, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(
        "absolute rounded-full pointer-events-none mix-blend-screen",
        colors[color],
        sizes[size],
        blurs[blur],
        className
      )}
    />
  );
}
