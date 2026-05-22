import type { ArticleCategory } from "../data/articles";
import { categories } from "../data/articles";

export function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: ArticleCategory | "すべて";
  onSelect: (category: ArticleCategory | "すべて") => void;
}) {
  const options = ["すべて", ...categories] as const;

  return (
    <div className="min-w-0" aria-label="カテゴリフィルター">
      <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200 sm:hidden">
        カテゴリ
        <select
          className="control-input w-full"
          value={selected}
          onChange={(event) => onSelect(event.target.value as ArticleCategory | "すべて")}
        >
          {options.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <div className="hidden flex-wrap gap-2 sm:flex">
        {options.map((category) => (
          <button
            key={category}
            type="button"
            className={[
              "focus-ring interactive-lift shrink-0 rounded-lg px-3 py-2 text-sm font-black",
              selected === category
                ? "bg-cyan-600 text-white shadow-sm dark:bg-cyan-400 dark:text-slate-950"
                : "border border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200",
            ].join(" ")}
            aria-pressed={selected === category}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
