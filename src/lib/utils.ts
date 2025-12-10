import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const myAge = new Date().getFullYear() - 2006;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
