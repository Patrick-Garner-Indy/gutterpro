// src/utils/helpers.ts

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Checks if a value is null, undefined, or an empty string
 */
export function isEmpty(value: any): boolean {
  return value === null || value === undefined || value === '';
}
