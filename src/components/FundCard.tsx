import { ArrowRight, Layers3 } from "lucide-react";
import type { FundType } from "../data/funds";
import { RiskDots } from "./FundComparisonTable";

const toneMap = {
  cyan: "from-cyan-500/18 to-blue-500/8 border-cyan-200 dark:border-cyan-300/20",
  emerald: "from-emerald-500/18 to-teal-500/8 border-emerald-200 dark:border-emerald-300/20",
  violet: "from-violet-500/18 to-fuchsia-500/8 border-violet-200 dark:border-violet-300/20",
  gold: "from-amber-400/22 to-yellow-500/8 border-amber-200 dark:border-amber-300/20",
  slate: "from-slate-400/18 to-cyan-500/8 border-slate-200 dark:border-slate-700",
  rose: "from-rose-400/18 to-violet-500/8 border-rose-200 dark:border-rose-300/20",
};

const surfaceToneMap = {
  cyan: "surface-cyan",
  emerald: "surface-emerald",
  violet: "surface-violet",
  gold: "surface-gold",
  slate: "surface-slate",
  rose: "surface-rose",
};

export function FundCard({ fund }: { fund: FundType }) {
  return (
    <article
      id={fund.id}
      className={`surface-card interactive-lift ${surfaceToneMap[fund.tone]} rounded-lg border bg-gradient-to-br ${toneMap[fund.tone]} p-5 shadow-sm hover:shadow-lift dark:bg-slate-900/70 dark:hover:shadow-lift-dark`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-lg bg-white/80 px-3 py-1 text-xs font-black text-slate-700 dark:bg-slate-950/55 dark:text-slate-200">
            {fund.label}
          </span>
          <h3 className="break-anywhere mt-4 text-xl font-black leading-snug text-slate-950 dark:text-white">{fund.name}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/75 text-cyan-700 dark:bg-slate-950/55 dark:text-cyan-200">
          <Layers3 aria-hidden="true" size={21} />
        </span>
      </div>

      <p className="break-anywhere mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{fund.target}</p>

      <dl className="mt-5 grid gap-3 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="font-bold text-slate-500 dark:text-slate-400">リスクレベル</dt>
          <dd>
            <RiskDots value={fund.risk} />
          </dd>
        </div>
        <div>
          <dt className="font-bold text-slate-500 dark:text-slate-400">向いている人</dt>
          <dd className="break-anywhere mt-1 leading-7 text-slate-700 dark:text-slate-200">{fund.suitedFor}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-500 dark:text-slate-400">注意点</dt>
          <dd className="break-anywhere mt-1 leading-7 text-slate-700 dark:text-slate-200">{fund.caution}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {fund.tags.map((tag) => (
          <span key={tag} className="rounded-lg bg-white/72 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-slate-950/45 dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#fund-comparison-table"
        className="focus-ring interactive-lift mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950"
      >
        比較表で見る <ArrowRight aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
