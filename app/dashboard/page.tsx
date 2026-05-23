"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, LayoutDashboard, Send, FileText, Settings, Bell, LogOut, Search } from "lucide-react";
import StatusCard from "@/components/dashboard/StatusCard";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import TimelineTracker from "@/components/dashboard/TimelineTracker";
import ProfileStrength from "@/components/dashboard/ProfileStrength";
import RecentUpdates from "@/components/dashboard/RecentUpdates";
import { DASHBOARD_STATS } from "@/lib/constants";
import { staggerContainerFast } from "@/lib/animations";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#05050a] flex text-white font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/[0.06] bg-[#05050a]/50 glass sticky top-0 h-screen">
        <div className="h-16 flex items-center px-6 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-semibold tracking-tight text-white">
              Intern<span className="text-violet-400">Track</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Send, label: "Applications", active: false },
            { icon: FileText, label: "Documents", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-white/[0.08] text-white" 
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.06] space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-white/[0.04] hover:text-white transition-all">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-white/[0.04] hover:text-white transition-all">
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto overflow-x-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/[0.06] sticky top-0 z-20 bg-[#05050a]/80 backdrop-blur-xl">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search applications..." 
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-full py-1.5 pl-9 pr-4 text-sm outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
              <Bell className="w-4 h-4 text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold border border-white/[0.1] shadow-lg">
              JS
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-slate-400 text-sm">Here's what's happening with your applications today.</p>
          </div>

          <motion.div 
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
          >
            {DASHBOARD_STATS.map((stat, idx) => (
              <AnalyticsCard 
                key={stat.label} 
                {...stat} 
                delay={idx * 0.1}
              />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <StatusCard />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProfileStrength score={85} />
                <div className="glass p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Resume V3.pdf</h3>
                  <p className="text-xs text-slate-500 mb-3">Updated 2 days ago</p>
                  <button className="text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] px-4 py-1.5 rounded-full transition-colors">
                    Update Resume
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 lg:col-span-1">
              <TimelineTracker currentStatusIndex={1} />
              <RecentUpdates />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
