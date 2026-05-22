import { CalendarClock, CircleDollarSign, Infinity, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { FeatureCard } from "../components/Cards";
import { CTASection } from "../components/CTASection";
import { NisaLimitVisualizer } from "../components/NisaLimitVisualizer";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";

export function NisaPage() {
  return (
    <main id="main">
      <SEO
        title="新NISA解説 | Future Asset Lab"
        description="2024年以降の新NISAについて、年間投資枠360万円、生涯非課税保有限度額1,800万円、つみたて投資枠と成長投資枠を解説。"
      />
      <PageHeader
        eyebrow="New NISA"
        title="年間360万円・生涯1,800万円を、制度として正しく理解する。"
        body="新NISAは強力な制度ですが、枠を使い切ることが目的ではありません。少額から続けられる金額と、投資対象のリスクをセットで考えます。"
      />

      <section className="section-band">
        <div className="lab-container grid gap-8">
          <NisaLimitVisualizer />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard icon={CircleDollarSign} eyebrow="Annual" title="年間最大360万円" body="つみたて投資枠120万円、成長投資枠240万円。併用できる制度設計です。" tone="cyan" />
            <FeatureCard icon={Infinity} eyebrow="Holding" title="非課税保有期間は無期限" body="長期保有を検討しやすい制度ですが、投資対象の値動きは残ります。" tone="emerald" />
            <FeatureCard icon={RotateCcw} eyebrow="Reuse" title="売却後の枠再利用" body="売却した分は翌年以降に枠再利用が可能。ただし年間投資枠が増えるわけではありません。" tone="violet" />
            <FeatureCard icon={CalendarClock} eyebrow="Official check" title="公式情報の確認" body="税制や制度は変更される可能性があります。金融庁や金融機関の情報を確認しましょう。" tone="gold" />
          </div>

          <article className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/82 p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">初心者が最初に考えたい順番</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ["1", "生活防衛資金を分ける", "数カ月分の生活費や近い将来使うお金は、投資資金と分けておきます。"],
                ["2", "毎月続けられる金額を決める", "枠の大きさではなく、下落時にも続けられる金額から考えます。"],
                ["3", "投資対象を比較する", "全世界株式、S&P500、NASDAQ100、バランス型などの違いを見ます。"],
              ].map(([num, title, body]) => (
                <div key={num} className="surface-soft rounded-lg bg-slate-50 p-5 dark:bg-slate-950/45">
                  <p className="text-3xl font-black text-cyan-700 dark:text-cyan-200">{num}</p>
                  <h3 className="mt-2 font-black text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p>
                </div>
              ))}
            </div>
            <Link
              to="/diagnosis"
              className="focus-ring interactive-lift mt-6 inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-black text-white dark:bg-cyan-400 dark:text-slate-950"
            >
              無料診断風チェックへ
            </Link>
          </article>
          <RiskNotice />
        </div>
      </section>
      <CTASection title="制度の大きさより、続けやすい計画を。" body="新NISAの枠、投資対象、リスク許容度を並べて、自分のペースで検討しましょう。" />
    </main>
  );
}
