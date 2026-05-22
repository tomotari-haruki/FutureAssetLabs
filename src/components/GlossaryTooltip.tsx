import { HelpCircle } from "lucide-react";
import { glossary, type GlossaryTerm } from "../data/glossary";

export function GlossaryTooltip({ term }: { term: GlossaryTerm }) {
  return (
    <span className="group relative inline-flex items-center gap-1 align-middle">
      <span className="font-bold text-cyan-700 dark:text-cyan-200">{term}</span>
      <HelpCircle aria-hidden="true" size={14} className="text-cyan-600 dark:text-cyan-300" />
      <span
        role="tooltip"
        className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 text-xs font-medium leading-6 text-slate-700 opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-within:opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        {glossary[term]}
      </span>
    </span>
  );
}
