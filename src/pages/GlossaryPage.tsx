import { RotateCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";
import { glossaryEntries, type GlossaryCategory } from "../data/glossary";

const categories: Array<GlossaryCategory | "すべて"> = ["すべて", "制度", "商品", "費用", "リスク", "指数", "運用"];

export function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GlossaryCategory | "すべて">("すべて");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return glossaryEntries.filter((entry) => {
      const categoryMatch = category === "すべて" || entry.category === category;
      const text = `${entry.term} ${entry.reading} ${entry.description} ${entry.checkPoint}`.toLowerCase();
      return categoryMatch && (!normalized || text.includes(normalized));
    });
  }, [category, query]);

  const activeFilterCount = [query.trim(), category !== "すべて"].filter(Boolean).length;

  const resetFilters = () => {
    setQuery("");
    setCategory("すべて");
  };

  return (
    <main id="main">
      <SEO
        title="投資用語集 | Future Asset Lab"
        description="新NISA、投資信託、信託報酬、NASDAQ100、為替リスクなど、初心者が押さえたい投資用語を検索できる用語集。"
      />
      <PageHeader
        eyebrow="Glossary"
        title="投資用語を、読める言葉に変える。"
        body="目論見書や金融記事でつまずきやすい言葉を、意味と確認ポイントに分けて整理しました。"
      />
      <section className="section-band">
        <div className="lab-container grid gap-8">
          <div className="surface-card surface-slate grid min-w-0 gap-4 rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="relative min-w-0">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" size={18} />
              <input
                type="search"
                className="focus-ring min-w-0 w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="用語、読み方、確認ポイントで検索"
                aria-label="投資用語を検索"
                enterKeyHint="search"
              />
            </div>

            <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200 sm:hidden">
              用語カテゴリ
              <select
                className="control-input w-full"
                value={category}
                onChange={(event) => setCategory(event.target.value as GlossaryCategory | "すべて")}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <div className="hidden flex-wrap gap-2 sm:flex" aria-label="用語カテゴリ">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={[
                    "focus-ring interactive-lift rounded-lg px-3 py-2 text-sm font-black",
                    category === item
                      ? "bg-cyan-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                      : "border border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200",
                  ].join(" ")}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="surface-soft flex flex-col gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950/45 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-slate-600 dark:text-slate-300">
                <span aria-live="polite">{filtered.length}語を表示</span>
                {activeFilterCount ? <span className="ml-2 text-cyan-700 dark:text-cyan-200">条件 {activeFilterCount}件</span> : null}
              </p>
              {activeFilterCount ? (
                <button
                  type="button"
                  className="focus-ring interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:w-auto"
                  onClick={resetFilters}
                >
                  <RotateCcw aria-hidden="true" size={15} />
                  条件をリセット
                </button>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((entry, index) => (
              <article
                key={entry.term}
                className={`surface-card ${index % 3 === 0 ? "surface-cyan" : index % 3 === 1 ? "surface-emerald" : "surface-violet"} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{entry.category}</p>
                    <h2 className="break-anywhere mt-1 text-2xl font-black text-slate-950 dark:text-white">{entry.term}</h2>
                    <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">{entry.reading}</p>
                  </div>
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    用語
                  </span>
                </div>
                <p className="break-anywhere mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.description}</p>
                <div className="surface-soft mt-4 rounded-lg bg-cyan-50 p-3 dark:bg-cyan-400/10">
                  <p className="text-xs font-black uppercase tracking-normal text-cyan-800 dark:text-cyan-100">確認ポイント</p>
                  <p className="break-anywhere mt-1 text-sm leading-7 text-cyan-950 dark:text-cyan-50">{entry.checkPoint}</p>
                </div>
              </article>
            ))}
          </div>

          {!filtered.length ? (
            <div className="surface-card surface-slate rounded-lg border border-slate-200 bg-white/80 p-8 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-black text-slate-950 dark:text-white">該当する用語が見つかりませんでした。</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">検索語やカテゴリを変えてみてください。</p>
            </div>
          ) : null}

          <RiskNotice />
        </div>
      </section>
    </main>
  );
}
