// src/utils/Format.ts

/**
 * Converts a date string into a localized date string.
 * Example: "2025-10-25T14:30:00Z" -> "10/25/2025"
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString();
}

/**
 * Converts a date string into a localized time string.
 * Example: "2025-10-25T14:30:00Z" -> "2:30 PM"
 */
export function formatTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/**
 * Formats a number as currency (USD by default).
 * Example: 1234.5 -> "$1,234.50"
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

/**
 * Formats a phone number string for display.
 * Example: "1234567890" -> "(123) 456-7890"
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Capitalizes the first letter of each word in a string.
 * Example: "hello world" -> "Hello World"
 */
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
