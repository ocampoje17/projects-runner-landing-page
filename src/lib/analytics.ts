export const ANALYTICS_MEASUREMENT_ID = "G-QL0RJ8863V";
export const ANALYTICS_CONSENT_STORAGE_KEY = "projects-runner.analytics-consent.v1";

export type AnalyticsConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;

export function readAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(consent: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Keep the choice for the active page even when browser storage is unavailable.
  }
}

export function enableGoogleAnalytics(): void {
  if (analyticsInitialized) return;

  analyticsInitialized = true;
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "google-analytics-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`;
  document.head.append(script);
}
