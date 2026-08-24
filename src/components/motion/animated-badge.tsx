"use client";
// beui.dev/components/motion/animated-badge

import {
  AlertTriangle,
  Check,
  Circle,
  Info,
  LoaderCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AnimatedBadgeStatus =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "loading";

export type AnimatedBadgeSize = "sm" | "md";

export interface AnimatedBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: AnimatedBadgeStatus;
  size?: AnimatedBadgeSize;
  children?: ReactNode;
  icon?: ReactNode;
  showIcon?: boolean;
}

const STATUS_CLASS: Record<AnimatedBadgeStatus, string> = {
  neutral: "border-border bg-card text-muted-foreground",
  info: "border-primary/30 bg-primary/10 text-primary",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  danger: "border-destructive/30 bg-destructive/10 text-destructive",
  loading: "border-primary/30 bg-primary/10 text-primary",
};

const SIZE_CLASS: Record<AnimatedBadgeSize, string> = {
  sm: "h-6 gap-1.5 px-2 text-[11px]",
  md: "h-7 gap-2 px-2.5 text-xs",
};

const ICON_CLASS: Record<AnimatedBadgeSize, string> = {
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
};

const ICONS: Record<AnimatedBadgeStatus, LucideIcon> = {
  neutral: Circle,
  info: Info,
  success: Check,
  warning: AlertTriangle,
  danger: X,
  loading: LoaderCircle,
};

export function AnimatedBadge({
  status = "neutral",
  size = "sm",
  children,
  icon,
  showIcon = true,
  className,
  ...rest
}: AnimatedBadgeProps) {
  const Icon = ICONS[status];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-hidden whitespace-nowrap rounded-md border font-medium tabular-nums",
        STATUS_CLASS[status],
        SIZE_CLASS[size],
        className,
      )}
      {...rest}
    >
      {showIcon ? (
        <span className="inline-flex items-center justify-center">
          {icon ?? (
            <Icon
              className={cn(
                ICON_CLASS[size],
                status === "loading" && "animate-spin",
              )}
            />
          )}
        </span>
      ) : null}
      {children}
    </span>
  );
}
