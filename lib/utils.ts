import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ACCENT_COLORS = [
  'bg-sky-300',
  'bg-amber-300',
  'bg-pink-300',
  'bg-lime-300',
  'bg-orange-300',
  'bg-violet-300',
]

export function accentColor(index: number) {
  return ACCENT_COLORS[index % ACCENT_COLORS.length]
}
