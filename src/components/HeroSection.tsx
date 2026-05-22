import { BarChart3, BookOpen, Calculator, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "./Cards";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/50 dark:border-slate-800/70" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-violet-50 dark:from-midnight dark:via-slate-950 dark:to-violet-950/50" />
      <img
        src={`${import.meta.env.BASE_URL}images/future-asset-hero.png`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity dark:opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-lab-grid bg-[length:42px_42px] opacity-45 dark:opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-slow-shift bg-[linear-gradient(120deg,rgba(34,211,238,0.12),rgba(16,185,129,0.08),rgba(124,58,237,0.1))] bg-[length:180%_180%] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.16),rgba(16,185,129,0.08),rgba(124,58,237,0.18))]"
        aria-hidden="true"
      />

      <div className="lab-container relative grid min-h-[calc(100svh-3.5rem)] min-w-0 gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:py-20 xl:min-h-[calc(100svh-4rem)]">
        <div className="min-w-0 max-w-4xl">
          <div className="inline-flex max-w-full items-start gap-2 rounded-lg border border-cyan-200 bg-white/72 px-3 py-2 text-sm font-black leading-5 text-cyan-800 shadow-sm backdrop-blur dark:border-cyan-300/20 dark:bg-slate-950/45 dark:text-cyan-100">
            <Sparkles className="mt-0.5 shrink-0" aria-hidden="true" size={17} />
            <span className="break-anywhere min-w-0">新NISA・投資信託・NASDAQを、未来志向で学ぶ</span>
          </div>
          <h1 id="hero-title" className="mt-6 max-w-4xl text-[2.2rem] font-black leading-[1.12] text-slate-950 drop-shadow-sm dark:text-white sm:text-5xl lg:text-7xl">
            未来に投資する。
            <span className="block bg-gradient-to-r from-cyan-700 via-blue-700 to-emerald-700 bg-clip-text text-transparent dark:from-cyan-100 dark:via-violet-100 dark:to-emerald-100">
              <span className="block whitespace-nowrap md:inline-block">日本から、</span>
              <span className="block whitespace-nowrap md:inline-block">少額から、</span>
              <span className="block whitespace-nowrap md:inline-block">今日から。</span>
            </span>
          </h1>
          <p className="break-anywhere mt-6 max-w-full text-lg font-medium leading-9 text-slate-700 dark:text-slate-100 sm:max-w-2xl">
            <span className="block sm:inline">新NISA・投資信託・</span>
            <span className="block sm:inline">NASDAQ連動型</span>
            <span className="block sm:inline">インデックスを、</span>
            <span className="block sm:inline">データと図解でわかりやすく。</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#simulator"
              className="focus-ring interactive-lift inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-black text-white shadow-md hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              <Calculator aria-hidden="true" size={19} />
              資産形成シミュレーションを見る
            </a>
            <Link
              to="/investment-trusts"
              className="focus-ring interactive-lift inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-black text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-950/50 dark:text-white"
            >
              <BookOpen aria-hidden="true" size={19} />
              投資信託のメリットを読む
            </Link>
          </div>
          <p className="break-anywhere mt-5 text-xs font-bold leading-6 text-slate-500 dark:text-slate-400">
            <span className="block sm:inline">数値は2024年以降の新NISA制度に基づく表示です。</span>
            <span className="block sm:inline">制度は将来変更される可能性があります。</span>
          </p>
        </div>

        <aside className="grid min-w-0 gap-4" aria-label="新NISAの主要数値">
          <div className="surface-card surface-cyan min-w-0 rounded-lg border border-white/65 bg-white/76 p-4 shadow-lift backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/50 dark:shadow-lift-dark">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">2024+ NISA</p>
                <h2 className="mt-1 text-xl font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">
                  <span className="block sm:inline">制度メリットを</span>
                  <span className="block sm:inline">一画面で</span>
                </h2>
              </div>
              <ShieldCheck aria-hidden="true" className="text-emerald-500" size={30} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <StatCard label="新NISA 年間投資枠" value="最大360万円" tone="cyan" />
              <StatCard label="生涯非課税保有限度額" value="最大1,800万円" tone="emerald" />
              <StatCard label="つみたて投資枠" value="年間120万円" tone="violet" />
              <StatCard label="成長投資枠" value="年間240万円" tone="gold" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/70 bg-slate-950 p-5 text-white shadow-lift dark:border-cyan-300/15">
            <div className="flex items-center gap-3">
              <BarChart3 aria-hidden="true" className="text-cyan-300" />
              <p className="font-black">長期・積立・分散の3原則</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              値動きと向き合いながら、時間・購入タイミング・投資対象を分けて考えるための基本です。
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
