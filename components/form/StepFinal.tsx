"use client";

import { PREFERRED_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StepFinalProps {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

export default function StepFinal({ data, updateData, errors }: StepFinalProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Final Details</h3>
        <p className="text-slate-400 text-sm">Almost there. Tell us about your preferences.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Role</label>
          <div className="relative">
            <select
              className={cn(
                "premium-input appearance-none cursor-pointer",
                errors.role && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
              )}
              value={data.role || ""}
              onChange={(e) => updateData({ role: e.target.value })}
            >
              <option value="" disabled className="bg-[#05050a] text-slate-500">Select a role...</option>
              {PREFERRED_ROLES.map((role) => (
                <option key={role} value={role} className="bg-[#05050a] text-white">
                  {role}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Availability Date</label>
          <input
            type="date"
            className="premium-input [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.6]"
            value={data.availability || ""}
            onChange={(e) => updateData({ availability: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Why Join Us?</label>
          <textarea
            className="premium-input min-h-[100px] resize-y"
            placeholder="What excites you about this opportunity?"
            value={data.whyJoin || ""}
            onChange={(e) => updateData({ whyJoin: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Additional Notes</label>
          <textarea
            className="premium-input min-h-[80px] resize-y"
            placeholder="Anything else you'd like us to know? (Optional)"
            value={data.notes || ""}
            onChange={(e) => updateData({ notes: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
