import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// this is the utility without which we can't get access to the ui components that provides  shad/cn

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
