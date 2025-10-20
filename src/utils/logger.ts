export function log(message: string, data?: any) {
  if (__DEV__) console.log(`[GutterPro] ${message}`, data || "");
}
