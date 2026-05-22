import { BookmarkCheck, RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { articles, type ArticleCategory } from "../data/articles";
import { ArticleCard } from "./ArticleCard";
import { CategoryFilter } from "./CategoryFilter";
import { useSavedArticles } from "./useSavedArticles";

type SortKey = "popular" | "new" | "read";

export function ArticleList({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "すべて">("すべて");
  const [sortKey, setSortKey] = useState<SortKey>("popular");
  const [savedOnly, setSavedOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const { savedSlugs } = useSavedArticles();

  useEffect(() => {
    setVisibleCount(9);
  }, [category, query, savedOnly, sortKey]);

  const sortedFiltered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const list = articles.filter((article) => {
      const categoryMatch = category === "すべて" || article.category === category;
      const queryTarget = `${article.title} ${article.excerpt} ${article.tags.join(" ")}`.toLowerCase();
      const savedMatch = !savedOnly || savedSlugs.includes(article.slug);
      return savedMatch && categoryMatch && (!normalized || queryTarget.includes(normalized));
    });

    const sorted = [...list].sort((a, b) => {
      if (sortKey === "new") return b.updatedAt.localeCompare(a.updatedAt);
      if (sortKey === "read") return a.readMinutes - b.readMinutes;
      return b.popularity - a.popularity;
    });

    return sorted;
  }, [category, query, savedOnly, savedSlugs, sortKey]);

  const visibleArticles = useMemo(
    () => (typeof limit === "number" ? sortedFiltered.slice(0, limit) : sortedFiltered.slice(0, visibleCount)),
    [limit, sortedFiltered, visibleCount],
  );

  const activeFilterCount = [query.trim(), category !== "すべて", savedOnly].filter(Boolean).length;

  const resetFilters = () => {
    setQuery("");
    setCategory("すべて");
    setSavedOnly(false);
    setSortKey("popular");
  };

  return (
    <section className="grid gap-6">
      {!limit ? (
        <div className="surface-card surface-slate grid min-w-0 gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white/78 p-4 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="relative min-w-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
            <input
              type="search"
              className="focus-ring min-w-0 w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="キーワードで記事を検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="記事検索"
              enterKeyHint="search"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <CategoryFilter selected={category} onSelect={setCategory} />
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className={[
                  "focus-ring interactive-lift inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-black sm:w-auto",
                  savedOnly
                    ? "bg-cyan-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                    : "border border-slate-200 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200",
                ].join(" ")}
                aria-pressed={savedOnly}
                onClick={() => setSavedOnly((current) => !current)}
              >
                <BookmarkCheck aria-hidden="true" size={16} />
                保存済みだけ
                <span className="rounded-sm bg-white/20 px-1.5 py-0.5 text-xs">{savedSlugs.length}</span>
              </button>
              <label className="grid gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 sm:block">
                並び替え
                <select
                  className="focus-ring rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:ml-2"
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value as SortKey)}
                >
                  <option value="popular">人気順</option>
                  <option value="new">新着順</option>
                  <option value="read">読了時間順</option>
                </select>
              </label>
            </div>
          </div>

          <div className="surface-soft flex flex-col gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950/45 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold text-slate-600 dark:text-slate-300">
              <span aria-live="polite">
                {sortedFiltered.length}件中 {visibleArticles.length}件を表示
              </span>
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
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {!limit && visibleArticles.length < sortedFiltered.length ? (
        <button
          type="button"
          className="focus-ring interactive-lift mx-auto inline-flex w-full max-w-sm items-center justify-center rounded-lg border border-slate-200 bg-white/82 px-5 py-3 text-sm font-black text-slate-800 shadow-sm hover:border-cyan-300 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
          onClick={() => setVisibleCount((current) => current + 6)}
        >
          さらに記事を表示する
        </button>
      ) : null}

      {!sortedFiltered.length ? (
        <div className="surface-card surface-slate rounded-lg border border-slate-200 bg-white/80 p-8 text-center dark:border-slate-800 dark:bg-slate-900/70">
          <p className="font-black text-slate-950 dark:text-white">該当する記事が見つかりませんでした。</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">検索語やカテゴリを変えてみてください。</p>
        </div>
      ) : null}
    </section>
  );
}
