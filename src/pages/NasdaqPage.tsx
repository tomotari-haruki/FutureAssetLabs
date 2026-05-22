import { Cloud, Cpu, Gauge, Globe2, LineChart, Zap } from "lucide-react";
import { FeatureCard } from "../components/Cards";
import { NasdaqWorldChart } from "../components/ChartSection";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";

export function NasdaqPage() {
  return (
    <main id="main">
      <SEO
        title="NASDAQ・米国成長株テーマ | Future Asset Lab"
        description="NASDAQ100、AI、クラウド、半導体、SaaSなど米国成長株テーマを初心者向けに解説。"
      />
      <PageHeader
        eyebrow="NASDAQ & Growth"
        title="NASDAQは、未来産業への期待と大きな値動きが同居する。"
        body="AI、クラウド、半導体、SaaSなどの成長テーマを取り込みやすい一方、米国・テック・為替への集中リスクも理解が必要です。"
      />

      <section className="section-band">
        <div className="lab-container grid gap-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <FeatureCard icon={Cpu} eyebrow="AI chips" title="半導体需要" body="GPU、AI推論、データセンター投資が、関連企業の業績期待につながる場合があります。" tone="emerald" />
            <FeatureCard icon={Cloud} eyebrow="Cloud" title="クラウド基盤" body="生成AIやSaaSの利用拡大は、クラウドとデータ基盤の需要に波及します。" tone="cyan" />
            <FeatureCard icon={Zap} eyebrow="SaaS" title="ソフトウェアの拡張性" body="高い利益率や継続課金モデルが評価されやすい一方、成長鈍化には敏感です。" tone="violet" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1fr]">
            <NasdaqWorldChart />
            <article className="surface-card surface-violet rounded-lg border border-slate-200 bg-white/82 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">How to compare</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">全世界株式との違いを見る</h2>
              <div className="mt-5 grid gap-4">
                {[
                  [Globe2, "分散の広さ", "全世界株式は地域と業種を広く分散しやすく、NASDAQ100は米国大型成長企業の比率が高くなります。"],
                  [LineChart, "値動きの大きさ", "成長期待が高いほど価格に期待が織り込まれやすく、下落局面では大きく動くことがあります。"],
                  [Gauge, "ポートフォリオ比率", "コア資産を広く分散し、NASDAQ100はテーマ枠として比率を調整する考え方もあります。"],
                ].map(([Icon, title, body]) => (
                  <div key={String(title)} className="surface-soft flex gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-950/45">
                    <Icon className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={21} />
                    <div>
                      <h3 className="font-black text-slate-950 dark:text-white">{title as string}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{body as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <RiskNotice />
        </div>
      </section>
      <CTASection title="NASDAQを、期待ではなく設計で扱う。" body="リターン期待だけでなく、為替・集中・下落時の行動をセットで考えることが大切です。" />
    </main>
  );
}
