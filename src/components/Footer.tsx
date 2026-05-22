import { Link } from "react-router-dom";
import { sources } from "../data/sources";
import { RiskNotice } from "./RiskNotice";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/78 py-12 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="lab-container grid gap-8">
        <RiskNotice compact />
        <section aria-labelledby="sources-title" className="grid gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Sources</p>
              <h2 id="sources-title" className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                参考にした主な情報源
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              数値や制度情報は出典名と確認日を持つデータ構造で管理しています。未確認の市場データはサンプルデータとして表示します。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {sources.map((source, index) => (
              <a
                key={source.id}
                className={`surface-card interactive-lift ${index % 2 === 0 ? "surface-cyan" : "surface-violet"} focus-ring rounded-lg border border-slate-200 bg-white/82 p-4 text-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70`}
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="block font-black text-slate-950 dark:text-white">{source.name}</span>
                <span className="mt-1 block text-slate-500 dark:text-slate-400">
                  {source.publisher} / 確認日: {source.checkedAt}
                </span>
                <span className="mt-2 block leading-6 text-slate-600 dark:text-slate-300">{source.note}</span>
              </a>
            ))}
          </div>
        </section>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>© 2026 Future Asset Lab. Portfolio demo for financial media UI.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="font-bold hover:text-cyan-700 dark:hover:text-cyan-300" to="/risk">
              リスクと注意点
            </Link>
            <Link className="font-bold hover:text-cyan-700 dark:hover:text-cyan-300" to="/funds">
              ファンド比較
            </Link>
            <Link className="font-bold hover:text-cyan-700 dark:hover:text-cyan-300" to="/articles">
              記事一覧
            </Link>
            <Link className="font-bold hover:text-cyan-700 dark:hover:text-cyan-300" to="/glossary">
              用語集
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
