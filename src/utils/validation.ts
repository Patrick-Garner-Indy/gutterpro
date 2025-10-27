// src/utils/validation.ts

/**
 * Centralized constants for validation rules and error messages.
 * Keep these values here to ensure consistency across the app.
 */

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_MIN_LENGTH = 6;

export const ValidationMessages = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  passwordTooShort: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
};

