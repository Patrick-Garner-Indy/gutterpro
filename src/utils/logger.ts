// src/utils/Logger.ts

/**
 * Centralized logging utility for the app.
 * Can easily switch between console logs, error tracking, or remote logging.
 */
export const Logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${message}`, data ?? '');
  },
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data ?? '');
  },
  error: (message: string, data?: any) => {
    console.error(`[ERROR] ${message}`, data ?? '');
    // TODO: integrate with remote error tracking (Sentry, etc.) if desired
  },
};
