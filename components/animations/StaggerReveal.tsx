"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function StaggerReveal({ children, className, style }: StaggerRevealProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: StaggerRevealProps) {
  return (
    <motion.div variants={fadeUp} className={className} style={style}>
      {children}
    </motion.div>
  );
}
