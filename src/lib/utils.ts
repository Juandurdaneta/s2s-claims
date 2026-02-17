import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBER = "(555) 123-4567";
export const PHONE_HREF = "tel:+15551234567";
export const EMAIL = "info@s2sclaims.com";
