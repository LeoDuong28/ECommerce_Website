"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-xl border px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
      aria-label="Toggle theme">
      {current === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
