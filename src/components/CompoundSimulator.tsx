import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { calculateMonthlyCompound, compactYen, yenFormatter } from "../utils/simulation";

const monthlyOptions = [10000, 30000, 50000, 100000];
const yearOptions = [5, 10, 20, 30];
const rateOptions = [3, 5, 7];

export function CompoundSimulator() {
  const [monthlyContribution, setMonthlyContribution] = useState(30000);
  const [years, setYears] = useState(20);
  const [annualRate, setAnnualRate] = useState(5);
  const isCompact = useIsCompact();

  const data = useMemo(
    () => calculateMonthlyCompound(monthlyContribution, years, annualRate),
    [annualRate, monthlyContribution, years],
  );

  const latest = data.at(-1) ?? { principal: 0, gain: 0, total: 0 };
  const visibleRows = data.filter((point) => point.year === 1 || point.year % 5 === 0 || point.year === years);

  return (
    <section id="simulator" className="surface-card surface-cyan min-w-0 rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">
            Compound Simulator
          </p>
          <h2 className="break-anywhere mt-2 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">資産形成シミュレーション</h2>
          <p className="break-anywhere mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            毎月積立額、運用年数、想定年率を変えて、元本と運用益の関係を確認できます。
          </p>
        </div>
        <p className="break-anywhere rounded-lg bg-amber-50 px-4 py-3 text-xs font-bold leading-6 text-amber-900 dark:bg-amber-300/10 dark:text-amber-100">
          このシミュレーションは一定の利回りを仮定した概算であり、将来の運用成果を保証するものではありません。
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <ControlGroup label="毎月積立額">
          <div className="flex flex-wrap gap-2">
            {monthlyOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={buttonClass(monthlyContribution === option)}
                onClick={() => setMonthlyContribution(option)}
              >
                {option / 10000}万円
              </button>
            ))}
          </div>
          <label className="mt-3 block text-xs font-bold text-slate-500 dark:text-slate-400">
            自由入力
            <input
              type="number"
              min={1000}
              step={1000}
              value={monthlyContribution}
              onChange={(event) => setMonthlyContribution(Number(event.target.value) || 0)}
              className="focus-ring mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>
        </ControlGroup>

        <ControlGroup label="運用年数">
          <div className="flex flex-wrap gap-2">
            {yearOptions.map((option) => (
              <button key={option} type="button" className={buttonClass(years === option)} onClick={() => setYears(option)}>
                {option}年
              </button>
            ))}
          </div>
          <input
            aria-label="運用年数"
            type="range"
            min={1}
            max={35}
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
            className="mt-4 w-full accent-cyan-600"
          />
        </ControlGroup>

        <ControlGroup label="想定年率">
          <div className="flex flex-wrap gap-2">
            {rateOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={buttonClass(annualRate === option)}
                onClick={() => setAnnualRate(option)}
              >
                {option}%
              </button>
            ))}
          </div>
          <label className="mt-3 block text-xs font-bold text-slate-500 dark:text-slate-400">
            自由入力
            <input
              type="number"
              min={0}
              max={15}
              step={0.1}
              value={annualRate}
              onChange={(event) => setAnnualRate(Number(event.target.value) || 0)}
              className="focus-ring mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>
        </ControlGroup>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Result label="元本合計" value={yenFormatter.format(latest.principal)} />
        <Result label="運用益" value={yenFormatter.format(Math.max(latest.gain, 0))} />
        <Result label="最終資産額" value={yenFormatter.format(latest.total)} accent />
      </div>

      <div className="mt-6 h-[280px] min-w-0 overflow-hidden rounded-lg border border-slate-100 bg-white p-2 dark:border-slate-800 dark:bg-slate-950/40 sm:h-[320px] sm:p-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: isCompact ? 6 : 18, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.28)" />
            <XAxis dataKey="year" interval={isCompact ? 2 : 0} tickFormatter={(value) => `${value}年`} tick={{ fontSize: isCompact ? 10 : 12 }} />
            <YAxis tickFormatter={(value) => compactYen(Number(value))} tick={{ fontSize: isCompact ? 10 : 12 }} width={isCompact ? 52 : 68} />
            <Tooltip
              formatter={(value: number) => yenFormatter.format(value)}
              labelFormatter={(label) => `${label}年目`}
              contentStyle={{ borderRadius: 8, borderColor: "rgba(148, 163, 184, 0.45)" }}
            />
            <Legend iconSize={isCompact ? 8 : 14} wrapperStyle={{ fontSize: isCompact ? 11 : 12 }} />
            <Line type="monotone" dataKey="principal" name="元本" stroke="#94a3b8" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="total" name="資産額" stroke="#06b6d4" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 grid gap-3 lg:hidden">
        {visibleRows.map((point) => (
          <article
            key={point.year}
            className="surface-soft rounded-lg border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-800 dark:bg-slate-950/45"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{point.year}年目</h3>
              <span className="rounded-lg bg-cyan-50 px-2.5 py-1 text-xs font-black text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-100">
                年別サマリー
              </span>
            </div>
            <dl className="mt-3 grid gap-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="font-bold text-slate-500 dark:text-slate-400">元本</dt>
                <dd className="font-black text-slate-800 dark:text-slate-100">{yenFormatter.format(point.principal)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="font-bold text-slate-500 dark:text-slate-400">運用益</dt>
                <dd className="font-black text-slate-800 dark:text-slate-100">{yenFormatter.format(point.gain)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-2 dark:border-slate-800">
                <dt className="font-bold text-slate-500 dark:text-slate-400">資産額</dt>
                <dd className="text-lg font-black text-cyan-700 dark:text-cyan-200">{yenFormatter.format(point.total)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="chart-scroll mt-5 hidden overflow-x-auto lg:block">
        <table className="min-w-full text-left text-sm">
          <thead className="text-xs text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-3 py-2">年</th>
              <th className="px-3 py-2">元本</th>
              <th className="px-3 py-2">運用益</th>
              <th className="px-3 py-2">資産額</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {visibleRows.map((point) => (
                <tr key={point.year}>
                  <td className="px-3 py-2 font-bold">{point.year}年</td>
                  <td className="px-3 py-2">{yenFormatter.format(point.principal)}</td>
                  <td className="px-3 py-2">{yenFormatter.format(point.gain)}</td>
                  <td className="px-3 py-2 font-black text-cyan-700 dark:text-cyan-200">
                    {yenFormatter.format(point.total)}
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
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

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="surface-soft rounded-lg border border-slate-200 bg-slate-50/85 p-4 dark:border-slate-800 dark:bg-slate-950/45">
      <p className="mb-3 text-sm font-black text-slate-950 dark:text-white">{label}</p>
      {children}
    </div>
  );
}

function Result({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="surface-soft rounded-lg border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-800 dark:bg-slate-950/45">
      <p className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">{label}</p>
      <p className={`mt-2 text-2xl font-black ${accent ? "text-cyan-700 dark:text-cyan-200" : "text-slate-950 dark:text-white"}`}>
        {value}
      </p>
    </div>
  );
}

function buttonClass(active: boolean) {
  return [
    "focus-ring interactive-lift rounded-lg px-3 py-2 text-sm font-black",
    active
      ? "bg-cyan-600 text-white shadow-sm dark:bg-cyan-400 dark:text-slate-950"
      : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
  ].join(" ");
}
