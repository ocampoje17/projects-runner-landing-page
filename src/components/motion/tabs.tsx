import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "pill" | "underline" | "segment" | "vscode";

type Ctx = {
  value: string;
  setValue: (v: string) => void;
  variant: Variant;
};

const TabsCtx = createContext<Ctx | null>(null);

function useTabs() {
  const ctx = useContext(TabsCtx);
  if (!ctx) throw new Error("Tabs.* must be used inside <Tabs>");
  return ctx;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  variant = "vscode",
  children,
  className,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const controlled = value !== undefined;
  const current = controlled ? value : internal;
  const setValue = (v: string) => {
    if (!controlled) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <TabsCtx.Provider value={{ value: current, setValue, variant }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

const listClasses: Record<Variant, string> = {
  pill: "inline-flex items-center gap-1 rounded-md border border-border bg-card p-1",
  underline: "inline-flex items-center gap-1 border-b border-border",
  segment: "inline-flex items-center gap-0 rounded-md border border-border bg-muted p-0.5",
  vscode: "inline-flex items-stretch border-b border-border bg-[var(--vscode-tab-inactive,#2d2d30)] p-0 gap-0 overflow-x-auto",
};

export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  const { variant } = useTabs();
  return (
    <div role="tablist" className={cn(listClasses[variant], className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
  indicatorClassName?: string;
}) {
  const { value: current, setValue, variant } = useTabs();
  const active = current === value;

  if (variant === "vscode") {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => setValue(value)}
        className={cn(
          "relative isolate inline-flex h-9 items-center gap-2 border-r border-border px-4 text-xs font-medium transition-colors outline-none cursor-pointer select-none",
          active
            ? "bg-[var(--vscode-tab-active,#1e1e1e)] text-foreground border-t-2 border-t-primary"
            : "bg-transparent text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground border-t-2 border-t-transparent",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  if (variant === "underline") {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => setValue(value)}
        className={cn(
          "relative isolate px-3 pb-2 pt-1 border-b-2 text-xs font-medium transition-colors min-h-[36px] inline-flex items-center cursor-pointer outline-none",
          active
            ? "text-foreground font-semibold border-primary"
            : "text-muted-foreground hover:text-foreground border-transparent",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => setValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer outline-none",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const { value: current } = useTabs();
  const active = current === value;

  if (!active) {
    return null;
  }
  return <div className={cn("mt-3", className)}>{children}</div>;
}
