import { Calculator, CheckCircle2, Gauge, PiggyBank } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CompoundSimulator } from "../components/CompoundSimulator";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";

export function DiagnosisPage() {
  const [monthly, setMonthly] = useState(30000);
  const [risk, setRisk] = useState(2);
  const [goal, setGoal] = useState("20年以上");

  const profile = useMemo(() => {
    if (risk <= 1) return { label: "安定寄り", category: "バランス型ファンド、全世界株式インデックス型", tone: "emerald" };
    if (risk === 2) return { label: "分散重視", category: "全世界株式、先進国株式、S&P500インデックス型", tone: "cyan" };
    return { label: "成長テーマも一部検討", category: "NASDAQ100、AI・半導体テーマ型は小さな比率で比較", tone: "violet" };
  }, [risk]);
  const starterActions = useMemo(() => buildStarterActions(monthly, risk, goal), [goal, monthly, risk]);

  return (
    <main id="main">
      <SEO
        title="無料診断風チェック | Future Asset Lab"
        description="毎月積立額、運用期間、リスク許容度から、比較しやすいファンドタイプを整理する診断風セクション。"
      />
      <PageHeader
        eyebrow="Starter Check"
        title="無料診断風チェックで、最初の比較軸を作る。"
        body="これは投資助言ではなく、学習用の整理ツールです。毎月の積立額、期間、リスク許容度から比較しやすいカテゴリを表示します。"
      />
      <section className="section-band">
        <div className="lab-container grid gap-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
            <section className="surface-card surface-cyan rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <Calculator className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">入力</h2>
              </div>
              <div className="mt-6 grid gap-6">
                <label className="grid gap-2">
                  <span className="text-sm font-black text-slate-700 dark:text-slate-200">毎月積立額: {monthly.toLocaleString("ja-JP")}円</span>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={5000}
                    value={monthly}
                    onChange={(event) => setMonthly(Number(event.target.value))}
                    className="accent-cyan-600"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black text-slate-700 dark:text-slate-200">想定する運用期間</span>
                  <select
                    className="focus-ring rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm dark:border-slate-700 dark:bg-slate-950"
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                  >
                    <option>5年以内</option>
                    <option>10年程度</option>
                    <option>20年以上</option>
                    <option>30年以上</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black text-slate-700 dark:text-slate-200">リスク許容度: {risk}/3</span>
                  <input
                    type="range"
                    min={1}
                    max={3}
                    step={1}
                    value={risk}
                    onChange={(event) => setRisk(Number(event.target.value))}
                    className="accent-cyan-600"
                  />
                </label>
              </div>
            </section>

            <section className="surface-card surface-violet rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Learning Output</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">比較しやすいカテゴリ</h2>
              <div className="mt-5 grid gap-4">
                <Result icon={PiggyBank} label="積立イメージ" value={`毎月${monthly.toLocaleString("ja-JP")}円 / ${goal}`} />
                <Result icon={Gauge} label="リスク傾向" value={profile.label} />
                <Result icon={CheckCircle2} label="注目候補カテゴリ" value={profile.category} />
              </div>
              <p className="mt-5 rounded-lg bg-amber-50 p-4 text-sm font-bold leading-7 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
                表示結果は投資判断の材料ではなく、比較の出発点です。最終判断では公式情報、目論見書、金融機関の情報を確認してください。
              </p>
              <Link
                className="focus-ring interactive-lift mt-5 inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-black text-white dark:bg-cyan-400 dark:text-slate-950"
                to="/funds"
              >
                ファンドタイプ比較へ
              </Link>
            </section>
          </div>

          <section className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-black uppercase tracking-normal text-emerald-700 dark:text-emerald-300">Starter plan</p>
            <h2 className="break-anywhere mt-2 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
              診断結果を、次の3アクションに落とす。
            </h2>
            <p className="break-anywhere mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              ここで表示する行動案は学習用の整理です。実際の投資額・商品・タイミングは、公式情報と目論見書を確認して判断してください。
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {starterActions.map((action) => (
                <article key={action.label} className="surface-soft rounded-lg bg-slate-50 p-4 dark:bg-slate-950/45">
                  <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{action.label}</p>
                  <h3 className="break-anywhere mt-2 font-black text-slate-950 dark:text-white">{action.title}</h3>
                  <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{action.body}</p>
                </article>
              ))}
            </div>
          </section>

          <CompoundSimulator />
          <RiskNotice />
        </div>
      </section>
    </main>
  );
}

function Result({ icon: Icon, label, value }: { icon: typeof PiggyBank; label: string; value: string }) {
  return (
    <div className="surface-soft flex gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-950/45">
      <Icon className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={22} />
      <div>
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-1 font-black text-slate-950 dark:text-white">{value}</p>
      </div>
    </div>
  );
}

function buildStarterActions(monthly: number, risk: number, goal: string) {
  const monthlyLabel = monthly.toLocaleString("ja-JP");
  const riskText = risk <= 1 ? "値動き控えめの比較軸" : risk === 2 ? "分散を重視する比較軸" : "成長テーマを小さく扱う比較軸";

  return [
    {
      label: "Step 1",
      title: "積立額を家計に戻して確認",
      body: `毎月${monthlyLabel}円を${goal}で続ける前提が、生活防衛資金や近い支出とぶつからないか確認します。`,
    },
    {
      label: "Step 2",
      title: "比較するタイプを3つに絞る",
      body: `${riskText}として、全世界株式、米国株式、バランス型、NASDAQ100などを同じ項目で比較します。`,
    },
    {
      label: "Step 3",
      title: "下落時のルールを先に決める",
      body: "評価額が下がったときに、継続・減額・一時停止・再確認のどれを行うか、事前にメモしておきます。",
    },
  ];
}
