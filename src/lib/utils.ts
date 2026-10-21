import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PartnerStatus } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPartnerStatus(lastContactDays: number): PartnerStatus {
  if (lastContactDays < 21) return "Warm";
  if (lastContactDays <= 40) return "Cooling";
  return "Cold";
}

export function statusStyles(status: PartnerStatus) {
  switch (status) {
    case "Warm":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "Cooling":
      return "bg-amber-50 text-amber-800 border-amber-200";
    case "Cold":
      return "bg-rose-50 text-rose-700 border-rose-200";
  }
}

export function priorityStyles(priority: string) {
  switch (priority) {
    case "High":
      return "bg-rose-50 text-rose-700 border-rose-200";
    case "Action needed":
      return "bg-amber-50 text-amber-800 border-amber-200";
    default:
      return "bg-sky-50 text-sky-700 border-sky-200";
  }
}
