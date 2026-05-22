import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "トップ", path: "/" },
  { label: "投資信託", path: "/investment-trusts" },
  { label: "新NISA", path: "/nisa" },
  { label: "NASDAQ", path: "/nasdaq" },
  { label: "テーマ", path: "/themes" },
  { label: "記事", path: "/articles" },
  { label: "比較", path: "/funds" },
  { label: "用語", path: "/glossary" },
  { label: "リスク", path: "/risk" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    "interactive-lift rounded-lg px-3 py-2 text-sm font-bold xl:px-2.5",
    isActive
      ? "bg-cyan-100 text-cyan-950 dark:bg-cyan-400/15 dark:text-cyan-100"
      : "text-slate-700 hover:bg-white/70 hover:text-cyan-800 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-cyan-100",
  ].join(" ");

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="app-header sticky top-0 z-50 border-b border-white/40 bg-white/80 shadow-sm backdrop-blur-xl dark:border-cyan-300/10 dark:bg-[#050816]/92 dark:shadow-[0_12px_34px_rgba(0,0,0,0.32)]">
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <div className="lab-container flex min-h-14 items-center justify-between gap-2 xl:min-h-16 xl:gap-3">
        <NavLink to="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-lg xl:gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-emerald-500 text-sm font-black text-white shadow-md xl:h-10 xl:w-10">
            FA
          </span>
          <span className="hidden min-w-0 leading-tight md:block">
            <span className="block truncate text-base font-black tracking-normal text-slate-950 dark:text-white">
              Future Asset Lab
            </span>
            <span className="hidden text-xs font-bold text-slate-500 dark:text-slate-400 sm:block">
              日本から始める、未来志向の資産形成
            </span>
          </span>
        </NavLink>

        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="focus-ring interactive-lift flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-white/75 text-slate-800 shadow-sm xl:hidden dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>
      </div>

      <MobileNav open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}

export function MobileNav({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  if (!open) return null;

  return (
    <div
      id="mobile-nav-panel"
      className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-200/60 bg-white/95 px-4 py-3 shadow-lg xl:hidden dark:border-slate-800 dark:bg-slate-950/95"
    >
      <div className="mb-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/80 md:hidden">
        <span className="text-sm font-black text-slate-700 dark:text-slate-200">テーマ切替</span>
        <ThemeToggle />
      </div>
      <nav className="grid grid-cols-2 gap-2 pb-2" aria-label="モバイルナビゲーション">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={(state) => `${navClass(state)} text-center`} onClick={onNavigate}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
