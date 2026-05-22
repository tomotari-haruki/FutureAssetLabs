import { AlertTriangle, Banknote, CircleDollarSign, FileText, LineChart, Repeat2 } from "lucide-react";
import { FeatureCard } from "../components/Cards";
import { CTASection } from "../components/CTASection";
import { PageHeader } from "../components/PageHeader";
import { RiskChecklist } from "../components/RiskChecklist";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";

export function RiskPage() {
  return (
    <main id="main">
      <SEO
        title="リスクと注意点 | Future Asset Lab"
        description="元本割れ、価格変動、為替変動、手数料、税制変更、テーマ投資の注意点をまとめたページ。"
      />
      <PageHeader
        eyebrow="Risk Notice"
        title="リスクを先に読めるサイトは、長く使える。"
        body="投資を怖がりすぎる必要はありません。ただし、リスクを見ないまま始めると、下落時に続けにくくなります。"
      />
      <section className="section-band">
        <div className="lab-container grid gap-8">
          <RiskNotice />
          <RiskChecklist />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <FeatureCard icon={LineChart} eyebrow="Market" title="価格変動リスク" body="株式や債券などの価格が上下し、投資元本を下回る可能性があります。" tone="gold" />
            <FeatureCard icon={CircleDollarSign} eyebrow="FX" title="為替変動リスク" body="外国資産へ投資する場合、円高・円安によって円換算の資産額が変動します。" tone="cyan" />
            <FeatureCard icon={Banknote} eyebrow="Cost" title="手数料・信託報酬" body="購入時、保有中、換金時の費用が商品ごとに異なります。目論見書で確認しましょう。" tone="emerald" />
            <FeatureCard icon={Repeat2} eyebrow="Tax" title="税制変更リスク" body="NISAなどの制度は将来変更される可能性があります。公式情報の確認が必要です。" tone="violet" />
            <FeatureCard icon={AlertTriangle} eyebrow="Theme" title="テーマ集中リスク" body="AI、宇宙、半導体などに偏ると、期待が剥がれた時の下落が大きくなる場合があります。" tone="rose" />
            <FeatureCard icon={FileText} eyebrow="Documents" title="公式書類の確認" body="投資信託説明書、交付目論見書、月報、金融機関の情報を確認して判断します。" tone="slate" />
          </div>

          <article className="surface-card surface-rose rounded-lg border border-slate-200 bg-white/82 p-6 dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">避けたい表現と、このサイトの方針</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="surface-soft rounded-lg bg-rose-50 p-4 dark:bg-rose-400/10">
                <p className="font-black text-rose-900 dark:text-rose-100">避ける表現</p>
                <p className="mt-2 text-sm leading-7 text-rose-900/80 dark:text-rose-100/80">
                  利益を保証する、リスクがないように見せる、判断を急がせる、上場を確定情報のように扱う、といった表現は使いません。
                </p>
              </div>
              <div className="surface-soft rounded-lg bg-emerald-50 p-4 dark:bg-emerald-400/10">
                <p className="font-black text-emerald-900 dark:text-emerald-100">使う表現</p>
                <p className="mt-2 text-sm leading-7 text-emerald-900/80 dark:text-emerald-100/80">
                  注目候補、比較対象、学習用サンプル、投資判断の材料、リスクを理解した上で検討する、という表現に寄せます。
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <CTASection title="リスクを理解したうえで、比較に進む。" body="投資判断は公式情報・目論見書・金融機関の情報を確認し、自分の責任で行う必要があります。" />
    </main>
  );
}
