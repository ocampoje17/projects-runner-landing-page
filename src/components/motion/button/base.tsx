import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-[#1692e8] active:bg-[#0062a3] border border-transparent shadow-none font-medium",
  secondary: "border border-border bg-secondary text-secondary-foreground hover:bg-muted active:bg-muted/80 shadow-none font-medium",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
  outline: "border border-border bg-transparent text-foreground hover:bg-foreground/5",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "h-7 px-3 text-xs gap-1.5 rounded-md",
  md: "h-9 px-4 text-xs font-medium gap-2 rounded-md",
  lg: "h-10 px-5 text-sm font-medium gap-2 rounded-md",
  icon: "h-7 w-7 rounded-md p-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium select-none [&_svg]:shrink-0 transition-colors cursor-pointer outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
