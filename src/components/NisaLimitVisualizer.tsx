import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { nisaLimits } from "../data/visualizations";

export function NisaLimitVisualizer() {
  const lifetimeLimit = 1800;
  const sampleUsed = 360;
  const progress = Math.round((sampleUsed / lifetimeLimit) * 100);

  return (
    <section className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div>
        <p className="text-sm font-black uppercase tracking-normal text-emerald-700 dark:text-emerald-300">
          NISA Limits
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">新NISAの枠を可視化</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          2024年以降の新NISA制度に基づく表示です。年間投資枠は最大360万円、つみたて投資枠120万円と成長投資枠240万円で構成されます。
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[260px_1fr] lg:items-center">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={nisaLimits} dataKey="value" nameKey="name" innerRadius={62} outerRadius={96} paddingAngle={3}>
                {nisaLimits.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}万円`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid gap-4">
          {nisaLimits.map((limit) => (
            <div key={limit.name} className="surface-soft rounded-lg border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/45">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: limit.color }} />
                  <span className="font-black text-slate-950 dark:text-white">{limit.name}</span>
                </div>
                <span className="text-xl font-black text-slate-950 dark:text-white">年間{limit.value}万円</span>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-300/20 dark:bg-emerald-400/10">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-black text-emerald-800 dark:text-emerald-200">生涯非課税保有限度額</p>
                <p className="mt-1 text-xs leading-6 text-emerald-900/80 dark:text-emerald-100/80">
                  サンプルとして1年分360万円を使った場合の進捗
                </p>
              </div>
              <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100">最大1,800万円</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-sm bg-white/80 dark:bg-slate-950/60">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-xs font-bold text-emerald-900/80 dark:text-emerald-100/80">サンプル進捗 {progress}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
