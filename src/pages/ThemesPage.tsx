import { BrainCircuit, RadioTower, Satellite, ServerCog } from "lucide-react";
import { ArticleCard } from "../components/ArticleCard";
import { FeatureCard } from "../components/Cards";
import { ThemeDriverRadar } from "../components/ChartSection";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";
import { articles } from "../data/articles";

export function ThemesPage() {
  const related = articles.filter((article) => ["AIテーマ", "NASDAQ"].includes(article.category));

  return (
    <main id="main">
      <SEO
        title="AI・宇宙・半導体テーマ投資 | Future Asset Lab"
        description="AI、宇宙、半導体テーマを、報道ベースの期待と投資リスクを分けて学ぶページ。"
      />
      <PageHeader
        eyebrow="AI / Space / Semiconductor"
        title="未来テーマは、熱量ではなくドライバーで読む。"
        body="SpaceX、OpenAI、Anthropicなどの大型IPO期待は報道ベースで扱い、未確定情報と直接投資の難しさを明示します。"
      />

      <section className="section-band">
        <div className="lab-container grid gap-8">
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard icon={BrainCircuit} eyebrow="AI" title="生成AIと業務ソフト" body="AIモデル、クラウド、SaaS、半導体需要が連動しやすいテーマです。" tone="cyan" />
            <FeatureCard icon={Satellite} eyebrow="Space" title="衛星通信と宇宙インフラ" body="未上場企業への直接投資が難しい場合も多く、関連テーマの理解が中心になります。" tone="slate" />
            <FeatureCard icon={ServerCog} eyebrow="Semiconductor" title="GPUとデータセンター" body="AI推論やクラウド投資の増加が、半導体サプライチェーンに影響します。" tone="emerald" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <ThemeDriverRadar />
            <article className="surface-card surface-gold rounded-lg border border-slate-200 bg-white/82 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <RadioTower className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                <h2 className="text-3xl font-black text-slate-950 dark:text-white">IPO報道の読み方</h2>
              </div>
              <div className="mt-5 grid gap-4 text-sm leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  SpaceX、OpenAI、AnthropicのIPO期待は、複数メディアで報道されています。ただし、企業の公式発表や上場申請書類が出るまでは、
                  時期・評価額・条件は未確定です。
                </p>
                <p>
                  通常の個人投資家が未上場株に直接投資できない場合も多く、流動性や情報開示の制約があります。テーマ型ファンドやNASDAQ連動型投信なども、
                  あくまで比較対象・学習用サンプルとして検討します。
                </p>
                <p>
                  「話題だから買う」ではなく、成長テーマ、費用、値動き、ポートフォリオ内の比率を確認することが大切です。
                </p>
              </div>
            </article>
          </div>

          <RiskNotice />

          <div>
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">テーマを深掘りする記事</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="成長テーマは、ポートフォリオの中で位置づける。" body="大きな期待ほど値動きも大きくなりやすいため、目的と比率を決めてから比較しましょう。" />
    </main>
  );
}
