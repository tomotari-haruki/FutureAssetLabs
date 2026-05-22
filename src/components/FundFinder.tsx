import { Filter, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { fundTypes } from "../data/funds";
import { RiskDots } from "./FundComparisonTable";

type Objective = "core" | "growth" | "stability" | "theme";

const objectiveLabels: Record<Objective, string> = {
  core: "コア資産",
  growth: "米国成長",
  stability: "安定寄り",
  theme: "テーマ学習",
};

const objectiveKeywords: Record<Objective, string[]> = {
  core: ["コア候補", "長期投資", "分散"],
  growth: ["米国株", "NASDAQ", "長期投資"],
  stability: ["安定寄り", "資産配分", "分散"],
  theme: ["AI", "半導体", "テーマ投資", "高リスク"],
};

export function FundFinder() {
  const [objective, setObjective] = useState<Objective>("core");
  const [maxRisk, setMaxRisk] = useState(4);

  const matches = useMemo(() => {
    const keywords = objectiveKeywords[objective];
    return fundTypes.filter((fund) => fund.risk <= maxRisk && fund.tags.some((tag) => keywords.includes(tag)));
  }, [maxRisk, objective]);

  const visible = matches.length ? matches : fundTypes.filter((fund) => fund.risk <= maxRisk);
  const isDefault = objective === "core" && maxRisk === 4;

  return (
    <section id="fund-finder" className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={22} />
            <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Fund Finder</p>
          </div>
          <h2 className="break-anywhere mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white">
            目的とリスク許容度で、比較対象を絞り込む。
          </h2>
          <p className="break-anywhere mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            表示結果は商品推奨ではありません。ファンドタイプを学ぶための入口として、投資対象・費用・為替影響・注意点を横並びで確認します。
          </p>
        </div>
        <p className="rounded-lg bg-amber-50 px-4 py-3 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
          最終判断では目論見書・月報・金融機関の情報を確認してください。
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-soft grid gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-950/45">
          <div>
            <p className="text-sm font-black text-slate-950 dark:text-white">目的</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {(Object.keys(objectiveLabels) as Objective[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={[
                    "focus-ring interactive-lift rounded-lg px-3 py-2 text-sm font-black",
                    objective === key
                      ? "bg-cyan-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                      : "border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
                  ].join(" ")}
                  aria-pressed={objective === key}
                  onClick={() => setObjective(key)}
                >
                  {objectiveLabels[key]}
                </button>
              ))}
            </div>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-black text-slate-950 dark:text-white">許容するリスク上限: {maxRisk}/5</span>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={maxRisk}
              onChange={(event) => setMaxRisk(Number(event.target.value))}
              className="accent-cyan-600"
            />
            <span className="text-xs font-bold leading-6 text-slate-500 dark:text-slate-400">
              値動きを抑えたい場合は低めに、テーマ型も学びたい場合は高めに設定します。
            </span>
          </label>
          <div className="surface-soft flex flex-col gap-3 rounded-lg bg-white p-3 text-sm dark:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-stretch">
            <p className="font-bold text-slate-600 dark:text-slate-300">
              <span aria-live="polite">比較対象 {visible.length}件</span>
            </p>
            {!isDefault ? (
              <button
                type="button"
                className="focus-ring interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                onClick={() => {
                  setObjective("core");
                  setMaxRisk(4);
                }}
              >
                <RotateCcw aria-hidden="true" size={15} />
                条件をリセット
              </button>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
            <Filter aria-hidden="true" size={17} />
            絞り込み結果
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {visible.map((fund) => (
              <article key={fund.id} className="surface-card surface-slate rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{fund.label}</p>
                    <h3 className="break-anywhere mt-1 font-black leading-snug text-slate-950 dark:text-white">{fund.name}</h3>
                  </div>
                  <RiskDots value={fund.risk} />
                </div>
                <dl className="mt-3 grid gap-2 text-sm">
                  <div>
                    <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">投資対象</dt>
                    <dd className="break-anywhere mt-1 leading-7 text-slate-600 dark:text-slate-300">{fund.target}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">注意点</dt>
                    <dd className="break-anywhere mt-1 leading-7 text-slate-600 dark:text-slate-300">{fund.caution}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
