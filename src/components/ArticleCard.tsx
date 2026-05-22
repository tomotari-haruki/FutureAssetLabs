import { Bookmark, BookmarkCheck, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { useSavedArticles } from "./useSavedArticles";

const toneMap = {
  cyan: "from-cyan-500 to-blue-600",
  violet: "from-violet-500 to-fuchsia-600",
  emerald: "from-emerald-500 to-teal-600",
  gold: "from-amber-400 to-orange-600",
  slate: "from-slate-700 to-cyan-700",
  rose: "from-rose-500 to-violet-600",
};

const surfaceToneMap = {
  cyan: "surface-cyan",
  violet: "surface-violet",
  emerald: "surface-emerald",
  gold: "surface-gold",
  slate: "surface-slate",
  rose: "surface-rose",
};

export function ArticleCard({ article }: { article: Article }) {
  const { isSaved, toggleSaved } = useSavedArticles();
  const saved = isSaved(article.slug);

  return (
    <article
      className={`surface-card interactive-lift ${surfaceToneMap[article.thumbnailTone]} group relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white/82 shadow-sm hover:shadow-lift dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-lift-dark`}
    >
      <Link to={`/articles/${article.slug}`} className="focus-ring block h-full rounded-lg">
        <div className={`relative min-h-36 bg-gradient-to-br ${toneMap[article.thumbnailTone]} p-4 text-white`}>
          <div className="absolute inset-0 bg-lab-grid bg-[length:26px_26px] opacity-22" aria-hidden="true" />
          <div className="relative flex h-full min-h-28 flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-lg bg-white/18 px-3 py-1 text-xs font-black">{article.category}</span>
            </div>
            <p className="mt-8 text-sm font-bold leading-6 text-white/88">Future Asset Lab Editorial</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Clock aria-hidden="true" size={14} />
              {article.readMinutes}分
            </span>
            <span>{article.updatedAt} 更新</span>
          </div>
          <h3 className="break-anywhere mt-3 text-xl font-black leading-snug text-slate-950 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
            {article.title}
          </h3>
          <p className="break-anywhere mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-100"
              >
                <ShieldCheck aria-hidden="true" size={13} />
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="focus-ring interactive-lift absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-lg bg-white/18 text-white backdrop-blur hover:bg-white/28"
        aria-label={saved ? "保存済み記事から外す" : "記事を保存する"}
        aria-pressed={saved}
        title={saved ? "保存済み" : "保存する"}
        onClick={() => toggleSaved(article.slug)}
      >
        {saved ? <BookmarkCheck aria-hidden="true" size={19} /> : <Bookmark aria-hidden="true" size={19} />}
      </button>
    </article>
  );
}
