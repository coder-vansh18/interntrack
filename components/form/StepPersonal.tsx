"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";

interface StepPersonalProps {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

export default function StepPersonal({ data, updateData, errors }: StepPersonalProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Personal Details</h3>
        <p className="text-slate-400 text-sm">Let's start with the basics.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
          <input
            type="text"
            className={`premium-input ${errors.fullName ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
            placeholder="John Doe"
            value={data.fullName || ""}
            onChange={(e) => updateData({ fullName: e.target.value })}
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              className={`premium-input ${errors.email ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
              placeholder="john@example.com"
              value={data.email || ""}
              onChange={(e) => updateData({ email: e.target.value })}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
            <input
              type="tel"
              className="premium-input"
              placeholder="+1 (555) 000-0000"
              value={data.phone || ""}
              onChange={(e) => updateData({ phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">LinkedIn URL</label>
          <input
            type="url"
            className="premium-input"
            placeholder="https://linkedin.com/in/johndoe"
            value={data.linkedin || ""}
            onChange={(e) => updateData({ linkedin: e.target.value })}
          />
        </div>

        <div className="pt-2">
          <FileUpload 
            label="Resume / CV" 
            onUpload={(file) => updateData({ resumeFile: file })} 
          />
          {errors.resumeFile && <p className="text-red-400 text-xs mt-1">{errors.resumeFile}</p>}
        </div>
      </div>
    </div>
  );
}
