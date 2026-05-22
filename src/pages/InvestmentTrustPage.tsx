import { BarChart3, Landmark, Layers3, ReceiptText, Repeat, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleCard } from "../components/ArticleCard";
import { FeatureCard } from "../components/Cards";
import { CTASection } from "../components/CTASection";
import { GlossaryTooltip } from "../components/GlossaryTooltip";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";
import { articles } from "../data/articles";

export function InvestmentTrustPage() {
  const related = articles.filter((article) => ["投資信託", "比較レビュー", "初心者向け"].includes(article.category)).slice(0, 3);

  return (
    <main id="main">
      <SEO
        title="投資信託のメリット | Future Asset Lab"
        description="日本で投資信託を始めるメリットを、新NISA、分散投資、インデックス投資、リスクの観点から解説。"
      />
      <PageHeader
        eyebrow="Investment Trusts"
        title="投資信託は、少額から分散投資を学べる入口。"
        body="プロが運用する仕組み、低コスト化が進むインデックスファンド、新NISAとの相性を、初心者にも読みやすく整理します。"
      />

      <section className="section-band">
        <div className="lab-container grid gap-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <FeatureCard icon={Layers3} eyebrow="Diversification" title="1本で分散しやすい" body="複数の企業・地域・資産に分散でき、個別株だけで組むより管理負担を抑えやすい面があります。" tone="cyan" />
            <FeatureCard icon={Repeat} eyebrow="Monthly plan" title="積立設定と相性がよい" body="毎月の定額積立により、購入タイミングを分けながら投資を続けやすくなります。" tone="emerald" />
            <FeatureCard icon={ReceiptText} eyebrow="Cost" title="費用を比較しやすい" body="信託報酬、販売手数料、投資対象を横並びで確認し、自分の目的に合う候補を絞りやすいです。" tone="gold" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <article className="surface-card surface-cyan rounded-lg border border-slate-200 bg-white/82 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <h2 className="text-3xl font-black text-slate-950 dark:text-white">新NISA時代に見たい比較軸</h2>
              <div className="mt-5 grid gap-4 text-sm leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  <GlossaryTooltip term="投資信託" /> は少額から分散投資しやすく、長期・積立・分散の考え方と相性がよいとされます。
                  ただし、元本は保証されず、価格変動や為替変動の影響を受けます。
                </p>
                <p>
                  比較時は <GlossaryTooltip term="信託報酬" />、投資対象、純資産総額、運用方針、為替ヘッジの有無を確認しましょう。
                  低コストだけではなく、長く持てる設計かを見ます。
                </p>
                <p>
                  目論見書や月報には、リスク、費用、投資対象、運用実績がまとめられています。購入前に
                  <GlossaryTooltip term="目論見書" /> を確認する習慣が大切です。
                </p>
              </div>
              <Link
                to="/funds"
                className="focus-ring interactive-lift mt-6 inline-flex items-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-black text-white dark:bg-cyan-400 dark:text-slate-950"
              >
                ファンドタイプを比較する
              </Link>
            </article>
            <div className="grid gap-4">
              <FeatureCard icon={Landmark} eyebrow="NISA" title="非課税枠の活用" body="2024年以降の新NISAでは、つみたて投資枠と成長投資枠を併用できます。" tone="emerald" href="/nisa" />
              <FeatureCard icon={BarChart3} eyebrow="Index" title="インデックス型の理解" body="市場平均への連動を目指す商品は、投資方針を理解しやすい比較対象です。" tone="violet" href="/articles/investment-trust-benefits-japan-nisa" />
              <FeatureCard icon={ShieldAlert} eyebrow="Risk" title="注意点を先に読む" body="元本割れ、手数料、為替、税制変更など、投資前に確認したいリスクがあります。" tone="gold" href="/risk" />
            </div>
          </div>

          <RiskNotice />

          <div>
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">関連する記事</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
