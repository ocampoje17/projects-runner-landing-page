import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/motion/button/base";
import type { AnalyticsConsent } from "@/lib/analytics";

interface AnalyticsConsentDialogProps {
  onDecision: (consent: AnalyticsConsent) => void;
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function AnalyticsConsentDialog({ onDecision }: AnalyticsConsentDialogProps) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    acceptButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="analytics-consent-title"
        aria-describedby="analytics-consent-description"
        className="w-full max-w-md rounded-3xl border border-border bg-popover p-6 shadow-2xl sm:p-7"
      >
        <h2 id="analytics-consent-title" className="text-xl font-semibold tracking-tight text-popover-foreground">
          {t("analyticsConsent.title")}
        </h2>
        <p id="analytics-consent-description" className="mt-3 text-sm leading-6 text-muted-foreground">
          {t("analyticsConsent.description")}
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={() => onDecision("denied")}>
            {t("analyticsConsent.decline")}
          </Button>
          <Button ref={acceptButtonRef} onClick={() => onDecision("granted")}>
            {t("analyticsConsent.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
