"use client";

import { useEffect } from "react";

type FormzEmbedProps = {
  formId?: string;
  title?: string;
  className?: string;
};

// embed.js only scans the DOM for [data-formz-form] once, on initial load —
// it has no MutationObserver and exposes no re-init hook. next/script dedupes
// by src and won't re-run it on later client-side navigations, so a fresh
// <script> is created on every mount to force it to re-scan against the
// current DOM.
export function FormzEmbed({ formId, title = "Join the waitlist", className = "" }: FormzEmbedProps) {
  useEffect(() => {
    if (!formId) return;
    const script = document.createElement("script");
    script.src = "https://joinformz.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [formId]);

  if (!formId) {
    return (
      <div
        className={`flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-border-strong bg-surface p-8 text-center ${className}`}
      >
        <span className="text-sm font-medium text-muted">{title}</span>
        <span className="mt-2 text-xs text-muted-foreground">
          Formz embed slot — connect a form ID to go live
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <div data-formz-form={formId} />
    </div>
  );
}
