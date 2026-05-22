import { ArrowLeft, Bookmark, BookmarkCheck, CheckCircle2, Clock, FileSearch, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { getRelatedArticles } from "../data/articles";
import { getSource } from "../data/sources";
import { ArticleCard } from "./ArticleCard";
import { CTASection } from "./CTASection";
import { RiskNotice } from "./RiskNotice";
import { useSavedArticles } from "./useSavedArticles";

export function ArticleDetail({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const takeaways = getTakeaways(article);
  const { isSaved, toggleSaved } = useSavedArticles();
  const saved = isSaved(article.slug);

  return (
    <article>
      <ReadingProgress />
      <section className="section-band pb-8">
        <div className="lab-container">
          <Link
            to="/articles"
            className="focus-ring interactive-lift inline-flex items-center gap-2 rounded-lg text-sm font-black text-cyan-700 hover:text-cyan-900 dark:text-cyan-200 dark:hover:text-cyan-100"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            記事一覧へ
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-900 dark:bg-cyan-400/15 dark:text-cyan-100">
                  {article.category}
                </span>
                {article.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 rounded-lg bg-white/80 px-3 py-1 text-xs font-black text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <ShieldCheck aria-hidden="true" size={13} />
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="break-anywhere mt-5 max-w-4xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
                {article.title}
              </h1>
              <p className="break-anywhere mt-5 max-w-3xl text-lg leading-9 text-slate-600 dark:text-slate-300">{article.lead}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Clock aria-hidden="true" size={16} />
                  読了 {article.readMinutes}分
                </span>
                <span>公開日 {article.publishedAt}</span>
                <span>更新日 {article.updatedAt}</span>
              </div>
              <button
                type="button"
                className="focus-ring interactive-lift mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                aria-pressed={saved}
                onClick={() => toggleSaved(article.slug)}
              >
                {saved ? <BookmarkCheck aria-hidden="true" size={17} /> : <Bookmark aria-hidden="true" size={17} />}
                {saved ? "保存済み記事から外す" : "この記事を保存する"}
              </button>
            </div>

            <aside className="surface-card surface-violet rounded-lg border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-black text-slate-950 dark:text-white">目次</p>
              <nav className="mt-3 grid gap-2 text-sm" aria-label="記事内目次">
                {article.sections.map((section) => (
                  <a
                    key={section.heading}
                    className="interactive-lift break-anywhere rounded-lg px-2 py-1 font-bold text-slate-600 hover:bg-cyan-50 hover:text-cyan-800 dark:text-slate-300 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-100"
                    href={`#${slugify(section.heading)}`}
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <div className="lab-container grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="surface-card surface-slate rounded-lg border border-slate-200 bg-white/88 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/74 sm:p-8">
          <ArticleTakeaways takeaways={takeaways} />
          <div className="prose-lab">
            {article.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <div className="mt-8">
            <RiskNotice compact />
          </div>
        </div>

        <aside className="grid gap-5">
          <ReadingSupportPanel article={article} />
          <section className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-lg font-black text-slate-950 dark:text-white">引用・出典</h2>
            <div className="mt-3 grid gap-3">
              {article.sources.map((id) => {
                const source = getSource(id);
                if (!source) return null;
                return (
                  <a
                    key={id}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="surface-soft focus-ring interactive-lift rounded-lg bg-slate-50 p-3 text-sm hover:bg-cyan-50 dark:bg-slate-950/50 dark:hover:bg-cyan-400/10"
                  >
                    <span className="break-anywhere block font-black text-slate-950 dark:text-white">{source.publisher}</span>
                    <span className="break-anywhere mt-1 block leading-6 text-slate-600 dark:text-slate-300">{source.name}</span>
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">確認日: {source.checkedAt}</span>
                  </a>
                );
              })}
            </div>
          </section>
        </aside>
      </div>

      {related.length ? (
        <section className="section-band">
          <div className="lab-container">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">関連記事</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection title="読んだ内容を、次の行動に変える。" body="制度、リスク、積立額のイメージを確認しながら、自分の目的に合う比較軸を作りましょう。" />
    </article>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const value = scrollable <= 0 ? 0 : Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
        setProgress(value);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-14 z-40 h-1 bg-transparent xl:top-16" aria-hidden="true">
      <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
}

function ArticleTakeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <section className="surface-card surface-cyan mb-8 rounded-lg border border-cyan-200 bg-cyan-50/80 p-4 dark:border-cyan-300/20 dark:bg-cyan-400/10" aria-labelledby="takeaways-title">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="shrink-0 text-cyan-700 dark:text-cyan-200" aria-hidden="true" size={20} />
        <h2 id="takeaways-title" className="text-base font-black text-cyan-950 dark:text-cyan-50">
          この記事で押さえること
        </h2>
      </div>
      <ul className="mt-3 grid gap-2 text-sm leading-7 text-cyan-950 dark:text-cyan-50">
        {takeaways.map((takeaway) => (
          <li key={takeaway} className="surface-soft break-anywhere rounded-lg bg-white/65 px-3 py-2 dark:bg-slate-950/35">
            {takeaway}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReadingSupportPanel({ article }: { article: Article }) {
  const checks = [
    "本文の数値や制度は、出典と確認日を合わせて読む",
    "元本割れ、価格変動、為替変動、手数料、税制変更リスクを確認する",
    "気になる商品タイプは目論見書・月報・金融機関の情報で比較する",
  ];

  return (
    <section className="surface-card surface-gold rounded-lg border border-slate-200 bg-white/82 p-4 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center gap-2">
        <FileSearch className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={20} />
        <h2 className="text-lg font-black text-slate-950 dark:text-white">読む前後のチェック</h2>
      </div>
      <dl className="mt-4 grid gap-3 text-sm">
        <div className="surface-soft rounded-lg bg-slate-50 p-3 dark:bg-slate-950/45">
          <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">カテゴリ</dt>
          <dd className="mt-1 font-black text-slate-950 dark:text-white">{article.category}</dd>
        </div>
        <div className="surface-soft rounded-lg bg-slate-50 p-3 dark:bg-slate-950/45">
          <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">読了目安</dt>
          <dd className="mt-1 font-black text-slate-950 dark:text-white">{article.readMinutes}分</dd>
        </div>
      </dl>
      <ul className="mt-4 grid gap-2 text-xs font-bold leading-6 text-slate-600 dark:text-slate-300">
        {checks.map((check) => (
          <li key={check} className="surface-soft break-anywhere rounded-lg border border-slate-100 px-3 py-2 dark:border-slate-800">
            {check}
          </li>
        ))}
      </ul>
      <Link
        to="/risk"
        className="focus-ring interactive-lift mt-4 inline-flex w-full justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950"
      >
        リスクと注意点を読む
      </Link>
    </section>
  );
}

function getTakeaways(article: Article) {
  return article.sections.slice(0, 3).map((section) => {
    const source = section.bullets?.[0] ?? section.body[0] ?? section.heading;
    return source.length > 72 ? `${source.slice(0, 72)}...` : source;
  });
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");
