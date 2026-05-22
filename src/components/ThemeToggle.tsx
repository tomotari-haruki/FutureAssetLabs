import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring interactive-lift inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/70 bg-white/75 text-slate-700 shadow-sm hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
      aria-label={isDark ? "ライトテーマに切り替える" : "ダークテーマに切り替える"}
      title={isDark ? "ライトテーマ" : "ダークテーマ"}
    >
      {isDark ? <Sun aria-hidden="true" size={19} /> : <Moon aria-hidden="true" size={19} />}
    </button>
  );
}
