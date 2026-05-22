import { Calculator, Home, LibraryBig, Scale, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const actions = [
  { label: "トップ", path: "/", icon: Home },
  { label: "記事", path: "/articles", icon: LibraryBig },
  { label: "診断", path: "/diagnosis", icon: Calculator },
  { label: "比較", path: "/funds", icon: Scale },
  { label: "リスク", path: "/risk", icon: ShieldCheck },
];

export function MobileQuickActions() {
  return (
    <nav
      className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/92 px-2 pt-2 shadow-[0_-16px_36px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:hidden dark:border-slate-800/90 dark:bg-slate-950/92"
      aria-label="モバイル主要導線"
    >
      <div className="mx-auto grid max-w-xl grid-cols-5 gap-1">
        {actions.map((action) => (
          <NavLink
            key={action.path}
            to={action.path}
            end={action.path === "/"}
            className={({ isActive }) =>
              [
                "focus-ring interactive-lift flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[0.68rem] font-black leading-none",
                isActive
                  ? "bg-cyan-600 text-white shadow-sm dark:bg-cyan-400 dark:text-slate-950"
                  : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-800 dark:text-slate-300 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-100",
              ].join(" ")
            }
          >
            <action.icon aria-hidden="true" size={19} />
            <span>{action.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
