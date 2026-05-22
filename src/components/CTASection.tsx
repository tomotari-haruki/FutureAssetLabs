import { Calculator, ChevronRight, LibraryBig } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection({
  title = "少額から、納得して始める準備をしよう。",
  body = "まずは制度、リスク、シミュレーションを同じ画面で確認。気になるテーマは記事で深掘りできます。",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-band">
      <div className="lab-container">
        <div className="relative overflow-hidden rounded-lg border border-cyan-200/70 bg-gradient-to-br from-cyan-500 via-blue-600 to-emerald-500 p-7 text-white shadow-lift dark:border-cyan-300/20 dark:shadow-lift-dark sm:p-10">
          <div className="absolute inset-0 bg-lab-grid bg-[length:32px_32px] opacity-30" aria-hidden="true" />
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-cyan-100">Future Asset Lab</p>
              <h2 className="break-anywhere mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
              <p className="break-anywhere mt-4 max-w-2xl text-base leading-8 text-cyan-50">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="focus-ring interactive-lift inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-cyan-950 shadow-sm"
                to="/diagnosis"
              >
                <Calculator aria-hidden="true" size={18} />
                無料診断風チェック
              </Link>
              <Link
                className="focus-ring interactive-lift inline-flex items-center gap-2 rounded-lg border border-white/55 bg-white/10 px-5 py-3 text-sm font-black text-white hover:bg-white/16"
                to="/articles"
              >
                <LibraryBig aria-hidden="true" size={18} />
                記事を読む
                <ChevronRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
