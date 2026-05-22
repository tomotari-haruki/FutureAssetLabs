import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { useMemo, useState } from "react";

const checks = [
  {
    title: "生活防衛資金を分けた",
    body: "生活費、近い将来使うお金、長期で運用できるお金を分けて確認する。",
  },
  {
    title: "制度の上限と自分の上限を分けた",
    body: "新NISAの年間投資枠は制度上の上限であり、家計上の適正額とは別に考える。",
  },
  {
    title: "投資対象と為替影響を見た",
    body: "全世界株式、米国株、NASDAQ100、テーマ型などの地域・通貨・業種の偏りを確認する。",
  },
  {
    title: "信託報酬とその他費用を見た",
    body: "信託報酬、購入時手数料、信託財産留保額、実質コストを目論見書や月報で確認する。",
  },
  {
    title: "下落時のルールを決めた",
    body: "継続、減額、一時停止、再確認のどれを行うかを、相場が荒れる前に決めておく。",
  },
  {
    title: "出典と確認日を見た",
    body: "制度、数値、報道、ファンド情報は更新されるため、公式情報と確認日を合わせて読む。",
  },
];

export function RiskChecklist() {
  const [done, setDone] = useState<string[]>([]);
  const progress = useMemo(() => Math.round((done.length / checks.length) * 100), [done.length]);

  const toggle = (title: string) => {
    setDone((current) => (current.includes(title) ? current.filter((item) => item !== title) : [...current, title]));
  };

  return (
    <section id="risk-checklist" className="surface-card surface-gold rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2">
            <ClipboardCheck className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={22} />
            <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Before investing</p>
          </div>
          <h2 className="break-anywhere mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white">
            投資前チェックリスト
          </h2>
          <p className="break-anywhere mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            商品名を見る前に、家計・制度・費用・リスク・出典を確認します。チェック状態はこのページ内の学習補助です。
          </p>
        </div>
        <div className="surface-soft min-w-44 rounded-lg bg-slate-50 p-3 dark:bg-slate-950/45">
          <p className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">確認済み</p>
          <p className="mt-1 text-2xl font-black text-cyan-700 dark:text-cyan-200" aria-live="polite">
            {progress}%
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-sm bg-slate-200 dark:bg-slate-800">
            <div className="h-full rounded-sm bg-cyan-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {checks.map((check) => {
          const checked = done.includes(check.title);
          return (
            <label
              key={check.title}
              className={[
                "interactive-lift focus-within:ring-2 focus-within:ring-cyan-400/60 flex cursor-pointer gap-3 rounded-lg border p-4",
                checked
                  ? "surface-card surface-cyan border-cyan-300 bg-cyan-50 dark:border-cyan-300/30 dark:bg-cyan-400/10"
                  : "surface-soft border-slate-200 bg-slate-50/90 hover:border-cyan-200 dark:border-slate-800 dark:bg-slate-950/45",
              ].join(" ")}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(check.title)}
                className="mt-1 h-4 w-4 shrink-0 accent-cyan-600"
              />
              <span>
                <span className="flex items-center gap-2 font-black leading-snug text-slate-950 dark:text-white">
                  {checked ? <CheckCircle2 aria-hidden="true" size={17} className="text-cyan-700 dark:text-cyan-200" /> : null}
                  {check.title}
                </span>
                <span className="break-anywhere mt-2 block text-sm leading-7 text-slate-600 dark:text-slate-300">{check.body}</span>
              </span>
            </label>
          );
        })}
      </div>

      <p className="break-anywhere mt-5 rounded-lg bg-amber-50 p-3 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
        チェックが完了しても投資成果が保証されるわけではありません。最終的な判断では、公式情報、目論見書、金融機関の情報を確認してください。
      </p>
    </section>
  );
}
