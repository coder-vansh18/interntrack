"use client";

import { useState, useCallback } from "react";
import { UploadCloud, X, File as FileIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  onUpload?: (file: File) => void;
  accept?: string;
}

export default function FileUpload({ label, onUpload, accept = ".pdf,.doc,.docx" }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      if (onUpload) onUpload(droppedFile);
    }
  }, [onUpload]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      if (onUpload) onUpload(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      
      {!file ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={cn(
            "w-full rounded-xl border-2 border-dashed p-8 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer relative",
            isDragging 
              ? "border-violet-500 bg-violet-500/10" 
              : "border-white/[0.12] hover:border-violet-500/50 hover:bg-white/[0.02]"
          )}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept={accept}
            onChange={handleChange}
          />
          <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 text-slate-400 group-hover:text-violet-400 transition-colors">
            <UploadCloud className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-white mb-1">
            Click to upload <span className="text-slate-400 font-normal">or drag and drop</span>
          </p>
          <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
        </div>
      ) : (
        <div className="w-full rounded-xl border border-white/[0.12] bg-white/[0.02] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
              <FileIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{file.name}</p>
              <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button 
            onClick={removeFile}
            className="p-2 rounded-lg hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
