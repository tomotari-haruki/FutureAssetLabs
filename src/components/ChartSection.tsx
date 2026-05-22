import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { depositFundStockComparison, nasdaqVsWorldSample, themeDrivers } from "../data/visualizations";
import { buildScenarioSeries, compactYen } from "../utils/simulation";

const rateOptions = [3, 5, 7];

export function ChartSection() {
  return (
    <section className="section-band">
      <div className="lab-container grid gap-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Data Views</p>
          <h2 className="break-anywhere mt-2 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            数字を眺めるだけでなく、判断の材料にする。
          </h2>
          <p className="break-anywhere mt-4 leading-8 text-slate-600 dark:text-slate-300">
            複利、制度枠、比較、テーマ性を視覚化。未確認の市場データはサンプルとして明示し、将来のAPI差し替えを前提に分離しています。
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <ScenarioGrowthChart />
          <ProductComparisonChart />
          <NasdaqWorldChart />
          <ThemeDriverRadar />
        </div>
      </div>
    </section>
  );
}

export function ScenarioGrowthChart() {
  const [rate, setRate] = useState(5);
  const isCompact = useIsCompact();
  const data = useMemo(() => buildScenarioSeries(rate), [rate]);

  return (
    <ChartCard title="毎月1万円・3万円・5万円の20年推移" eyebrow="Compound sample" tone="surface-cyan">
      <div className="mb-4 flex flex-wrap gap-2">
        {rateOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={[
              "focus-ring interactive-lift rounded-lg px-3 py-2 text-sm font-black",
              rate === option
                ? "bg-cyan-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                : "border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200",
            ].join(" ")}
            onClick={() => setRate(option)}
          >
            年率{option}%
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={isCompact ? 240 : 270}>
        <AreaChart data={data} margin={{ top: 10, right: isCompact ? 6 : 18, left: 0, bottom: 4 }}>
          <defs>
            <linearGradient id="one" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="three" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.32} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="five" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.32} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.28)" />
          <XAxis dataKey="year" interval={isCompact ? 3 : 0} tick={{ fontSize: isCompact ? 10 : 12 }} />
          <YAxis tickFormatter={(value) => compactYen(Number(value))} tick={{ fontSize: isCompact ? 10 : 12 }} width={isCompact ? 52 : 68} />
          <Tooltip formatter={(value: number) => compactYen(value)} />
          <Legend iconSize={isCompact ? 8 : 14} wrapperStyle={{ fontSize: isCompact ? 11 : 12 }} />
          <Area type="monotone" dataKey="1万円" stroke="#06b6d4" fill="url(#one)" strokeWidth={2} />
          <Area type="monotone" dataKey="3万円" stroke="#8b5cf6" fill="url(#three)" strokeWidth={2} />
          <Area type="monotone" dataKey="5万円" stroke="#10b981" fill="url(#five)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="mt-3 text-xs font-bold leading-6 text-amber-700 dark:text-amber-200">
        一定利回りのサンプルです。将来の運用成果を保証するものではありません。
      </p>
    </ChartCard>
  );
}

export function ProductComparisonChart() {
  const isCompact = useIsCompact();

  return (
    <ChartCard title="預金・投資信託・個別株の比較スコア" eyebrow="Comparison" tone="surface-gold">
      <ResponsiveContainer width="100%" height={isCompact ? 280 : 310}>
        <BarChart data={depositFundStockComparison} margin={{ top: 10, right: 4, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.28)" />
          <XAxis dataKey="name" tick={{ fontSize: isCompact ? 10 : 12 }} />
          <YAxis domain={[0, 5]} tick={{ fontSize: isCompact ? 10 : 12 }} width={isCompact ? 24 : 30} />
          <Tooltip />
          <Legend iconSize={isCompact ? 8 : 14} wrapperStyle={{ fontSize: isCompact ? 10 : 12 }} />
          <Bar dataKey="returnScore" name="期待リターン" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          <Bar dataKey="riskScore" name="リスク" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="diversificationScore" name="分散性" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="taxScore" name="税制メリット" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
        スコアは理解補助用の定性評価です。向いている人や目的で比較してください。
      </p>
      <DataDetails
        title="比較スコアのデータ"
        rows={depositFundStockComparison.map((item) => ({
          label: item.name,
          values: [
            `期待リターン ${item.returnScore}/5`,
            `リスク ${item.riskScore}/5`,
            `分散性 ${item.diversificationScore}/5`,
            `税制メリット ${item.taxScore}/5`,
          ],
        }))}
      />
    </ChartCard>
  );
}

export function NasdaqWorldChart() {
  const isCompact = useIsCompact();

  return (
    <ChartCard title="NASDAQ100と全世界株式のテーマ比較" eyebrow="Sample data" tone="surface-violet">
      <ResponsiveContainer width="100%" height={isCompact ? 260 : 310}>
        <AreaChart data={nasdaqVsWorldSample} margin={{ top: 10, right: isCompact ? 6 : 18, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.28)" />
          <XAxis dataKey="year" interval={isCompact ? 1 : 0} tick={{ fontSize: isCompact ? 10 : 12 }} />
          <YAxis tick={{ fontSize: isCompact ? 10 : 12 }} width={isCompact ? 34 : 42} />
          <Tooltip />
          <Legend iconSize={isCompact ? 8 : 14} wrapperStyle={{ fontSize: isCompact ? 11 : 12 }} />
          <Area type="monotone" dataKey="nasdaq100" name="NASDAQ100" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.18} />
          <Area type="monotone" dataKey="world" name="全世界株式" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.16} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="mt-3 text-xs font-bold leading-6 text-amber-700 dark:text-amber-200">
        サンプルデータです。実データAPI連携時は同じデータ形状で差し替える想定です。
      </p>
      <DataDetails
        title="サンプル指数データ"
        rows={nasdaqVsWorldSample.map((item) => ({
          label: item.year,
          values: [`NASDAQ100 ${item.nasdaq100}`, `全世界株式 ${item.world}`],
        }))}
      />
    </ChartCard>
  );
}

export function ThemeDriverRadar() {
  const isCompact = useIsCompact();
  const data = [
    { axis: "市場規模", AI: 92, 宇宙: 70, 半導体: 88 },
    { axis: "インフラ需要", AI: 88, 宇宙: 73, 半導体: 92 },
    { axis: "政策支援", AI: 62, 宇宙: 78, 半導体: 76 },
    { axis: "値動き", AI: 82, 宇宙: 86, 半導体: 78 },
    { axis: "投資しやすさ", AI: 72, 宇宙: 45, 半導体: 68 },
  ];
  const colors = ["#06b6d4", "#8b5cf6", "#10b981"];

  return (
    <ChartCard title="AI・宇宙・半導体テーマの成長ドライバー" eyebrow="Theme drivers" tone="surface-emerald">
      <ResponsiveContainer width="100%" height={isCompact ? 280 : 310}>
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(148, 163, 184, 0.34)" />
          <PolarAngleAxis dataKey="axis" tick={{ fontSize: isCompact ? 10 : 12 }} />
          <Tooltip />
          <Legend iconSize={isCompact ? 8 : 14} wrapperStyle={{ fontSize: isCompact ? 11 : 12 }} />
          {themeDrivers.map((driver, index) => (
            <Radar
              key={driver.theme}
              name={driver.theme}
              dataKey={driver.theme}
              stroke={colors[index]}
              fill={colors[index]}
              fillOpacity={0.16}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-3 grid gap-2 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:grid-cols-3">
        <p>AI: 生成AI、クラウド、半導体需要</p>
        <p>宇宙: 衛星通信、打ち上げコスト低下、防衛・通信需要</p>
        <p>半導体: GPU、データセンター、AI推論需要</p>
      </div>
      <DataDetails
        title="テーマドライバーのスコア"
        rows={themeDrivers.map((item) => ({
          label: item.theme,
          values: [
            `市場規模 ${item.market}`,
            `インフラ需要 ${item.infra}`,
            `政策支援 ${item.policy}`,
            `値動き ${item.volatility}`,
            `投資しやすさ ${item.accessibility}`,
          ],
        }))}
      />
    </ChartCard>
  );
}

function ChartCard({
  eyebrow,
  title,
  children,
  tone,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <article className={`surface-card ${tone} min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}>
      <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
      <h3 className="break-anywhere mt-2 text-xl font-black leading-snug text-slate-950 dark:text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function DataDetails({ title, rows }: { title: string; rows: Array<{ label: string; values: string[] }> }) {
  return (
    <details className="surface-soft mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/45">
      <summary className="cursor-pointer text-sm font-black text-slate-800 dark:text-slate-100">{title}</summary>
      <div className="mt-3 grid gap-2">
        {rows.map((row) => (
          <div key={row.label} className="rounded-lg bg-white p-3 text-xs leading-6 dark:bg-slate-900/75">
            <p className="font-black text-slate-950 dark:text-white">{row.label}</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{row.values.join(" / ")}</p>
          </div>
        ))}
      </div>
    </details>
  );
}

function useIsCompact() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return isCompact;
}
