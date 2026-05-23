"use client";

import { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsInputProps {
  label: string;
  value: string[];
  onChange: (skills: string[]) => void;
  placeholder?: string;
}

export default function SkillsInput({ label, value, onChange, placeholder = "Type a skill and press Enter..." }: SkillsInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()]);
      }
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange(value.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="min-h-[52px] w-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-2 flex flex-wrap gap-2 focus-within:border-violet-500/50 focus-within:bg-white/[0.04] transition-colors cursor-text"
           onClick={() => document.getElementById("skill-input")?.focus()}
      >
        <AnimatePresence>
          {value.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-sm text-white"
            >
              <span>{skill}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSkill(skill);
                }}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        <input
          id="skill-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm text-white placeholder-slate-500 py-1.5 px-1"
        />
      </div>
    </div>
  );
}
