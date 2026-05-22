import { ArrowRight, BookOpenCheck, ChartNoAxesCombined, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const goals = [
  {
    label: "Start",
    title: "少額積立から始めたい",
    body: "制度と家計を確認し、無理のない積立額から比較軸を作ります。",
    read: "投資信託のメリット",
    href: "/articles/investment-trust-benefits-japan-nisa",
    page: "診断風チェック",
    pageHref: "/diagnosis",
    caution: "生活防衛資金を投資に回さない",
    icon: BookOpenCheck,
  },
  {
    label: "NISA",
    title: "新NISAの枠を理解したい",
    body: "年間枠・生涯枠・売却後の枠再利用を、制度の上限と自分の家計に分けて読みます。",
    read: "年間360万円・生涯1,800万円",
    href: "/articles/nisa-annual-360-lifetime-1800",
    page: "新NISA解説",
    pageHref: "/nisa",
    caution: "枠を使い切ることを目的にしない",
    icon: Compass,
  },
  {
    label: "Growth",
    title: "NASDAQやAIテーマを学びたい",
    body: "AI、クラウド、半導体、宇宙の期待を、指数・公開市場・未上場報道に分けて整理します。",
    read: "NASDAQに投資する魅力",
    href: "/articles/nasdaq-ai-semiconductor-cloud-growth",
    page: "テーマ投資ページ",
    pageHref: "/themes",
    caution: "話題性だけで集中させない",
    icon: Sparkles,
  },
  {
    label: "Risk",
    title: "下落時の不安を減らしたい",
    body: "下落率、為替、手数料、積立継続ルールを先に見える化します。",
    read: "暴落時の積立投資ルール",
    href: "/articles/market-crash-accumulation-risk-management",
    page: "リスクと注意点",
    pageHref: "/risk",
    caution: "短期の値動きで判断を急がない",
    icon: ShieldCheck,
  },
];

const surfaceToneCycle = ["surface-cyan", "surface-emerald", "surface-violet", "surface-gold"] as const;

export function GoalNavigator() {
  return (
    <section id="goal-navigator" className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Goal navigator</p>
            <h2 className="break-anywhere mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              目的別に、最初に読むべき導線を選ぶ。
            </h2>
            <p className="break-anywhere mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              金融メディアとしての読み応えを保ちながら、初心者が迷いにくい入口を用意しました。どの導線も、商品を決める前にリスク確認へ戻れる設計です。
            </p>
          </div>
          <Link
            to="/articles"
            className="focus-ring interactive-lift inline-flex w-fit items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950"
          >
            全記事を見る <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {goals.map((goal, index) => (
            <article
              key={goal.title}
              className={`surface-card ${surfaceToneCycle[index]} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                  <goal.icon aria-hidden="true" size={22} />
                </span>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {goal.label}
                </span>
              </div>
              <h3 className="break-anywhere mt-4 text-xl font-black leading-snug text-slate-950 dark:text-white">{goal.title}</h3>
              <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{goal.body}</p>
              <div className="mt-4 grid gap-2">
                <Link
                  className="focus-ring interactive-lift inline-flex items-center justify-between gap-2 rounded-lg bg-cyan-50 px-3 py-2 text-sm font-black text-cyan-900 dark:bg-cyan-400/10 dark:text-cyan-100"
                  to={goal.href}
                >
                  {goal.read} <ArrowRight aria-hidden="true" size={15} />
                </Link>
                <Link
                  className="surface-soft focus-ring interactive-lift inline-flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-black text-slate-800 dark:bg-slate-950/45 dark:text-slate-100"
                  to={goal.pageHref}
                >
                  {goal.page} <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
              <p className="break-anywhere mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
                確認: {goal.caution}
              </p>
            </article>
          ))}
        </div>

        <div className="rounded-lg border border-cyan-200 bg-cyan-50/75 p-4 dark:border-cyan-300/20 dark:bg-cyan-400/10">
          <div className="flex items-start gap-3">
            <ChartNoAxesCombined className="mt-1 shrink-0 text-cyan-700 dark:text-cyan-200" aria-hidden="true" size={20} />
            <p className="break-anywhere text-sm font-bold leading-7 text-cyan-950 dark:text-cyan-50">
              どの導線でも、最終的には「制度」「費用」「リスク」「出典」「自分の目的」を照合する流れに戻ります。投資判断の材料を整理するための学習導線です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
