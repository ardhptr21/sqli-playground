import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceTo(text: string, keywords: string[], to: string) {
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  return text.replace(regex, to);
}
