"use client";

import SkillsInput from "./SkillsInput";
import FileUpload from "./FileUpload";

interface StepProjectsProps {
  data: any;
  updateData: (data: any) => void;
  errors: Record<string, string>;
}

export default function StepProjects({ data, updateData, errors }: StepProjectsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Projects & Skills</h3>
        <p className="text-slate-400 text-sm">Show us what you're capable of.</p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">GitHub / Gitlab URL</label>
            <input
              type="url"
              className="premium-input"
              placeholder="https://github.com/johndoe"
              value={data.github || ""}
              onChange={(e) => updateData({ github: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Portfolio URL</label>
            <input
              type="url"
              className="premium-input"
              placeholder="https://johndoe.dev"
              value={data.portfolio || ""}
              onChange={(e) => updateData({ portfolio: e.target.value })}
            />
          </div>
        </div>

        <div>
          <SkillsInput
            label="Technical Skills"
            value={data.skills || []}
            onChange={(skills) => updateData({ skills })}
            placeholder="e.g. React, TypeScript, Node.js..."
          />
          {errors.skills && <p className="text-red-400 text-xs mt-1">{errors.skills}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Experience Summary</label>
          <textarea
            className="premium-input min-h-[120px] resize-y"
            placeholder="Briefly describe your most impactful project or relevant experience..."
            value={data.experience || ""}
            onChange={(e) => updateData({ experience: e.target.value })}
          />
        </div>

        <div className="pt-2">
          <FileUpload 
            label="Additional Documents (Optional)" 
            onUpload={(file) => updateData({ additionalDoc: file })} 
          />
        </div>
      </div>
    </div>
  );
}
