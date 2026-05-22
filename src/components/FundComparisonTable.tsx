import { CheckCircle2, MinusCircle } from "lucide-react";
import { fundTypes } from "../data/funds";

const rows = [
  ["投資対象", "target"],
  ["リスク", "risk"],
  ["信託報酬の目安", "feeGuide"],
  ["分散性", "diversification"],
  ["為替影響", "currencyImpact"],
  ["初心者向け度", "beginnerFit"],
  ["長期投資向きか", "longTermFit"],
  ["注意点", "caution"],
] as const;

export function FundComparisonTable() {
  return (
    <section id="fund-comparison-table" className="surface-card surface-slate rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Comparison</p>
          <h2 className="break-anywhere mt-2 text-3xl font-black text-slate-950 dark:text-white">ファンドタイプ比較表</h2>
        </div>
        <p className="break-anywhere max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          特定商品ではなく、ファンドタイプごとの比較対象です。目的とリスク許容度に合わせて目論見書・月報を確認してください。
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:hidden">
        {fundTypes.map((fund) => (
          <article
            key={fund.id}
            className="surface-soft rounded-lg border border-slate-200 bg-slate-50/85 p-4 dark:border-slate-800 dark:bg-slate-950/45"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="break-anywhere text-lg font-black leading-snug text-slate-950 dark:text-white">{fund.name}</h3>
              <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-black text-cyan-800 dark:bg-slate-900 dark:text-cyan-100">
                {fund.label}
              </span>
            </div>
            <dl className="mt-4 grid gap-3">
              {rows.map(([label, key]) => (
                <div key={`${fund.id}-${key}`} className="border-t border-slate-200 pt-3 dark:border-slate-800">
                  <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">{label}</dt>
                  <dd className="break-anywhere mt-1 text-sm leading-7 text-slate-700 dark:text-slate-200">
                    {key === "risk" ? <RiskDots value={fund.risk} /> : fund[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div className="chart-scroll mt-5 hidden overflow-x-auto lg:block">
        <table className="min-w-[980px] border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 rounded-l-lg bg-slate-100 px-4 py-3 font-black text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                比較項目
              </th>
              {fundTypes.map((fund) => (
                <th key={fund.id} className="bg-slate-100 px-4 py-3 font-black text-slate-900 dark:bg-slate-950 dark:text-white">
                  {fund.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, key]) => (
              <tr key={key}>
                <th className="sticky left-0 z-10 border-b border-slate-100 bg-white px-4 py-3 font-black text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  {label}
                </th>
                {fundTypes.map((fund) => (
                  <td key={`${fund.id}-${key}`} className="border-b border-slate-100 px-4 py-3 leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                    {key === "risk" ? <RiskDots value={fund.risk} /> : fund[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function RiskDots({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`リスクレベル${value}/5`}>
      {Array.from({ length: 5 }, (_, index) =>
        index < value ? (
          <CheckCircle2 key={index} size={15} className="text-amber-500" aria-hidden="true" />
        ) : (
          <MinusCircle key={index} size={15} className="text-slate-300 dark:text-slate-600" aria-hidden="true" />
        ),
      )}
    </span>
  );
}
