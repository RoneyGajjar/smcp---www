import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import crypto from 'crypto';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




/**
 * Generates a deterministic 6-character alphanumeric code from an email.
 * Includes an optional salt parameter to resolve edge-case collisions.
 */
export function generateReferralCode(email: string, salt: number = 0): string {
  // Normalize the input to prevent "Email@..." and "email@..." from yielding different codes
  const normalizedEmail = email.trim().toLowerCase() + (salt > 0 ? salt.toString() : '');

  // Create a secure SHA-256 hash
  const hash = crypto.createHash('sha256').update(normalizedEmail).digest('hex');

  // Convert the first 10 characters of the hex hash into an integer
  const hashInt = parseInt(hash.substring(0, 10), 16);

  // Modulo by 36^6 (2,176,782,336) to guarantee it fits exactly within 6 Base36 characters
  const maxBase36 = 2176782336;
  const codeInt = hashInt % maxBase36;

  // Convert to Base36, force uppercase, and pad with leading zeros if necessary
  return codeInt.toString(36).toUpperCase().padStart(6, '0');
}