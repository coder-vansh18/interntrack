import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function calculateProfileStrength(data: Record<string, unknown>): number {
  const fields = Object.values(data).filter(
    (v) => v !== null && v !== undefined && v !== "" && (Array.isArray(v) ? v.length > 0 : true)
  );
  return Math.min(Math.round((fields.length / Object.keys(data).length) * 100), 100);
}
