import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertTriangle, ReceiptText, TrendingDown } from "lucide-react";
import { calculateMonthlyCompound, compactYen, yenFormatter } from "../utils/simulation";

const feeOptions = [0.1, 0.3, 0.7, 1.0];
const shockScenarios = [
  {
    label: "株式市場 -20%",
    rate: -20,
    body: "広く分散していても、短期的に大きく下落する局面を想定します。",
  },
  {
    label: "成長テーマ -35%",
    rate: -35,
    body: "NASDAQ100やAI・半導体など、期待が高いテーマほど値動きが大きくなる場合があります。",
  },
  {
    label: "円高影響 -15%",
    rate: -15,
    body: "外貨建て資産は、資産価格だけでなく為替変動でも円換算額が動きます。",
  },
];

export function CostAndShockLab() {
  const [monthly, setMonthly] = useState(30000);
  const [years, setYears] = useState(20);
  const [grossRate, setGrossRate] = useState(5);
  const isCompact = useIsCompact();

  const data = useMemo(() => {
    const noFee = calculateMonthlyCompound(monthly, years, grossRate).at(-1)?.total ?? 0;
    return feeOptions.map((fee) => {
      const netRate = Math.max(grossRate - fee, 0);
      const total = calculateMonthlyCompound(monthly, years, netRate).at(-1)?.total ?? 0;
      return {
        fee: `${fee}%`,
        final: Math.round(total),
        gap: Math.round(noFee - total),
      };
    });
  }, [grossRate, monthly, years]);

  const base = data[1]?.final ?? 0;

  return (
    <section id="cost-and-shock" className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Cost & Shock Lab</p>
          <h2 className="break-anywhere mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            手数料と下落を、始める前にシミュレーションする。
          </h2>
          <p className="break-anywhere mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            長期投資では、費用の小さな差と下落時の心理負担が効いてきます。ここでは概算で、比較時に見るべきポイントを可視化します。
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="surface-card surface-cyan min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <ReceiptText className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={21} />
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">信託報酬差のインパクト</h3>
                </div>
                <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  毎月積立、年率、運用年数を変えて、費用差が最終資産額に与える影響を概算します。
                </p>
              </div>
              <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
                成果を保証するものではありません。
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Control label="毎月積立額">
                <select value={monthly} onChange={(event) => setMonthly(Number(event.target.value))} className="control-input">
                  <option value={10000}>1万円</option>
                  <option value={30000}>3万円</option>
                  <option value={50000}>5万円</option>
                  <option value={100000}>10万円</option>
                </select>
              </Control>
              <Control label="運用年数">
                <select value={years} onChange={(event) => setYears(Number(event.target.value))} className="control-input">
                  <option value={10}>10年</option>
                  <option value={20}>20年</option>
                  <option value={30}>30年</option>
                </select>
              </Control>
              <Control label="想定年率">
                <select value={grossRate} onChange={(event) => setGrossRate(Number(event.target.value))} className="control-input">
                  <option value={3}>3%</option>
                  <option value={5}>5%</option>
                  <option value={7}>7%</option>
                </select>
              </Control>
            </div>

            <div className="mt-6 h-[280px] min-w-0 overflow-hidden rounded-lg border border-slate-100 bg-white p-2 dark:border-slate-800 dark:bg-slate-950/40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 12, right: isCompact ? 6 : 16, left: 0, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.28)" />
                  <XAxis dataKey="fee" tick={{ fontSize: isCompact ? 10 : 12 }} />
                  <YAxis tickFormatter={(value) => compactYen(Number(value))} tick={{ fontSize: isCompact ? 10 : 12 }} width={isCompact ? 52 : 66} />
                  <Tooltip formatter={(value: number) => yenFormatter.format(value)} />
                  <Bar dataKey="final" name="概算最終資産額" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {data.map((row) => (
                <div key={row.fee} className="surface-soft rounded-lg bg-slate-50 p-3 dark:bg-slate-950/45">
                  <p className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">信託報酬 年{row.fee}</p>
                  <p className="mt-1 text-lg font-black text-slate-950 dark:text-white">{yenFormatter.format(row.final)}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">費用なしとの差: {yenFormatter.format(row.gap)}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card surface-gold rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-2">
              <TrendingDown className="text-amber-600 dark:text-amber-300" aria-hidden="true" size={22} />
              <h3 className="text-xl font-black text-slate-950 dark:text-white">下落シナリオの見方</h3>
            </div>
            <p className="break-anywhere mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              比較対象を決める前に、評価額が下がったときの見え方を把握しておくと、積立継続・減額・再確認の判断をしやすくなります。
            </p>
            <div className="mt-5 grid gap-3">
              {shockScenarios.map((scenario) => {
                const after = Math.round(base * (1 + scenario.rate / 100));
                return (
                  <div key={scenario.label} className="surface-soft rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/45">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-1 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden="true" size={18} />
                      <div className="min-w-0">
                        <p className="break-anywhere font-black text-slate-950 dark:text-white">{scenario.label}</p>
                        <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{scenario.body}</p>
                        <p className="mt-2 text-sm font-black text-cyan-700 dark:text-cyan-200">
                          概算評価額: {yenFormatter.format(after)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
              下落率は学習用の仮定です。実際の市場変動、為替、費用、税制は変化します。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Control({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-xs font-black text-slate-500 dark:text-slate-400">
      {label}
      {children}
    </label>
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
