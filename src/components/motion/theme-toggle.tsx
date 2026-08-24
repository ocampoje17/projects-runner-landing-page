import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
  iconClassName?: string;
  variant?: string;
  start?: string;
}

export function ThemeToggle({
  className,
  iconClassName = "h-4 w-4",
  ...rest
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn("flex items-center justify-center cursor-pointer transition-colors outline-none", className)}
      {...rest}
    >
      {mounted ? (
        isDark ? (
          <Sun className={cn(iconClassName, "text-foreground")} />
        ) : (
          <Moon className={cn(iconClassName, "text-foreground")} />
        )
      ) : (
        <span className={cn(iconClassName, "inline-block")} aria-hidden="true" />
      )}
    </button>
  );
}
