"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { successAnimation, fadeUp } from "@/lib/animations";

export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <motion.div
        variants={successAnimation}
        initial="hidden"
        animate="visible"
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
        <CheckCircle2 className="w-24 h-24 text-emerald-400 relative z-10" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
        <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          We've received your application and created your InternTrack profile. 
          You can now monitor your status from the dashboard.
        </p>

        <Link href="/dashboard">
          <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 mx-auto">
            Go to Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
